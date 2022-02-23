import React from 'react'
import './styles.css'

function Services({
  selectItem,
  websiteName
}) {
  return (
    <div id="container06" className="container default full screen">
        <div className="wrapper">
            <div className="inner">
                <h3 id="text04" className="header-3"  onClick={e => selectItem(e.target, "text")}>{websiteName}</h3>
                <h2 id="text19" className="header-2"  onClick={e => selectItem(e.target, "text")}>Services</h2>
                <p 
                  id="text20" 
                  onClick={e => selectItem(e.target, "text")}
                  className="paragraph-text">Mi proin sed libero enim sed faucibus turpis in eu. Ipsum
                    dolor sit amet consectetur adipiscing elit duis. At augue eget arcu dictum varius duis
                    at. Mauris augue neque gravida in vitae turpis massa sed elementum.
                </p>
            </div>
        </div>
    </div>
  )
}


export default Services
