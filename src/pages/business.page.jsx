import React, { Component } from "react"; 
import About from "../components/business/About";
import Portfolio from "../components/business/Portfolio";
import { ServicePage } from "../components/business/Services";
import Teams from "../components/business/Teams";
import Contact from "../components/Contact";
import Home from "../components/e-commerce/Home";
import Footer from "../components/Footer";
import Header from "../components/navigation/Header";
import { Context } from "../context";

class Business extends Component {
    static contextType = Context;

    render() {
         const selectItem = this.props.selectItem;
        const { state } = this.context;
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
                <main>
                    <About selectItem={selectItem} />
                    <Portfolio selectItem={selectItem} />
                    <ServicePage selectItem={selectItem}/>
                    <Teams selectItem={selectItem}/>
                    <Contact selectItem={selectItem}/>
                </main>
                <Footer websiteName={questions.websiteName}/>
            </div>
        );
    }
}

export default Business;