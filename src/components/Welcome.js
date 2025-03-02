import React, { Component } from 'react'

export class Welcome extends Component {
    constructor(props) {
      super(props)
      this.state = {
         isLoggedin:true
      }
    }
    
  render() {

    if(this.state.isLoggedin){
        return (
            <div>Welcome User</div>
        )
    }else{
        return(
            <div>Please Login</div>
        )
    }
    
  }
}

export default Welcome