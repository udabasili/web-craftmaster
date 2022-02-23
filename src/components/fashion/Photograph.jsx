import React from 'react'
import './styles.css'

function Photographs({
    selectItem,
    websiteName
}) {
  return (
    <>
      <div id="container06" className="container default full screen">
        <div className="wrapper">
            <div className="inner">
                <h3 id="text04" className="header-3"  onClick={e => selectItem(e.target, "text")}>{websiteName}</h3>
                <h2 id="text19" className="header-2"  onClick={e => selectItem(e.target, "text")}>Photographs</h2>
                <p id="text20" className="paragraph-text"  onClick={e => selectItem(e.target, "text")}>Mi proin sed libero enim sed faucibus turpis in eu. Ipsum
                    dolor sit amet consectetur adipiscing elit duis. At augue eget arcu dictum varius duis
                    at. Mauris augue neque gravida in vitae turpis massa sed elementum.
                </p>
            </div>
        </div>
    </div>
     <div 
        id="container05" 
        data-scroll-id="start" 
        data-scroll-behavior="center" 
        data-scroll-offset="0"
        className="container columns full screen">
            <div className="wrapper">
                <div className="inner">
                    <div>
                        <div id="image04" className="image">
                            <span className="frame">
                                <img
                                    onClick={e => selectItem(e.target, "image")}
                                    src="https://images.unsplash.com/photo-1485968579580-b6d095142e6e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80" alt=""/>
                            </span>
                        </div>
                    </div>
                    <div className="full">
                        <div id="image05" className="image full" data-position="center">
                            <span
                                className="frame deferred">
                                <img
                                     onClick={e => selectItem(e.target, "image")}
                                    src="https://images.unsplash.com/photo-1485968579580-b6d095142e6e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80"
                                        data-src="assets/images/image05.jpg?v=8fa4c094" alt=""/>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
   
  )
}

export default Photographs
