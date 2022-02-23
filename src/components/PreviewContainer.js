import React from 'react'
import MainWebsite from './MainWebsite';

export default function PreviewContainer({
    selectItem
}) {
    return (
        <div className="preview-container" >
            <div className="preview">
                <MainWebsite selectItem={selectItem}/>
            </div>
        </div>
    )
}
