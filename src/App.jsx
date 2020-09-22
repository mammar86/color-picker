import React, { Component } from 'react'

class Circle extends Component {
  render() {
    return <div></div>
  }
}

class App extends Component {
  render() {
    return (
      <>
        <h1>Color Picker!</h1>
        <div className="parent">
          <div className="circle"></div>
        </div>
      </>
    )
  }
}

export default App
