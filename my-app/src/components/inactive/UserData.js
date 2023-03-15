import React from 'react'

function UserData(props) {
  return (
    <div>
        {props.isLoaded ? "Data Loaded!" : "Loading..."}
    </div>
  )
}

export default UserData