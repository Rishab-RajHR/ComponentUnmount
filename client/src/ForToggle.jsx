import React, { Component } from 'react'

class ForToggle extends Component {
  componentWillUnmount() {
     alert("Component Will Unmount")
  }
  render() {
    return (
      <>
      <h3>I am a toggle Component</h3>
      </>
    )
  }
}

export default ForToggle
