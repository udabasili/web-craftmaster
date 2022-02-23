import React, { useContext } from 'react'
import { Context } from '../context';


export default function TopPanel(props) {

    const { state } = useContext(Context);
    const questions = state.questions;
    
    function onClick() {
        
        let head = document.querySelector('head').outerHTML;
        const title = questions.websiteName;
        let iconUrl = questions.iconUrl;
        const titleTag  = `<title>${title}</title>`;
        const iconTag = `<link rel="icon" href=${iconUrl}>`;
        let titleMatch = head.match(/<title>(.*?)<\/title>/)
        if (titleMatch) {
            head = head.replace(titleMatch[0], titleTag)
        }

        let iconTagMatch = head.match(/<link rel="icon" href=(.*?)>/)
        if (iconTagMatch) {
            head = head.replace(iconTagMatch[0], iconTag)
        }
        
        const pageHTML = document.querySelector(".body").outerHTML;
        const allSelected = document.querySelectorAll('.selectable')
        allSelected.forEach(element => {
             element.classList.remove('selectable')
        });
        let html = `
        <html>
            ${head}
            <body>
                ${pageHTML}
            </body>
        </html>
        
        `
        const blob = new Blob([html], {
            type: "text/html"
        });
        const url = window.URL.createObjectURL(blob);
        const tempEl = document.createElement("a");
        document.body.appendChild(tempEl);
        tempEl.href = url;
        tempEl.download = "download.html";
        tempEl.title = title;
        tempEl.click();

    }

    return (
        <div className="top-panel row" >
            <div className="col-8 text-white text-center text-uppercase font-weight-bold">
                Click on element on the webpage to edit content
            </div>
            <div className="col-4 justify-content-center">
                <button type="button" className="btn btn-primary float-right" onClick={onClick}>Download</button>
            </div>
        </div>
    )
}
