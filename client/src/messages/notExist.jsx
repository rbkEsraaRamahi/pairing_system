import React from 'react';



export default class NotExist extends React.Component {
  constructor(props) {
    super(props)
  }

  render(){
    console.log('I am here ')
    return (
<h1> Groups is not found </h1>
    )
  }
}