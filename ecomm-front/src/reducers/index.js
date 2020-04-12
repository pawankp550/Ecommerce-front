import cartReducer from './cartReducer'

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    cartState: cartReducer
})

export default rootReducer
