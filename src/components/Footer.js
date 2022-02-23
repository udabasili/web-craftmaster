import React from 'react'

export default function Footer({
    websiteName=""
}) {
    return (
        <footer className="footer">
            <ul className="nav">
                    <li className="nav__item">
                        <a href="#home" className="nav__link">
                            Start here
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#contact" className="nav__link">
                            Contact us
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#shop" className="nav__link">
                            Get our products
                        </a>
                    </li>
            </ul>
            <p className="copyright">
                &copy; Copyright 2021 by {websiteName}. 
            </p>
        </footer>
    )
}
