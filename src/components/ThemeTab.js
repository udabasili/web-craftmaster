import React from 'react'
import Collapsible from 'react-collapsible';
import Colors from './theme-tab/Color';

export default function ThemeTab({
    overlayHandler = f => f
}) {
    return (
        <div>
            <Collapsible
                trigger="Colors">
                <Colors overlayHandler={overlayHandler}/>
            </Collapsible>
        </div>
    )
}
