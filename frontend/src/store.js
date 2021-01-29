import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'


const reducer = combineReducers({})
const logger = createLogger();
const initialState = {}

const store = createStore(reducer, 
    initialState, 
    composeWithDevTools(applyMiddleware(logger, thunk)))

export default store