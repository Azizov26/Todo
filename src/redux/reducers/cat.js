const ADD = 'ADD';
const DELETE = 'DELETE'


const initialStateCat = {
	category: [{
		title: 'Дом', 
		isDelete: false,
		isDone: false,
		id: 1
	},
	{
		title: 'Работа', 
		isDelete: false,
		isDone: false,
		id: 2
	},
	{
		title: 'Спорт', 
		isDelete: false,
		isDone: false,
		id: 3
	},
	], count: 3,};

	export default(state = initialStateCat, action ) => {
		switch (action.type) {
			case ADD: {
					return {
						...state,
						category: [...state.category, {
							title: action.title, 
							isDelete: false,
							isDone: false,
							id: Date.now()
						}],
						count: state.count + 1
					}
			}
		case DELETE: {
			return {
				...state,
				category: state.category.filter((item) => item.id !== action.id),
				count: state.count - 1
			}
		}
		default: return state
		}}

		export const addCat =(title) => {
			return (dispatch) => {
				return dispatch({type: ADD, title})
			}
		}
		export const deleteCat = (id) => {
			return (dispatch) => {
				return dispatch({type: DELETE, id}) 
			}
		}