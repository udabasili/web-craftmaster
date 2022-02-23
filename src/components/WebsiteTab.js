import React, { useEffect, useState } from 'react'
import ButtonEdit from './website-tab/button-edit.component'
import ImageEdit from './website-tab/image-edit.component'
import textEdit from './website-tab/text-edit.component'

export default function WebsiteTab({
        type,
        value,
        overlayHandler = f => f
    }) {

    const [element, setElement] = useState(null)

    useEffect(() => {
        setElement(null)
        if (type && value) {
            setElement(value)
        }
    }, [type, value])

    const COMPONENT_MAP = {
        button: ButtonEdit,
        image: ImageEdit,
        text: textEdit,
    }

    const Component = COMPONENT_MAP[type]
    const hideEditor = () => {
        element.classList.remove('selectable')
        setElement(null)

    }

    return ( 
        <div>
            {
                element && (
                    <Component 
                        element={element} 
                        overlayHandler={overlayHandler}
                        hideEditor={hideEditor}/>
                )
            }
        </div>

    )
}
