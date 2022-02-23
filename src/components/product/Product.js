import React, { useEffect, useState } from "react";
import ProductItem from "./ProductItem";

function Product ({ selectItem }) {

    const [products, setProducts] = useState(null)
    return (
      <section id="shop" className="product-area">
        <a 
            href="#modal"
            className="main-btn">
                Add Product
        </a>
        <div className="container">
            <div className="products mt-10">
                {   
                    products && products.map(item => (
                        <ProductItem 
                            key={item.id} 
                            item={item} 
                            selectItem={selectItem}/>
                    ))
                }
            </div>
        </div>
      </section>
    );
}


export default Product;
