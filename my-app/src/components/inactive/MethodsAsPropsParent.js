import React, { Component } from 'react'
import MethodsAsPropsChild from './MethodsAsPropsChild'

class MethodsAsPropsParent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoggedIn: false,
        }
    }

    handleSignIn = () => {
        this.setState((prevState, prevProps) => {
            return{
                isLoggedIn: prevState.isLoggedIn === false ? true : false
            }
        })
        console.log(this);
    }

    render() {
        return (
            <div>
                <MethodsAsPropsChild
                    isLoggedIn={this.state.isLoggedIn} 
                    handleSignIn={this.handleSignIn}
                    />
            </div>
        )
    }
}

export default MethodsAsPropsParent