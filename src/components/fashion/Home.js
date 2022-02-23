import React from 'react'

export default function Home({
    selectItem,
    websiteName
}) {

    return (
        <>
            <header 
                className="w3-display-container w3-wide home--fashion mt-lg-5" >
                    <img 
                        alt="home"
                        className="image image--home"
                        onClick={e => selectItem(e.target, "image")}
                        src='https://images.unsplash.com/photo-1496747611176-843222e1e57c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1652&q=80'>

                    </img>
            </header>
            <div id="container10" className="container default full screen">
                <div className="inner d-flex flex-column">
                    <h1 
                        id="text11" 
                        className="header-1 text-center" onClick={e => selectItem(e.target, 'text')}>
                        {websiteName}
                    </h1>
                    <button 
                        onClick={e => selectItem(e.target, 'button')}
                        style={{
                            backgroundColor: "black",
                            color: "white"
                        }}
                        className="btn align-self-center btn-main">
                        Get Started
                    </button>
                </div>
        </div>
        </>
    );
}
