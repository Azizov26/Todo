import { combineReducers } from "redux";
import tasks from "./tasks";
import cat from "./cat";


const rootReducer = () => combineReducers({
	tasks,
	cat,

})

export default rootReducer