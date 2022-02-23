import React from "react";
import Team from "./Team";

function Teams({
    selectItem
}) {
    return (
      <section id="team" className="team-area pt-125 pb-130">
        <div className="container">
            <div className="row justify-content-center w-100">
                <h2 
                    className="section-title pb-30" 
                    onClick={e => selectItem(e.target, 'text')} >
                        Our Expert Team
                </h2>
            </div>
            <div className="row justify-content-center">
                <Team selectItem={selectItem}/>
                <Team selectItem={selectItem}/>
                <Team selectItem={selectItem}/>
                <Team selectItem={selectItem}/>
            </div>
        </div>
      </section>
    );
}


export default Teams;
