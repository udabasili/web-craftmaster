import React, { Component } from "react"; 
import Header from "../components/navigation/Header";
import Contact from '../components/Contact'
import AddProduct from '../components/e-commerce/AppProduct'
import Footer from '../components/Footer'
import Home from '../components/e-commerce/Home'
import Product from '../components/product/Product'
import About from '../components/service/About'
import { Context } from "../context";


class ECommercePage extends Component {

    static contextType = Context;

    render() {
        const selectItem = this.props.selectItem;
        const { state } = this.context;
        const questions = state.questions;
        
        return (
            <div className="body">
                <Header 
                    selectItem={selectItem}
                    iconUrl={questions.iconUrl}
                />
                <Home 
                    selectItem={selectItem} 
                    websiteName={questions.websiteName}
                />
                <main>
                    <About selectItem={selectItem}/>
                    <Product selectItem={selectItem}/>
                    <AddProduct/>
                    <Contact selectItem={selectItem}/>
                </main>
                <Footer websiteName={questions.websiteName}/>
            </div>
        );
    }
}

export default ECommercePage;