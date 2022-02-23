import React from 'react';

export default function About({
    selectItem
}) {
    return (
        <section className="aboutus-section" id="about">
            <div className="row w-100">
                <h2 className="section-title pb-30" onClick={e => selectItem(e.target, 'text')}>
                    About Us
                </h2>
            </div>
            
            <div className="container">
                <div className="column">
                    <div className="col">
                        <div className="aboutus">
                            <h2 
                                onClick={e => selectItem(e.target, 'text')}
                                className="aboutus-title"
                                >What we bring
                            </h2>
                            <p 
                                onClick={e => selectItem(e.target, 'text')}
                                className="aboutus-text">
                                    Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
                                    Aliquam lorem ante, dapibus in.
                                    This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. 
                                    Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem
                            </p>
                            <a 
                                onClick={e => selectItem(e.target, 'button')}
                                className="aboutus-more" href="#home">
                                read more
                            </a>
                        </div>
                    </div>
                 </div>
            </div>
            
        </section>
    )
}
