import React, {useContext} from 'react'
import Footer from '../components/fashion/Footer'
import About from '../components/fashion/About'
import Photograph from '../components/fashion/Photograph'
import Home from "../components/fashion/Home";
import Header from "../components/navigation/Header";
import { Context } from "../context";
import Services from '../components/fashion/Services'
import Contact from '../components/fashion/Contact'

const FashionPage = ({
    selectItem
}) => {

    const value = useContext(Context);
    const { state } = value
    const questions = state.questions;

    return (
        <div className="body">
            <Header 
                iconUrl={questions.iconUrl}
                selectItem={selectItem}/>
             <Home 
                    selectItem={selectItem}
                    websiteName={questions.websiteName}
                    />
            <About 
                selectItem={selectItem}
                websiteName={questions.websiteName}
                />
            <Photograph 
                selectItem={selectItem}
                websiteName={questions.websiteName}
                />
            <Services 
                selectItem={selectItem}
                websiteName={questions.websiteName}
                />
            <Contact 
                selectItem={selectItem}
                websiteName={questions.websiteName}
                />
            <Footer     
                websiteName={questions.websiteName}
                selectItem={selectItem}/>
        </div>
    )
}

export default FashionPage