import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'
import { productDetailsReducer, productListReducer} from './reducers/productReducers'
import { cartReducer } from './reducers/cartReducers'

const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer
})

const cartItemsFromStorage = localStorage.getItem('cartItems') ? 
JSON.parse(localStorage.getItem('cartItems')) : []

const logger = createLogger();

const initialState = {
    cart: { cartItems: cartItemsFromStorage }
}

const store = createStore(reducer, 
    initialState, 
    composeWithDevTools(applyMiddleware(logger, thunk)))

export default store