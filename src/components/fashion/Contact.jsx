import React from 'react'
import './styles.css'

function Contact({
    selectItem,
    websiteName
}) {
  return (
    <div id="container02" className="container default full screen">
      <div className="wrapper">
          <div className="inner">
              <h3 className="header-3"  onClick={e => selectItem(e.target, "text")}>{websiteName}</h3>
              <h2 className="header-2"  onClick={e => selectItem(e.target, "text")}>Contact</h2>
              <p id="text18" className="style2"  onClick={e => selectItem(e.target, "text")}>
                  Vitae proin sagittis nisl rhoncus mattis rhoncus urna neque
                  viverra. Sit amet eget dolor morbi non arcu. Enim facilisis gravida neque
                  convallis a cras semper auctor.</p>
              <ul id="links06" className="links">
                  <li className="n01">
                      <a href="#about"  onClick={e => selectItem(e.target, "text")}>Luctus accumsan...</a>
                </li>
              </ul>
          </div>
      </div>
  </div>
  )
}

export default Contact