import React from "react";

function AboutItem ({
        selectItem
    }) {
    return (
        <div className="single-about text-center mb-10">
            <div className="about-icon">
                <i className="lni-grid-alt" />
            </div>
            <div className="about-content mt-20">
                <h5 
                    className="title mb-10"
                    onClick={e => selectItem(e.target, 'text')}
                    >
                    Furnitures
                </h5>
                <p onClick={e => selectItem(e.target, 'text')}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                    eiusm od tempor.
                </p>
            </div>
        </div>
    );
}


export default AboutItem;
