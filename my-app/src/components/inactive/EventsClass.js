import React, { Component } from 'react'

export class EventsClass extends Component {

    // For Binding 3 - Bind the event handler to the constructor
    // constructor(props){
        // super(props);
        // this.clickHandler = this.clickHandler.bind(this);
        // }
    
    // For Binding 1, 2, 3
    // clickHandler(){
    //     console.log("Class events clicked");
    // }

    // For Binding 4 -  Define the handler with an arrow function
    clickHandler = () => {
        console.log("Class events clicked");
    }

    render() {
        return (
            <div>

                {/* Binding 1 - Use an arrow function in the render method */}
                {/* <button onClick={() => this.clickHandler()}>click me - class component </button>        */}
                
                {/* Binding 2 - call bind(this) on the function */}
                {/* <button onClick={this.clickHandler.bind(this)}>click me - class component </button>        */}



                {/* Binding 3 and 4   */}
                <button onClick={this.clickHandler}>click me - class component </button>       
            </div>
        )
    }
}

export default EventsClass