import React, { useEffect, useState} from 'react'
import tinycolor from 'tinycolor2';

export default function Colors() {

    const defaultPrimaryColor = getComputedStyle(document.documentElement).getPropertyValue('--color-primary');
    const defaultPrimaryLightColor = getComputedStyle(document.documentElement).getPropertyValue('--color-primary-light')
    const defaultPrimaryDarkColor = getComputedStyle(document.documentElement).getPropertyValue('--color-primary-dark')
    const defaultSecondary = getComputedStyle(document.documentElement).getPropertyValue('--color-secondary')
    const defaultBackgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--background-color')

    const [primaryColor, setPrimaryColor] = useState(defaultPrimaryColor);
    const [primaryColorLight, setPrimaryColorLight] = useState(defaultPrimaryLightColor);
    const [primaryColorDark, setPrimaryColorDark] = useState(defaultPrimaryDarkColor);
    const [secondaryColor, setSecondary] = useState(defaultSecondary);
    const [backgroundColor, setBackgroundColor] = useState(defaultBackgroundColor);
    
    useEffect(() => {
       document.documentElement.style.setProperty('--color-primary', primaryColor)
       document.documentElement.style.setProperty('--color-primary-light', primaryColorLight)
       document.documentElement.style.setProperty('--color-primary-dark', primaryColorDark)
       document.documentElement.style.setProperty('--color-secondary', secondaryColor)
    }, [primaryColor, secondaryColor])


    const setColorHandler = (key) => {
        return (e) => {
            const value = e.target.value;
            let darken = tinycolor(value).darken(25).toString()
            let light = tinycolor(value).lighten(25).toString()
            document.documentElement.style.setProperty(key, value)
            if (key === "color-primary") {
                setPrimaryColor(value)
                setPrimaryColorDark(darken)
                setPrimaryColorLight(light)
            } else if (key === "color-secondary") {
                setSecondary(value)
            } else {
                setBackgroundColor(value)
            }
        }
    }

    return (
        <React.Fragment>
            <div  className="form-group">
                <label for="pages">Primary Color: </label>
                <input 
                    type="color"
                    value={primaryColor}
                    className="ml-2"
                    onChange = {setColorHandler('color-primary')}
                />
            </div>
            <div  className="form-group">
                <label for="pages">Primary Dark Color: </label>
                <input 
                    type="color"
                    className="ml-2"
                    disabled
                    value={primaryColorDark}
                />
            </div>
            <div  className="form-group">
                <label for="pages">Primary Light Color: </label>
                <input 
                    type="color"
                    value={primaryColorLight}
                    className="ml-2"
                    disabled
                />
            </div>
            <div  className="form-group">
                <label for="pages">Secondary Color: </label>
                <input 
                    type="color"
                    value={secondaryColor}
                    className="ml-2"
                    onChange = {setColorHandler('color-secondary')}
                />
            </div>
            <div  className="form-group">
                <label for="pages">Background Color: </label>
                <input 
                    type="color"
                    value={backgroundColor}
                    className="ml-2"
                    onChange = {setColorHandler('--background-color')}
                />
            </div>
        </React.Fragment>
    )
}
