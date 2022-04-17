import axios from "axios";
import { useState , useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { AddTeacherData } from "../Redux/Teacher/action";
import { useNavigate } from "react-router-dom";


  export const Teacherslist = ()=>{
    const no = 1;
     
      const [page, setPage] = useState(no);
      const [age] = useState("age")
      const [order, setOrder] = useState("asc")
      const [gender, setGender] = useState()
      const perPage = 20;
      const navigate = useNavigate();
    // --------------------
    // const  [text , setText] = useState("");
    // const  [gen, setGen] = useState("");
    // const  [Age, setAge] = useState("");
    // const  [Clas, setClass] = useState("");
    const { teacher } = useSelector((store)=> store.teachers);
    const dispatch = useDispatch();
    // --------------

      useEffect(()=>{
          axios.get("http://localhost:8080/teachers",{
              params:{
                _page:page,
                _limit:perPage,
                _sort:age,
                _order:order,
                gender:gender,
                
              }
          }).then(({data})=>{
                dispatch(AddTeacherData(data))
                })
      },[gender,order,page])

  

    
      
    // const addTodos = ()=>{
    //     axios.post("http://localhost:8080/teachers" , {
    //         teacher_name : text,
    //         gender: gen,
    //         age: Age,
    //         classes:Clas,
    //         status: false,
    //     }).then((res)=>{
    //        console.log(res)
    //     })
    // }
    
      return (
          <div>
              
             {/* <div>
             <input type="text" onChange={(e) => setText(e.target.value)} />
             <input type="text" onChange={(e) => setGen(e.target.value)} />
             <input type="text" onChange={(e) => setAge(e.target.value)} />
             <input type="text" onChange={(e) => setClass(e.target.value)} />
             <button onClick={()=>{
               addTodos();
             }}>ADD todo</button>
             </div> */}
             <button onClick={()=>{navigate("/login")}}>Admin Login</button>
              <h1>Teachers list</h1>
              <button onClick={()=>{setOrder("asc")}}>sort low to high</button><button onClick={()=>{setOrder("desc")}}>sort high to low</button>
              <button onClick={()=>{setGender("Male")}}>Male</button><button onClick={()=>{setGender("Female")}}>Female</button>
              <div><button onClick={()=>(setPage(1))}>1</button><button onClick={()=>(setPage(2))}>2</button> <button onClick={()=>(setPage(3))}>3</button><button onClick={()=>(setPage(4))}>4</button></div>
              {teacher.map((el)=>(
            <div style={{display:"flex", 
             width:"500px",
             justifyContent:"space-around",
              height:"100px", border: "1px solid gray",
               marginBottom:"20px",
                marginLeft:"150px"}} 
                key={el.id}>
            <p>{el.id}</p>
            <p>{el.teacher_name}</p>
            <p>{el.gender}</p>
            <p>{el.age}</p>
            <p>{el.classes}</p>
            <button style={{height:"30px", background:"none" , color:"black"}}>view</button>
        </div>
          ))}</div>
      )
  }