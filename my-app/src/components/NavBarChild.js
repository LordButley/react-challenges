import React from 'react'

function NavBarChild(props) {
    return (
        <form action={props.handleClick}>
            <label for="username">Username: </label>
            <input id="username" type="text" placeholder="username"/>
            <label for="password">Password: </label>
            <input id="password" type="password" placeholder="password"/>
            <button>Submit</button>
        </form>
  )
}

export default NavBarChild