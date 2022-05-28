import {applyMiddleware, compose, createStore} from 'redux';
import rootReducer from './reducers';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';


const initialState = {}
const initialStateCat = {}

const initialStates = {initialStateCat, initialState }



const composeFunc = process.env.NODE_ENV === 'development' ? composeWithDevTools : compose;

const composeEhhancers = composeFunc(applyMiddleware(thunk))

const store = createStore(rootReducer(), initialStates, composeEhhancers);

export default store