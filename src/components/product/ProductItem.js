import React, { useState, useEffect } from "react";

function ProductItem ({ selectItem, item }) {
    const { name, image, price} = item;

    const [discountPrice, setdiscountPrice] = useState(0)
    const [discount, setDiscount] = useState(60)

    useEffect(() => {
        let percentage = discount / 100;
        let result = Number(price) - (percentage * Number(price))
        setdiscountPrice(result)
    }, [discount]);

    useEffect(() => {
        const discountElement = document.querySelector("#discount")
        const config = {
            attributes: true,
            childList: true,
            subtree: true
        };

        const observer = new MutationObserver((list) => {
            let result = Number(list[0].target.textContent)
            setDiscount(result)
        });
        observer.observe(discountElement, config);


    }, []);

    return (
        <div className="product">
            <img 
                onClick={e => selectItem(e.target, 'image')}
                src={image} alt={name} className="product__img"/>
            <h5 
                onClick={e => selectItem(e.target, 'text')}
                className="product__name">
                    {name}
            </h5>
            <div class="product__discount" >
                <p>
                <span onClick={e => selectItem(e.target, 'text')} id="discount">
                    {discount}
                </span>
                <span>%</span>
                </p>
            </div>
            <div className="product__prices">
                <span class="product__old-price" >
                    <span>$</span>
                    <span onClick={e => selectItem(e.target, 'text')}>{price}</span>
                </span>
                <span class="product__new-price">
                     <span>$</span>
                    <span onClick={e => selectItem(e.target, 'text')}>{discountPrice}</span>
                </span>
            </div>
           
            <button class="product__btn" onClick={e => selectItem(e.target, 'button')}>Buy</button>
        </div>
    );
}


export default ProductItem;