import React, { useContext } from "react";
import { Context } from "../../context";

const NAVBAR = {
    business: [
        "Home",
        "About",
        "Portfolio",
        "Services",
        "Team",
        "Contact"
    ],
    fashion: [
        "Home",
        "About",
        "Blog",
        "Contact"
    ],
    ecommerce:[
        "Home",
        "About",
        "Shop",
        "Contact"
    ]
}
function Navbar ({ selectItem }) {

    const { state } = useContext(Context);
    const questions = state.questions;
    const category = questions.category;
    const navbarSelection = NAVBAR[category];

    return (
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul id="nav" className="navbar-nav ml-auto">
                {
                    navbarSelection.map((item) => (
                        <li className="nav-item " key={item}>
                            <a 
                                data-scroll-nav={0} 
                                href={`#${item.toLowerCase()}`}
                                onClick = {(e) => selectItem(e.target, 'text')}
                            >
                                {item}
                            </a>
                        </li>
                    ))
                }
            
            </ul>
      </div>
    );
  }


export default Navbar;
