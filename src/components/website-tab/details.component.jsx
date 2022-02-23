import React from 'react'
import ButtonEdit from './button-edit.component';
import ImageEdit from './website-tab/image-edit.component'
import textEdit from './website-tab/text-edit.component'


export default function ElementDetails({
    type,
    overlayHandler = f => f
}) {
    const COMPONENT_MAP = {
        button: ButtonEdit,
        image: ImageEdit,
        text: textEdit
    }

    const Component = COMPONENT_MAP[type]

    return (
        <Component overlayHandler={overlayHandler}/>
            
    )
}
