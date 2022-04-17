import axios from "axios";
import { useState , useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { AddTeacherData } from "../Redux/Teacher/action";
import { useNavigate } from "react-router-dom";



  export const AddTecherDetails = ()=>{
    
      
 
    const  [text , setText] = useState("");
    const  [gen, setGen] = useState("");
    const  [Age, setAge] = useState("");
    const  [Clas, setClass] = useState("");
    const { teacher } = useSelector((store)=> store.teachers);
   
    
const navigate = useNavigate();

  

    
      
    const addTeachers = ()=>{
        axios.post("http://localhost:8080/teachers" , {
            teacher_name : text,
            gender: gen,
            age: Age,
            classes:Clas,
            status: false,
        }).then((res)=>{
               console.log(res)
                })
    }
    
      return (
          <div>
              <button onClick={()=>{navigate("/")}}>Teacher data</button>
             <div>
             <input type="text" placeholder="Teacher Name" onChange={(e) => setText(e.target.value)} />
             <br></br>
             <input type="text" placeholder="Gender" onChange={(e) => setGen(e.target.value)} />
             <br></br>
             <input type="text" placeholder="Age" onChange={(e) => setAge(e.target.value)} />
             <br></br>
             <input type="text" placeholder="Classes" onChange={(e) => setClass(e.target.value)} />
             <br></br>
             <button onClick={()=>{
               addTeachers();
             }}>ADD todo</button>
             </div>
            </div>
      )
  }