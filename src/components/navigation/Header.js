import React from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";

function Header ({
        selectItem,
        iconUrl
    }) {
    return (
        <header className="header-area">
            <nav className="navbar navbar-expand-lg">
                <p className="navbar-brand" >
                    <img src={iconUrl}
                        alt = "Logo"
                    />
                </p>
                <Logo/>
                <Navbar selectItem={selectItem}/>
            </nav>
        </header>
    );
  }


export default Header;
