import React from "react";
import AboutItem from "./AboutItem";

function AboutRight ({
    selectItem
}) {
    return (
        <React.Fragment>
            <div className="col-md-6 col-sm-8">
                <AboutItem  selectItem ={selectItem}/>
                <AboutItem  selectItem ={selectItem}/>
            </div>
            <div className="col-md-6 col-sm-8">
                <AboutItem selectItem ={selectItem}/>
                <AboutItem selectItem ={selectItem}/>
            </div>
        </React.Fragment>
    );
  }


export default AboutRight;
