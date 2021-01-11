import React, {useCallback, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Header from "./components/header/Header";
import './App.css'
import ProductList from "./components/product-list/ProductList";
import {useServices} from "./services";
import {setProducts} from "./redux";

export default function App() {

    const {cart, wishlist, products} = useSelector(({cart: {cart}, wishlist: {wishlist}, products: {products}}) => ({
        cart,
        wishlist,
        products
    }))

    const dispatch = useDispatch();
    const {productService} = useServices();

    // const fetchData = useCallback(async () => {
    //     const response = await productService.getProducts();
    //     const json = await response.json();
    //
    //     dispatch(setProducts(json));
    //     // console.log(json);
    // }, [])


    useEffect(() => {
        // fetchData()
        dispatch(setProducts());
    }, [])

    return (
        <div>
            <Header/>
            <ProductList products={products}/>
            <h2>Hello React</h2>
            {products.length}
        </div>
    );

}
