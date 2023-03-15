import React from "react";
import css from "./css/NavBarSimple.module.css";

class NavBarSimple extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            greeting: "Hello",
            buttonText: "log in",
            name: this.props.name,
        }
    }

    handleClick(){
        console.log("Handle Click");
        this.setState((prevState, prevProps) => {
            return {
                // greeting: prevState.greeting === "Hello, guest!" ? "Welcome back, user!" : "Hello, guest!",
                greeting: prevState.greeting === "Hello" ? "Welcome back," : "Hello",
                buttonText: prevState.buttonText === "log in" ? "log out" : "log in",
                name : prevState.name === this.props.name ? "guest" : this.props.name, 
            }
        })
    }

    render(){
        console.log(this.state);
        return(
            <h1 class= {css.NavBar}>My Gallery
                <div>
                    <span>
                        {this.state.greeting} {this.state.name}!
                    </span>
                    <button onClick={() => {this.handleClick();}}>
                        {this.state.buttonText}
                    </button>
                </div>
            </h1>
        )
    }
}

export default NavBarSimple;