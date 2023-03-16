import React from "react";
import css from "./css/NavBarForm.module.css";
import NavBarChild from "./NavBarChild";

class NavBarForm extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            isLoggedIn : false,

        }
    }

    handleClick = () => {
        this.setState((prevState) => {
            return{
                isLoggedIn: prevState.isLoggedIn === true ? false : true,
            }
        }, () => console.log(this.state.isLoggedIn)
        );
    }

    render (){
        return (
            <div class= {css.NavBar}>
                <h1>My Gallery</h1>
            {this.state.isLoggedIn === true ?
            <button onClick={this.handleClick}>Log out</button> : 
            <NavBarChild handleClick = {this.handleClick}/>
            // <form action={this.handleClick}>
            //     <label for="username">Username: </label>
            //     <input id="username" type="text" placeholder="username"/>
            //     <label for="password">Password: </label>
            //     <input id="password" type="password" placeholder="password"/>

            //     <button>Submit</button>
            // </form>
            }
            </div>
        );
    }
}

export default NavBarForm