import React from 'react'
import Example from './Example.jsx'
export default class App extends React.Component {
  clickMe (messager) {
    console.log(messager)
  }
  render () {
    return (
      <div style= {{textAlign: 'center'}}>
        <h1 onClick ={this.clickMe.bind(this,'messager')}>Hello World</h1>
        <div>My first React Application on Aneesh</div>
        <p>Hello</p>
        <Example />
        </div>
    )
  }
}
