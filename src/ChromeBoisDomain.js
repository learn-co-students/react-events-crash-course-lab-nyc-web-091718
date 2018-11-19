import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {

  handleMouseMove = (event) => {
    let x = event.clientX
    let y = event.clientY
    drawChromeBoiAtCoords(x,y)
  }

  handleKeyDown = (event) => {
    if (event.key === "a") {
      resize("+")
    } else if (event.key === "s"){
      resize("-")
    }
  }

  handleClick = (event) => {
    toggleCycling()
  }

  /* TODO: Create an event handler which, when fired, invokes the provided
   * `toggleCycling` function with no arguments. Don't forget the click event
   * listener that should fire it!
   */


  render() {
    return (
      <canvas
        onMouseMove={this.handleMouseMove}
        onKeyDown={this.handleKeyDown}
        onClick={this.handleClick}
        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }
}
