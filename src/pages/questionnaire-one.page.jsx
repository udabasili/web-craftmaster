import React, { Component } from "react"; 
import Questions from "../components/Questions";
import { Context } from "../context";

class QuestionnaireOne extends Component {

    static contextType = Context;
    state = {
        websiteName: '',
        category: 'fashion',
        pages: 1,
        primaryColor: '#2e8b57',
        primaryLightColor: '#32ae0a',
        primaryDarkColor: '#228b22',
        secondaryColor: '#CCCC00'
    }

    submitHandler = (e, state) => {
        e.preventDefault();
        const { dispatch } = this.context
        dispatch({
            type: 'QUESTIONNAIRE',
            payload: {...state}
        })
        this.props.history.push('/editor')
    }

    render() {
        return (
            <div className="container pt-30 mt-5">
               <Questions submitHandler={this.submitHandler}/>
            </div>
        );
    }
}

export default QuestionnaireOne;