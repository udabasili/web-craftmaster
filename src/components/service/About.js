import React from "react";
import AboutTitle from "./AboutTitle";
import AboutRight from "./AboutRight";

function About ({
        selectItem
    }) {
    return (
        <section id="about" className="about-area pt-125 pb-130">
            <div className="container">
                <div className="row">
                        <AboutTitle selectItem ={selectItem}/>
                </div>
                <div className="row my-5">
                        <AboutRight selectItem ={selectItem}/>
                </div>
            </div>
        </section>
    );
  }


export default About;
