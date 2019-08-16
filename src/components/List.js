import React, { Component } from 'react';
import { Redirect, withRouter } from 'react-router-dom'

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inHome: false
        }
    }
    handleRedirect = () => {
        this.setState({ inHome: true })
    }
    
    historyPush = () => {
        this.props.history.push("/about/")
    }
    render() {
        if(this.state.inHome){
            return <Redirect to="/" />
        }
        const animalList = this.props.animals.map((animal, idx) => {
            return <h1 key={ idx }>{ animal }</h1>
        })
        return (
            <div className="list">
                { animalList }

                <button onClick={ this.handleRedirect } >Redirect Component Button</button>

                <button onClick={this.historyPush}>History Push Button</button>
            </div >

        );
    }
}

export default withRouter(List);