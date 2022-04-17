import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { AddClassData } from "../Redux/Class/action";

export const Class = () => {
  const { id } = useParams();
  //const [details, setDetails] = useState([]);
  const dispatch = useDispatch();
  const  { classes } = useSelector((store)=> store.classes);
  useEffect(() => {
    axios.get(`http://localhost:8080/classes?teacher_id=${id}`).then(({data})=>{
        dispatch(AddClassData(data))
        })
        
       
  }, []);
  
console.log(classes)



  


  return (
    <>
      <div className="navbar">
        <b>{`Details of Teacher_id:${id}`}</b>
      </div>
      <div className="bodypart">
        <table>
          <thead>
            <tr style={{ border: "1px", color: "black" }}>
              <td style={{ width: "150px" }}>class_id</td>
              <td style={{ width: "150px" }}>grade</td>
              <td style={{ width: "150px" }}>section</td>
              <td style={{ width: "150px" }}>subject</td>
              <td style={{ width: "150px" }}>teacher_id</td>
            </tr>
            <tr>
              <td>
                <hr />
              </td>
              <td>
                <hr />
              </td>
              <td>
                <hr />
              </td>
              <td>
                <hr />
              </td>
              <td>
                <hr />
              </td>
            </tr>
          </thead>

          {classes.map((e) => {
            return (
              <tbody key={e.id}>
                <tr>
                  <td style={{ width: "150px" }}>{e.id}</td>
                  <td style={{ width: "150px" }}>{e.grade}</td>
                  <td style={{ width: "150px" }}>{e.section}</td>
                  <td style={{ width: "150px" }}>{e.subject}</td>
                  <td style={{ width: "150px" }}>{e.teachersID}</td>
                  <td style={{ width: "150px" }}></td>
                </tr>
              </tbody>
            );
          })} 
        </table>
      </div>
    </>
  );
}




