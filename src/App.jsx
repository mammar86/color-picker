import React, { Component } from 'react'

class Range extends Component {
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
      <div className={this.props.class}>
        <h4>{this.props.title}</h4>
        <span>0</span>
        <input
          type="range"
          min="0"
          max={this.props.max}
          value={this.state.hue}
          onChange={this.rangeValueHue}
        ></input>
        <span>{this.props.max}</span>
      </div>
    )
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
          <Range title="Hue" max="360" class="hue" />
          <Range title="Saturation" max="100" class="saturation" />
          <Range title="Lightness" max="100" class="lightness" />
        </section>
      </>
    )
  }
}

export default App
