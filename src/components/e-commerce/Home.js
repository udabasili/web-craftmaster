import React from "react";
import Slide from "./Slide";


function Home ({ selectItem, websiteName }) {
    return (
      <header id="home" className="slider-area">
        <div className="position-relative">
          <Slide 
            selectItem={selectItem}
            websiteName={websiteName}
            />
        </div>
      </header>
    );
}


export default Home;
