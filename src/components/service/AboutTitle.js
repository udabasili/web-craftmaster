import React from "react";

function AboutTitle ({
        selectItem
    }) {
    return (
      <h2 
        className="section-title pb-30" 
        onClick={e => selectItem(e.target, 'text')}>
        About Us
      </h2>
    );
  
}

export default AboutTitle;
