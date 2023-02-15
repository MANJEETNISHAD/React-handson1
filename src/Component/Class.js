import React, { Component } from 'react'
import './Function.css';

export default class Manjeet extends Component {
  render() {
    return (
      <div className="item-list item-list2">
          <h1>This is Creating Using Class Component</h1>
          <p className="para">This is done using external css</p>
          <p style={{color:"black"}}>This is done using inline css</p>
      </div>
    )
  }
}

