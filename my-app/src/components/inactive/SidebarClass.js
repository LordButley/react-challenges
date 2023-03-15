import React from "react";
import css from "./css/Sidebar.module.css"

// PART 1 basic class

// class SidebarClass extends React.Component{
//     render () {
//      return <div className = {css.sidebar}>
//         <a href="#.">My Pictures</a>
//         <a href="#.">My Illustrations</a>
//         <a href="#.">My Paintings</a>
//     </div>;
//     }
// }

// PART 2 - With PROPS

// class SidebarClass extends React.Component{
//         render () {
//          return <div className = {css.sidebar}>
//             <a href="#.">{this.props.anchorOne}</a>
//             <a href="#.">{this.props.anchorTwo}</a>
//             <a href="#.">My Paintings</a>
//         </div>;
//         }
//     }

// PART 3 - With STATE

// class SidebarClass extends React.Component{
    
//     constructor(props){
//         super(props);
//         this.state = {
//             possession: "My",
//             buttonText: "Exit",
//         }
//     }
    
//     render () {
//      return (<div className = {css.sidebar}>
//         <a href="#.">{this.state.possession} {this.props.anchorOne}</a>
//         <a href="#.">{this.state.possession} {this.props.anchorTwo}</a>
//         <a href="#.">My Paintings</a>
//         <button>{this.state.buttonText}</button>
//         </div>);
//     }
// }

// PART 4 with setState / onClick 
// class SidebarClass extends React.Component{
    
//     constructor(props){
//         super(props);
//         this.state = {
//             possession: "My",
//             buttonText: "Exit",
//             // clickCounter: 0,
//         }
//     }

    // updateClick(){
    //     let addClick = this.state.clickCounter + 1;
    //     if (this.state.clickCounter % 2 === 0){
    //         this.setState({
    //             possession:"Yours",
    //             clickCounter: addClick,
    //         });
    //     }else {
    //         this.setState({
    //             possession:"My",
    //             clickCounter: addClick,
    //         });
    //     }
    // }

    // updateClick(){
    //     if (this.state.possession == "My"){
    //         this.setState({
    //             possession:"Yours",
    //         });
    //     }else {
    //         this.setState({
    //             possession:"My",
    //         });
    //     }
    // }

//     updateClick(){
//             this.setState({
//                 possession: this.state.possession === "Yours" ? "My" : "Yours",
//             });
//         }
    
    
//     render () {
//         return (
//             <div className = {css.sidebar}>
//                 <a href="#.">{this.state.possession} {this.props.anchorOne}</a>
//                 <a href="#.">{this.state.possession} {this.props.anchorTwo}</a>
//                 <a href="#.">My Paintings</a>
//                 <button onClick={() => this.updateClick()}>{this.state.buttonText}</button>
//             </div>);
//     }
// }


// export default SidebarClass

// PART 5 with call back logs

// class SidebarClass extends React.Component{
    
//     constructor(props){
//         super(props);
//         this.state = {
//             possession: "My",
//             buttonText: "Exit",
//             // clickCounter: 0,
//         }
//     }

//     updateClick(){
//         this.setState({
//             possession: this.state.possession === "Yours" ? "My" : "Yours",
//         }, () => console.log("state after: " +this.state.possession));
//         console.log("state before: " +this.state.possession);
//     }
    

//     render () {
//         return (
//             <div className = {css.sidebar}>
//                 <a href="#.">{this.state.possession} {this.props.anchorOne}</a>
//                 <a href="#.">{this.state.possession} {this.props.anchorTwo}</a>
//                 <a href="#.">My Paintings</a>
//                 <button onClick={() => this.updateClick()}>{this.state.buttonText}</button>
//             </div>);
//         }
// }



// export default SidebarClass;

// Part 6 with increment counter

// class SidebarClass extends React.Component{
    
//     constructor(props){
//         super(props);
//         this.state = {
//             possession: "My",
//             buttonText: "Exit",
//             count: 0,
//         }
//     }

//     updateClick(){
//         this.setState({
//             possession: this.state.possession === "Yours" ? "My" : "Yours",
//         }, () => console.log("state after: " +this.state.possession));
//         console.log("state before: " +this.state.possession);
//     }

//     incrementCount(){
//         this.setState({
//             count: this.state.count + 1,
//         }, () => console.log("count after:" + this.state.count))
//     }
    

//     render () {
//         return (
//             <div className = {css.sidebar}>
//                 <a href="#.">{this.state.possession} {this.props.anchorOne}</a>
//                 <a href="#.">{this.state.possession} {this.props.anchorTwo}</a>
//                 <a href="#.">My Paintings</a>
//                 <button onClick={() => {this.updateClick(); this.incrementCount();}}>{this.state.buttonText}</button>
//             </div>);
//         }
// }



// export default SidebarClass;


// Part 6 with prevState and prevProps

class SidebarClass extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            possession: "My",
            buttonText: "Exit",
            count: 0,
        }
    }

    updateClick(){
        this.setState((prevState, prevProps) => {
            console.log("state before: " +prevState.possession);
            return {
                possession: prevState.possession === "Yours" ? "My" : "Yours",
            }
        }, () => console.log("state after: " + this.state.possession))
    }

    incrementCount(){
        this.setState((prevState, prevProps) => {
            return {
                count : prevState.count + 1
            }
        }, () => console.log("count after:" + this.state.count))
    }
    
    render () {
        return (
            <div className = {css.sidebar}>
                <a href="#.">{this.state.possession} {this.props.anchorOne}</a>
                <a href="#.">{this.state.possession} {this.props.anchorTwo}</a>
                <a href="#.">My Paintings</a>
                <button onClick={() => {this.updateClick(); this.incrementCount();}}>{this.state.buttonText}</button>
            </div>);
        }
}

export default SidebarClass;