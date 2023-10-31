import {combineReducers} from 'redux';
import { ProductReducer } from './ProductReducer';
import { selectedProductReducer } from './ProductReducer';


const reducers = combineReducers({
    allproducts : ProductReducer,
    product : selectedProductReducer,
});


export default reducers;    