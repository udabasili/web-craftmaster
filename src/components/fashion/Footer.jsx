import React from 'react'
import './styles.css'
import { AiFillInstagram, AiFillFacebook, AiFillTwitterCircle } from "react-icons/ai";

function Footer({
    selectItem
}) {
  return (
    <footer>
    <div id="container20" class="container default full">
        <div class="wrapper">
            <div class="inner">
                <p id="text26" class="paragraph-text"  onClick={e => selectItem(e.target, "text")}>
                    Tempus egestas sed sed risus pretium. Tincidunt arcu non
                    sodales neque sodales ut etiam sit amet. Faucibus purus in massa tempor nec feugiat nisl
                    pretium.</p>
                <h3 id="text01" class="header-3"  onClick={e => selectItem(e.target, "text")}>Thank you!</h3>
                </div>
            </div>
        </div>
        <div id="container17" class="container default full">
            <div class="wrapper">
                <div class="inner">
                    <ul id="icons02" class="style1 icons">
                        <li>
                            <AiFillInstagram/>
                        </li>
                        <li>
                            <AiFillFacebook/>
                        </li>
                        <li>
                            <AiFillTwitterCircle/>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer