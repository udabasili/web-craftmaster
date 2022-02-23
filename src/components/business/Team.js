import React from "react";

function Team({
    selectItem
}) {
    return (
      <div className="col">
            <div className="single-temp text-center mt-30">
                <div className="team-image">
                    <img 
                        onClick={e => selectItem(e.target, 'image')} 
                        src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" 
                        alt="Team" />
                </div>
                <div className="team-content mt-30">
                    <h4 className="title mb-10">
                        <a 
                        href="#teams" 
                        onClick={e => selectItem(e.target, 'text')} >
                            Celina Gomez
                        </a>
                    </h4>
                    <span onClick={e => selectItem(e.target, 'text')} >FOUNDER</span>
                    <ul className="social mt-15">
                    <li>
                        <a href="#teams">
                        <i className="lni-facebook-filled" />
                        </a>
                    </li>
                    <li>
                        <a href="#teams">
                        <i className="lni-twitter-original" />
                        </a>
                    </li>
                    <li>
                        <a href="#teams">
                        <i className="lni-instagram" />
                        </a>
                    </li>
                    </ul>
                </div>
            </div>
        </div>
    );
  }

export default Team;
