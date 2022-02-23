import React, { useEffect, useState } from 'react'

export default function TextEdit({
        element,
        hideEditor,
        overlayHandler
    }) {
    
    useEffect(() => {
        let defaultFontSize = Number(window.getComputedStyle(element, null).getPropertyValue('font-size').match(/\d+/)[0]);
        let defaultFontColor = window.getComputedStyle(element, null).getPropertyValue('color');
        let defaultTextContent = element.textContent;
        if (defaultFontColor.startsWith('rgb')) {
            let ctx = document.createElement('canvas').getContext('2d');
            ctx.strokeStyle = defaultFontColor;
            defaultFontColor = ctx.strokeStyle;
        }

        setFontColor(defaultFontColor)
        setFontSize(defaultFontSize)
        setText(defaultTextContent)
    }, [element]);

    
    const [fontColor, setFontColor] = useState('');
    const [fontSize, setFontSize] = useState('');
    const [text, setText] = useState('');

    useEffect(() => {
        let font = `${fontSize}px`
        element.style.setProperty('font-size', font)
    }, [fontSize]);

    useEffect(() => {
        element.style.setProperty('color', fontColor)
    }, [fontColor]);

    useEffect(() => {
        element.textContent = text;
    }, [text]);

    const onSubmit = (e) => {
        e.preventDefault();
        hideEditor();
        overlayHandler()
    }

    return (
        
       <form className="m-3 text-white" onSubmit={onSubmit}>
            <div  className="form-group" >
                <label htmlFor="textColor">Text Color: </label>
                    <input 
                        type="color"
                        value={fontColor}
                        id="textColor"
                        onChange={e => setFontColor(e.target.value)}
                        className="ml-2"
                    />
            </div>
             <div  className="form-group">
                <label htmlFor="textSize">Text Size: </label>
                <input 
                    type="number"
                    min={1}
                    value={fontSize}
                    id="textSize"
                    onChange={e => setFontSize(e.target.value)}
                    className="ml-2"
                />
                px
            </div>
            <div className="form-group">
                <label htmlFor="textContent">Text Content:</label>
                <textarea  
                    type="text" 
                    className="form-control" 
                    id="textContent" 
                    value={text}
                    rows="4"
                    onChange={e => setText(e.target.value)}
                    placeholder="Enter Text Content..."/>
            </div>
            <button 
                type="submit"
                className="btn btn-primary mt-3" >
                Submit
            </button>
    </form>
    )
  
}
