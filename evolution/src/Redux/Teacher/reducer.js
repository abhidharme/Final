import { ADD_DATA } from "./action";

const initState = {
    teacher:[]
}
export const teacherReducer = (store = initState , {type , payload} )=>{
    switch(type){
        case ADD_DATA:
            return{...store , 
            teacher:[...payload]
        };
        default:
            return store;
    }

}