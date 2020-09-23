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
    hue: 0,
    saturation: 0,
    lightness: 0,
  }

  rangeValueHue = event => {
    console.log(event.target.value)
    this.setState({
      hue: event.target.value,
    })
  }

  rangeValueSaturation = event => {
    console.log(event.target.value)
    this.setState({
      saturation: event.target.value,
    })
  }

  rangeValueLightness = event => {
    console.log(event.target.value)
    this.setState({
      lightness: event.target.value,
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
              backgroundColor: `hsl(${this.state.hue}, ${this.state.saturation}%, ${this.state.lightness}%`,
            }}
          ></div>
        </div>
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
      </>
    )
  }
}

export default App
