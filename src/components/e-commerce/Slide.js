import React, { useContext } from "react";
import { Context } from "../../context";

function Slide({
        selectItem,
        websiteName
    }) {
    
    const { state } = useContext(Context);
    const questions = state.questions;
    
    const setMainButton = () => { 
        if (questions.category === 'business') {
            return  "Explore More"
        } else {
            return "Shop"
        }
    }

    return (
      <div className="single-slider">
        <div className="slider-bg">
            <div className="row no-gutters align-items-center">
                <div className="col-lg-4 col-md-5">
                <div className="slider-product-image d-none d-md-block">
                    <img 
                        onClick={e => selectItem(e.target, "image")}
                        src="https://images.unsplash.com/photo-1606787364406-a3cdf06c6d0c?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" 
                        alt="Slider" 
                    />
                    <div className="slider-discount-tag"/>
                </div>
            </div>
            <div className="col-lg-8 col-md-7 mobile pt-3">
              <div className="slider-product-content">
                    <h1 className="slider-title mb-10">
                        {
                            websiteName.split(" ").map((text, index) => (
                                <span 
                                    className={
                                        index !== 0 ? 
                                        "" : 
                                        "underline"
                                    }
                                    onClick={e => selectItem(e.target, "text")}>
                                        {text}
                                </span>
                            ))
                        }
                    </h1>
                <a
                  className="main-btn"
                  href="#shop"
                  onClick={e => selectItem(e.target, "text")}
                >
                    { setMainButton()}
                    <i className="lni-chevron-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }


export default Slide;
