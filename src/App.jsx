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
        <section>
          <div className="hue">
            <h4>Hue:</h4>
            <span>0</span>
            <input type="range" min="0" max="360"></input>
            <span>360</span>
          </div>
          <div className="saturation">
            <h4>Saturation:</h4>
            <span>0</span>
            <input type="range" min="0" max="100"></input>
            <span>100</span>
          </div>
          <div className="lightness">
            <h4>Lightness:</h4>
            <span>0</span>
            <input type="range" min="0" max="100" value="50"></input>
            <span>100</span>
          </div>
        </section>
      </>
    )
  }
}

export default App
