import React from "react";
import { PRODUCTS } from "../../products"; //importing Data here.
import { Product } from "./product";
import "./shop.css";

export const Shop = () => {
    return (
        <div className="shop">
            <div className="shopTitle"> Tamwood Store</div>
            <div className="products">
                {PRODUCTS.map((product) => <Product data={product} />)}
            </div>
        </div>
    )
}