import React from 'react';
import { withRouter } from 'react-router-dom';
import LineImage from '../assets/images/line_header.png';

function Navigation() {

    return (
        <nav className="navigation"  style={{
            backgroundImage: `url(${LineImage})`
        }}>
            <div className="container">
                <div className="logo">
                    <img 
                        src="https://img.icons8.com/wired/50/000000/maintenance.png"
                        alt="web-craftsmater" 
                        className="logo__icon"
                    />
                    <span className="logo__text"></span>
                </div>
            </div>
        </nav>
    )
}

export default withRouter(Navigation);