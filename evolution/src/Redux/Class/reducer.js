import { store } from "../store";
import { ADD_CLASS } from "./action";

 const initState = {
     classes:[]
 }
export const classReducer = (store = initState , {type , payload})=>{
    switch(type){
        case ADD_CLASS:
            return{...store , 
                classes: [...payload]
            }
            default:
                return store;
    }
}