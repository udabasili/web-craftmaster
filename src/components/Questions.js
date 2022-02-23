import React, { useEffect, useState } from 'react'
import tinycolor from 'tinycolor2';

export default function Questions({
    submitHandler,
    currentValues=null
}) {

    useEffect(() => {
        if (currentValues) {
            setState({
                ...currentValues
            })
        }
    }, [currentValues])

    const [state, setState] = useState({
                websiteName: '',
                category: 'fashion',
                pages: 1,
                primaryColor: '#2e8b57',
                primaryLightColor: '#32ae0a',
                primaryDarkColor: '#228b22',
                secondaryColor: '#CCCC00',
                backgroundColor: '#ffffff',
                iconUrl: 'https://img.icons8.com/color/144/000000/instagram-new--v1.png'
            })

    useEffect(() => {
        const value = state.primaryColor;
        let darken = tinycolor(value).darken(25).toString()
        let light = tinycolor(value).lighten(25).toString()
        setState(prevState => ({
            ...prevState,
            primaryDarkColor: darken,
            primaryLightColor: light
        }))
    }, [state.primaryColor]);
    
     const {
         websiteName,
         category,
         iconUrl,
         primaryColor,
         secondaryColor,
         primaryDarkColor,
         backgroundColor,
         primaryLightColor
    } = state;

    const handleChange = (key) => {
        return (e) => {
            setState(prevState => ({
                ...prevState,
                [key]: e.target.value
            }))
        }
    }
    
    return (
         <form className=" bg-white rounded p-4 m-auto" onSubmit={e => submitHandler(e, state)}>
            <div  className="form-group mb-10">
                <label htmlFor="websiteName">Name of the website</label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="websiteName" 
                    value={websiteName}
                    onChange={handleChange('websiteName')}
                    placeholder="Input the name of your website"
                    required
                />
            </div>
            {
                !currentValues && (
                    <React.Fragment>
                        <div  className="form-group  mb-10">
                            <label htmlFor="primary-color" className="mr-10">Primary Color?</label>
                            <input 
                                type="color" 
                                onChange={handleChange('primaryColor')}
                                value={primaryColor}
                                id="primary-color"
                                required
                            />
                        </div>
                            <div  className="form-group  mb-10">
                            <label htmlFor="primary-color-light" className="mr-10">Primary Color Light?</label>
                            <input 
                                type="color" 
                                value={primaryLightColor}
                                disabled
                                id="primary-color-light"
                                required
                            />
                        </div>
                        <div  className="form-group  mb-10">
                            <label htmlFor="primary-color-dark" className="mr-10">Primary Color Dark?</label>
                            <input 
                                type="color" 
                                id="primary-color-dark"
                                disabled
                                value={primaryDarkColor}
                                required
                            />
                        </div>
                        < div className = "form-group  mb-10" >
                                <label htmlFor="secondary-color" className="mr-10">Secondary Color?</label>
                                <input 
                                    type="color" 
                                    id="secondary-color"
                                    value={secondaryColor}
                                    onChange={handleChange('secondaryColor')}
                                    required
                                />
                        </div>
                        < div className = "form-group  mb-10" >
                                <label htmlFor="secondary-color" className="mr-10">Background Color?</label>
                                <input 
                                    type="color" 
                                    id="background-color"
                                    value={backgroundColor}
                                    onChange={handleChange('backgroundColor')}
                                    required
                                />
                        </div>
                    </React.Fragment>
                )
            }
            <div  className="form-group mb-10">
                <label htmlFor="websiteName">Website Icon Url:</label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="websiteName" 
                    value={iconUrl}
                    onChange={handleChange('iconUrl')}
                    placeholder="Input your website icon.."
                    required
                />
            </div>
            
            <div className="form-group">
                <label htmlFor="category">Website Category</label>
                <select 
                    className="form-control" 
                    id="category" 
                    value={category} 
                    onChange={handleChange('category')}>
                    <option value='fashion'>Fashion Blog</option>
                    <option value="business">Business</option>
                    <option value="ecommerce">E-Commerce</option>
                </select>
            </div>
            <button type="submit" className="btn btn-black my-5 mb-10 text-white">Submit</button>
        </form>
    )
}
