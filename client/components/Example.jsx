
import React from 'react'

export default class Example extends React.Component {
  render () {
    let studentList = [
      {
        name: 'Abc',
        Age: '23'
      },
      {
        name: 'Aneesh',
        Age: '22'
      }
    ]

    let studentObject = studentList.map((item, index) => {
      return (
        <li key = {index} >
        name : {item.name}</li>
      )
    })
    return <div>{studentObject}</div>
  }
}

