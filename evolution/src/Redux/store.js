import { createStore  , combineReducers , applyMiddleware} from "redux";
import { loginReducer } from "./Login/reducer";
import thunk from "redux-thunk";
import { teacherReducer } from "./Teacher/reducer";
import { classReducer } from "./Class/reducer";


export const rootReducer = combineReducers({
    login: loginReducer,
    teachers:teacherReducer,
    classes: classReducer
      
})

export const store = createStore(rootReducer , applyMiddleware(thunk)); 