import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {

  handleMouseMove = (event) => {
    drawChromeBoiAtCoords(event.clientX, event.clientY)
  }

  handleKeyPress = (event) => {
    if (event.key.toLowerCase() === "a") {resize("+")}
    if (event.key.toLowerCase() === "s") {resize("-")}

  }

  handleClick = (event) => {
    toggleCycling()
  }

  render() {
    return (
      <canvas
        onMouseMove={this.handleMouseMove}
        onKeyPress={this.handleKeyPress}
        onClick={this.handleClick}
        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }
}
