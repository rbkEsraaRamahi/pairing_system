import React from 'react';
import App from '../index';
const Pairing = (props) => (
  <div>
    <h4> Pairing List </h4>
    <ul>
    {props.students.map(student =>
      <li> {student} </li>
    )}
  </ul>
  </div>
)

export default Pairing;