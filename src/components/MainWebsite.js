import React, { useContext, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { Context } from '../context'
import BusinessPage from '../pages/business.page'
import ECommercePage from '../pages/e-commerce.page'
import FashionPage from '../pages/fashion.page'

export default function MainWebsite({
    selectItem
}) {

    const { state } = useContext(Context);
    const questions = state.questions;
    const category = questions.category ;

    const COMPONENT_MAP = {
        fashion: FashionPage,
        business: BusinessPage,
        ecommerce: ECommercePage
    }

    
    const Component = COMPONENT_MAP[category]

    useEffect(() => {
        document.documentElement.style.setProperty('--color-primary', questions.primaryColor)
        document.documentElement.style.setProperty('--color-primary-light', questions.primaryLightColor)
        document.documentElement.style.setProperty('--color-primary-dark', questions.primaryDarkColor)
        document.documentElement.style.setProperty('--color-secondary', questions.secondaryColor)
        document.documentElement.style.setProperty('--background-color', questions.backgroundColor)
    }, [])



    return (
        category ?
        <Component selectItem={selectItem}/> :
        <Redirect to='/'/>
    )
}
