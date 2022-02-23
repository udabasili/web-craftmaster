import React from "react";

function Contact({ selectItem }) {

    return (
        <section id="contact" className="contact-area pt-125 pb-130">
            <div className="container">
                <div className="row">
                    <h2 className="section-title pb-30" onClick={e => selectItem(e.target, 'text')}>
                        Contact Us
                    </h2>
                </div>
                <div className="contact-box mt-70">
                    <div className="row">
                        <ul>
                            <li>
                                <div className="single-info mt-30">
                                    <div className="info-icon">
                                    <i className="lni-phone-handset" />
                                    </div>
                                    <div className="info-content">
                                    <p onClick={e => selectItem(e.target, 'text')}>+88 1234 56789</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                            <div className="single-info mt-30">
                                <div className="info-icon">
                                <i className="lni-envelope" />
                                </div>
                                <div className="info-content">
                                <p onClick={e => selectItem(e.target, 'text')}>contact@yourmail.com</p>
                                </div>
                            </div>
                            
                            </li>
                            <li>
                            <div className="single-info mt-30">
                                <div className="info-icon">
                                <i className="lni-home" />
                                </div>
                                <div className="info-content">
                                <p onClick={e => selectItem(e.target, 'text')}>203, Envato Labs, Behind Alis Steet,Australia</p>
                                </div>
                            </div>
                            
                            </li>
                        </ul>
                    </div>
                    <div className="row">
                        <div className="contact-form">
                            <form
                                id="contact-form"
                                action="assets/contact.php"
                                method="post"
                                data-toggle="validator"
                            >
                                <div className="row">
                                <div className="col-lg-6">
                                    <div className="single-form form-group">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Enter Your Name"
                                        data-error="Name is required."
                                        required="required"
                                    />
                                    <div className="help-block with-errors" />
                                    </div>
                                    
                                </div>
                                <div className="col-lg-6">
                                    <div className="single-form form-group">
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Enter Your Email"
                                        data-error="Valid email is required."
                                        required="required"
                                    />
                                    <div className="help-block with-errors" />
                                    </div>
                                
                            </div>
                            <div className="col-lg-12">
                                <div className="single-form form-group">
                                <textarea
                                    name="message"
                                    placeholder="Enter Your Message"
                                    data-error="Please,leave us a message."
                                    required="required"
                                    defaultValue={""}
                                />
                                <div className="help-block with-errors" />
                                </div>
                                
                            </div>
                            <p className="form-message" />
                            <div className="col-lg-12">
                                <div className="single-form form-group">
                                <button className="main-btn" type="submit" onClick={e => selectItem(e.target, 'button')}>
                                    CONTACT NOW
                                </button>
                                </div>
                                
                            </div>
                            </div>
                            
                        </form>                    
                    </div>
                </div>
            </div>
            </div>
        </section>
    );
}

export default Contact;
