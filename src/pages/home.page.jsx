import React, { Component } from "react"; 
import PreviewContainer from "../components/PreviewContainer";
import RightPanel from "../components/RightPanel";
import TopPanel from "../components/TopPanel";

class HomePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            type: null,
            value: null
        }
    }

    onSetElement = (value, type) => {
        this.setState({
            value,
            type
        })
    }
    
  render() {
    const {value, type} = this.state;
    return (
     <div className="home-page pt-40">
        <TopPanel/>
        <PreviewContainer selectItem={this.onSetElement}/>
        <RightPanel value={value} type={type}/>
        </div>
    );
  }
}

export default HomePage;