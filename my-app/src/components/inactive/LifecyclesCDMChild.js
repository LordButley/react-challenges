import React, { Component } from 'react'

export class LifecyclesCDMChild extends Component {

    constructor(props){
        super(props);

        this.state = {
            data: "Child loading...",
        }
    }

    getData() {
        console.log('Child getData() called')
        setTimeout(()=> {
            console.log("Child Data fetched!")
            this.setState({
                data : 'Child Loaded!'
            })
        }, 3000)
    }
  
    componentDidMount() {
        console.log('Child Component mounted')
        this.getData();
    }
  
  
    render() {
    return (
      <div>LifecyclesCDMChild</div>
    )
  }
}

export default LifecyclesCDMChild