import {combineReducers} from "redux";
import products from './products';
import wishlist from './wishlist';
import cart from './cart';


export const reducer = combineReducers({
    cart, wishlist, products
})