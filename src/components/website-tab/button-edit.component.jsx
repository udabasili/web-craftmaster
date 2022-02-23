import React, { useState, useEffect } from 'react'

export default function ButtonEdit({ 
        element, 
        hideEditor ,
        overlayHandler = f => f
    }) {

    useEffect(() => {
        let defaultBackgroundColor = window.getComputedStyle(element, null).getPropertyValue('background-color');
        let defaultTextColor = window.getComputedStyle(element, null).getPropertyValue('color');
        let defaultTextContent = element.textContent;

        if (defaultBackgroundColor.startsWith('rgb')) {
            let ctx = document.createElement('canvas').getContext('2d');
            ctx.strokeStyle = defaultBackgroundColor;
            defaultBackgroundColor = ctx.strokeStyle;
        }

        if (defaultTextColor.startsWith('rgb')) {
            let ctx = document.createElement('canvas').getContext('2d');
            ctx.strokeStyle = defaultTextColor;
            defaultTextColor = ctx.strokeStyle;
        }
        setBackgroundColor(defaultBackgroundColor)
        setTextContent(defaultTextContent)
        setTextColor(defaultTextColor)
    }, [element]);

    const [backgroundColor, setBackgroundColor] = useState('');
    const [textContent, setTextContent] = useState('');
    const [textColor, setTextColor] = useState('');

    const onChangeHandlerColor = (e) => {
        const value = e.target.value;
        element.style.backgroundColor = value;
        setBackgroundColor(value)
    }

    const onChangeHandlerText = (e) => {
        const value = e.target.value;
        element.innerText = value;
        setTextContent(value)
    }

    const onChangeHandlerTextColor = (e) => {
        const value = e.target.value;
        element.style.color = value;
        setTextColor(value)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        hideEditor()
        overlayHandler()
    }

    return (
        
       <form className="m-3 text-white" onSubmit={onSubmit}>
            <div  className="form-group" >
                <label htmlFor="buttonColor">Button Color: </label>
                    <input 
                        type="color"
                        id="buttonColor"
                        value={backgroundColor}
                        onChange={onChangeHandlerColor}
                        className="ml-2"
                    />
            </div>
            <div  className="form-group">
                <label htmlFor="textContent">Text Content: </label>
                <input 
                    type="text"
                    value={textContent}
                    id="textContent"
                    onChange={onChangeHandlerText}
                    className="ml-2"
                />
            </div>
             <div  className="form-group">
                <label htmlFor="textColor">Text Color: </label>
                <input 
                    type="color"
                    value={textColor}
                    id="textColor"
                    onChange={onChangeHandlerTextColor}
                    className="ml-2"
                />
            </div>
            <button 
                type="submit"
                className="btn btn-primary mt-3" >
                Submit
            </button>
    </form>
    )
}
