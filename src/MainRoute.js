import React, { useContext} from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Navigation from './components/Navigation'
import { Context } from './context'
import HomePage from './pages/home.page'
import QuestionnaireOne from './pages/questionnaire-one.page'

export default function MainRoute() {

    return (
        <>
            <Navigation/>
            <Switch>                 
                <Route exact component={QuestionnaireOne} path='/'/>
                <Route component={HomePage} path='/editor'/>
            </Switch>
        </>
    )
}
