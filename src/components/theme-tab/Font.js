import React, {useEffect, useState} from 'react'

const UNITS = ['rem', 'em', 'px']

const getUnit = (data) => {
    return data.replace(/\d+(\.\d)?/, "")
}

const getValue = (data) => {
    return data.replace(/[a-z]/ig, "")
}

export default function Font() {

    const defaultFontSize = getComputedStyle(document.documentElement).getPropertyValue('--default-font-size');
    const defaultPrimary = getComputedStyle(document.documentElement).getPropertyValue('--heading-primary');
    const defaultSecondary = getComputedStyle(document.documentElement).getPropertyValue('--heading-secondary');

    const [defaultFontUnit, setDefaultFontUnit] = useState(getUnit(defaultFontSize));
    const [defaultFontValue, setDefaultFontValue] = useState(getValue(defaultFontSize));
    const [primaryUnit, setPrimaryUnit] = useState(getUnit(defaultPrimary));
    const [primaryValue, setPrimaryValue] = useState(getValue(defaultPrimary));
    const [secondaryUnit, setSecondaryUnit] = useState(getUnit(defaultSecondary));
    const [secondaryValue, setSecondaryValue] = useState(getValue(defaultSecondary));

    useEffect(() => {
        
    }, [primaryUnit, primaryValue, secondaryValue, secondaryUnit, defaultFontUnit, defaultFontValue])

    const onChange = (key, variable) => {
        return e => {
            if (variable === '--default-font-size') {
                if (key === 'value') {
                    setDefaultFontValue(e.target.value)
                } else {
                    setDefaultFontUnit(e.target.value)
                }
                const data = `${defaultFontValue}${defaultFontUnit}`
                document.documentElement.style.setProperty(variable, data)
            } else if (variable === "--heading-primary") {
                if (key === 'value') {
                    setPrimaryValue(e.target.value)
                } else {
                    setPrimaryUnit(e.target.value)
                }
                const data = `${primaryValue.trim()}${primaryUnit.trim()}`
                console.log(data)
                document.documentElement.style.setProperty(variable, data)
            } else if (variable === "--heading-secondary") {
                 if (key === 'value') {
                     setSecondaryValue(e.target.value)
                 } else {
                     setSecondaryUnit(e.target.value)
                 }
                 const data = `${secondaryValue}${secondaryUnit}`
                 document.documentElement.style.setProperty(variable, data)
            }
            
        }
    }

    return (
        <React.Fragment>
            <div  className="form-group">
                <label for="font-size">Default Font Size: </label>
                <input 
                    type="text"
                    value={defaultFontValue}
                    id="font-size"
                    className="ml-2"
                    onChange = {
                        onChange("value", '--default-font-size')
                    }
                />
                <select 
                    defaultValue={defaultFontUnit}
                    onChange = {
                        onChange("unit", '--default-font-size')
                    }
                    >
                    {
                        UNITS.map(value => (
                            <option value={value}>
                                {value}
                            </option>
                        ))
                    }
                </select>
            </div>
            <div  className="form-group">
                <label for="font-size-primary">Primary Font Size: </label>
                <input 
                    type="text"
                    value={primaryValue}
                    id="font-size-primary"
                    className="ml-2"
                    onChange = {
                        onChange("value", '--heading-primary')
                    }
                />
                <select 
                    value={primaryUnit}
                    onChange = {
                        onChange("unit", '--heading-primary')
                    }
                    >
                    {
                        UNITS.map(value => (
                            <option value={value}>
                                {value}
                            </option>
                        ))
                    }
                </select>
            </div>
            <div  className="form-group">
                <label for="font-size-secondary">Secondary Font Size: </label>
                <input 
                    type="text"
                    value={secondaryValue}
                    id="font-size-secondary"
                    className="ml-2"
                    onChange = {
                        onChange("value", '--heading-secondary')
                    }
                />
                <select 
                    defaultValue={secondaryUnit}
                    onChange = {
                        onChange("unit", '--heading-secondary')
                    }
                    >
                    {
                        UNITS.map(value => (
                            <option value={value}>
                                {value}
                            </option>
                        ))
                    }
                </select>
            </div>
    
        </React.Fragment>
    )
}
