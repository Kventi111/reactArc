import React, { Component } from 'react'

export default class MainPage extends Component {
  render() {
    console.log("main page ", this.props)
    return (
      <div>
        hello from mainPage container
      </div>
    )
  }
}
