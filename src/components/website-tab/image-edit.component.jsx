import React, { useEffect, useState } from 'react'

export default function ImageEdit({
    element,
    hideEditor,
    overlayHandler
    }) {

        let backgroundImage = window.getComputedStyle(element, null).getPropertyValue('background-image');
        useEffect(() => {
            let backgroundImage = window.getComputedStyle(element, null).getPropertyValue('background-image');
            let src = element.src;
            let image = backgroundImage !== "none" ? backgroundImage : src;
            if (backgroundImage !== "none") {
                image  = backgroundImage.match(/(?<=\().+?(?=\))/g)[0]
                image = image.replace(/"/g, "")
            }
            setImageUrl(image)
            setLoaded(true)
        }, [element])

        const [imageUrl, setImageUrl] = useState('')
        const [loaded, setLoaded] = useState(true)

        const onSubmitHandler = (e) => {
            e.preventDefault();
            if (backgroundImage && backgroundImage !== "none") {
                element.style.setProperty('background-image', `url("${imageUrl}")`)
            } else {
                element.src = imageUrl
            }
            hideEditor()
            overlayHandler()


        }

        const setImageHandler = (e) => {
            setImageUrl(e.target.value)
            setLoaded(true)

        }

        return (
        <div className="container">
            <form className="mt-2" onSubmit={onSubmitHandler}>
                <div className="form-group" style={{
                    color: "white"
                }}>
                    <label for="image">Image Url</label>
                    <input 
                        type="url" 
                        className="form-control" 
                        id="image" 
                        value={imageUrl}
                        onChange={setImageHandler}
                        placeholder="Image url"/>
                </div>
                <button 
                    type="submit" 
                    disabled={!loaded}
                    className="btn btn-primary">
                        Submit
                </button>
            </form>
            <img 
                src={imageUrl} 
                alt="preview" 
                onError={() => setLoaded(false)}
                className="img-thumbnail m-auto d-block" 
                width="200px" 
                style={{
                    height: "200px"
                }}
                height="200px"/>
        </div>
           
    )
}
