import React,{useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, deleteTask, doImportant, doDone } from "./redux/reducers/tasks";
import {addCat, deleteCat} from './redux/reducers/cat'





function App() {

	const dispatch = useDispatch()
	const todos = useSelector((store) => store.tasks.todos);
	const category = useSelector((store) => store.cat.category);


	const [cats, setCats] = useState('')
	const [task,setTask] = useState("")

  return (
    <div className="App">
		 <div className="wrapper">
		 <h1> Todo List</h1>
		 <div className="catPanel">
		 <div>
			 <input type='text' value={cats} onChange = {(e) => setCats(e.target.value) }/>
			 <button className="btnCat" type="button" onClick={() => {
				 dispatch(addCat(cats));
				 setCats('')
			 } }> Добавить категорию </button>
		 </div>
		 <ul>
			 {
				 category.map((items) => {
					<li className="liCats" key={items.id} style={{
						margin: '10px 0',
						display: 'flex',
						justifyContent: "space-between",
						alignItems: 'center',
						padding: '.5rem 1rem',
						border: '1px solid #ccc',
						borderRadius: '4px',
						marginBottom: ".8rem",
						}}>
						{items.title}
						<button className="btnDelete" type='button' onClick={() => dispatch(deleteCat(items.id))}> Удалить </button>
						</li>
				 })
			 }
		 </ul>
		 </div>
		 <div>
			 <input className='in' type='text' value={task} onChange={(e) => setTask(e.target.value) } />
			 <button className="btn" type="button" onClick={() => {
				 dispatch(addTask(task));
				 setTask('')
			 } }> ✎ </button>
		 </div>
		 <ul>
			{
				todos.map((item) => (
					<li key={item.id} style={{
						margin: '20px 0',
						color: item.isImportant ? 'red' : '',
						background: item.isDone ? "cadetblue" : '',
						display: 'flex',
						justifyContent: "space-between",
						alignItems: 'center',
						padding: '.5rem 1rem',
						border: '1px solid #ccc',
						borderRadius: '4px',
						marginBottom: ".5rem",
						}}>
						{item.title}
						<div className="btnMas">
						<button className="btnDel" type='button' onClick={() => dispatch(deleteTask(item.id))}> ✘ </button>
					<button className="btnImp" type="button" onClick={() => dispatch(doImportant(item.id))}> ✮ </button>
					<button className="btnDone" type="button" onClick={() => dispatch(doDone(item.id))} > ✔ </button>
						
						</div>
						</li>))}
		 </ul>
		 <div className="search-panel d-flex">

		 </div>
    </div>
	 </div>
  );
}

export default App;
