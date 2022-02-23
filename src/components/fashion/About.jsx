import React from 'react'
import './styles.css'

function About({
    selectItem,
    websiteName
}) {

  return (
      <section id="about" className="about-section">
          <div id="container05" data-scroll-id="start" data-scroll-behavior="center" data-scroll-offset="0" className="container columns full screen">
            <div className="wrapper">
                <h3 className="header-3" onClick={e => selectItem(e.target, "text")}>{websiteName}</h3>
                <h2 className="header-2" onClick={e => selectItem(e.target, "text")}>About</h2>
                <p 
                    id="text20" 
                    onClick={e => selectItem(e.target, "text")} 
                    className="paragraph-text">
                    Mi proin sed libero enim sed faucibus turpis in eu. Ipsum
                    dolor sit amet consectetur adipiscing elit duis. At augue eget arcu dictum varius duis
                    at. Mauris augue neque gravida in vitae turpis massa sed elementum.
                </p>
                <div class="container">
                    <div class="row row-responsive">
                        <div class="col ">
                            <img 
                                className="w-100"
                                onClick={e => selectItem(e.target, "image")}
                                src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80" alt=""/>
                        </div>
                        <div class="col">
                        <img 
                            className="w-100"
                            onClick={e => selectItem(e.target, "image")}
                            src="https://images.unsplash.com/photo-1524041255072-7da0525d6b34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt=""/>
                        </div>
                        <div class="col">
                        <img 
                            className="w-100"
                            src="https://images.unsplash.com/photo-1485968579580-b6d095142e6e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>

      </section>
    
  )
}

export default About