import React, { Component } from 'react'

// class Range extends Component {
//   render() {
//     return (
//       <div className={this.props.class}>
//         <h4>{this.props.title}</h4>
//         <span>0</span>
//         <input
//           type="range"
//           min="0"
//           max={this.props.max}
//           value={this.state.hue}
//           onChange={this.rangeValueHue}
//         ></input>
//         <span>{this.props.max}</span>
//       </div>
//     )
//   }
// }

class App extends Component {
  state = {
    hue: 180,
    saturation: 50,
    lightness: 50,
  }

  rangeValueHue = event => {
    this.setState({
      hue: event.target.value,
    })
  }

  rangeValueSaturation = event => {
    this.setState({
      saturation: event.target.value,
    })
  }

  rangeValueLightness = event => {
    this.setState({
      lightness: event.target.value,
    })
  }
  randomColor = () => {
    this.setState({
      hue: Math.floor(Math.random() * 361),
      saturation: Math.floor(Math.random() * 101),
      lightness: Math.floor(Math.random() * 101),
    })
  }

  render() {
    return (
      <>
        <h1>Color Picker!</h1>
        <div className="parent">
          <div
            className="circle"
            style={{
              backgroundColor: `hsl(${this.state.hue}, ${this.state.saturation}%, ${this.state.lightness}%)`,
            }}
          ></div>
        </div>
        <h1 className="text-color">{`hsl(${this.state.hue}, ${this.state.saturation}%, ${this.state.lightness}%)`}</h1>
        <section>
          <div className="hue">
            <h4>Hue:</h4>
            <span>0</span>
            <input
              type="range"
              min="0"
              max="360"
              value={this.state.hue}
              onChange={this.rangeValueHue}
            ></input>
            <span>360</span>
          </div>
          <div className="saturation">
            <h4>Saturation:</h4>
            <span>0</span>
            <input
              type="range"
              min="0"
              max="100"
              value={this.state.saturation}
              onChange={this.rangeValueSaturation}
            ></input>
            <span>100</span>
          </div>
          <div className="lightness">
            <h4>Lightness:</h4>
            <span>0</span>
            <input
              type="range"
              min="0"
              max="100"
              value={this.state.lightness}
              onChange={this.rangeValueLightness}
            ></input>
            <span>100</span>
          </div>
        </section>
        <div className="button">
          <a href="#" className="myButton" onClick={this.randomColor}>
            Random Color
          </a>
        </div>
      </>
    )
  }
}

export default App
