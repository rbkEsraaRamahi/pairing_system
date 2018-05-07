import React from 'react';
import ReactDOM from 'react-dom';
import Student from './components/addStudent.jsx';
import Pairing from './components/pairingList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      students: ["Esraa", "Hanan", "Sahar", "Mohannad", "Mai", "Heba"]
    }

  }

  add (term) {
    $.ajax({
      type: "POST",
      url: "/",
      data: {},
      success: function(res){
        console.log('sucesss');
      }
    });
  }
  pairingList(data){
    console.log('sucesss');

  }

  render () {
    return (<div>
      <h1>Pairing System</h1>
      
      <Pairing students={this.state.students}/>
     <button onClick={this.pairingList}> create </button>

      
    </div>)
  }
}
export default App
