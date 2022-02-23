import React, { useContext } from 'react'
import { Context } from '../context'
import Questions from './Questions'

export default function SettingTab({
    overlayHandler = f => f
}) {

    const { state, dispatch } = useContext(Context)
    function submitHandler(e, state) {
        e.preventDefault();
        overlayHandler()
        dispatch({
            type: 'QUESTIONNAIRE',
            payload: {...state}
        })
    }

    return (
        <div>
            <Questions 
                submitHandler={submitHandler}
                currentValues={state.questions}
            />
        </div>
    )
}

