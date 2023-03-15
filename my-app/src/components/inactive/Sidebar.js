import React from "react";
import css from "./css/Sidebar.module.css"

// function Sidebar(){
//     // let SideBarContent = 
//     // <div>
//     //     <a></a>
//     //     <a></a>
//     //     <a></a>
//     // </div>; 
//     return <div>
//         <a>My Photos</a>
//         <a>My Illustrations</a>
//         <a>My Paintings</a>
//     </div>; 
// }

const Sidebar = () => <div className = {css.sidebar}>
    <a href="#.">My Photos</a>
    <a href="#.">My Illustrations</a>
    <a href="#.">My Paintings</a>
    </div>;


export default Sidebar;