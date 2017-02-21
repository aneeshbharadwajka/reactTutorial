
import React from 'react'
import ReactDOM from 'react-dom'
let bookList = [
  {
    name: 'Abc',
    Author: 'Someone',
    Pages: '200',
    Price: '500',
    Description: 'This is a brief description'
  },
  {
    name: 'ASOIAF',
    Author: 'GRRM',
    Pages: '1400',
    Price: '300'
  },
  {
    name: 'Eragon',
    Author: 'sdfdsf',
    Pages: '1200',
    Price: '500'
  },
  {
    name: 'Harry Potter',
    Author: 'J K Rowling',
    Pages: '600',
    Price: '200'
  }

]
class NewComponent extends React.Component {
  render () {
    return (
    <div>Hello!!</div>
    )
  }

}

export default class Book extends React.Component {
  constructor () {
    super()
    this.state = {
      clicked: false
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick () {
    this.setState({
      clicked: true
    })
  }
  render () {
    let bookObject = bookList.map((item, index) => {
      return (<li key={index} >
        <button onClick = {this.handleClick} />
      {this.state.clicked ? <NewComponent indexOfClick ={index} /> : null}
      name :<b>{item.name}</b><br></br>
        Author: {item.Author}<br></br>
        Pages: {item.Pages}<br></br>
        Price: {item.Price}<br></br><br></br>
      </li>)
    })
    return (
      <div>
        <ul>{bookObject}</ul>
      </div>
    )
  }
}
