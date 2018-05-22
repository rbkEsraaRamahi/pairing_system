import React from 'react'
import ReactDOM from 'react-dom'
import { browserHistory as history } from 'react-router'
import Student from './components/addStudent.jsx'
import Pairing from './components/pairingList.jsx'
import RaisedButton from 'material-ui/RaisedButton'
import Badge from 'material-ui/Badge'
import TextField from 'material-ui/TextField'
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table'
import injectTapEventPlugin from 'react-tap-event-plugin'
import {Tabs, Tab} from 'material-ui/Tabs'
import AppBar from 'material-ui/AppBar'
class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      pairing: [],
    }
  }

  add () {
    var that=this
    console.log(this.state.pairing)
    $.ajax({
      type: "PUT",
      url: "http://localhost:3000/api/student/update",
      data:{"student":that.state.pairing},
      success: function(res){
        console.log('sucesss');
      }
    });
  }
  pairingList(){
    var that=this
    $.ajax({
      type: 'GET',
      url: ' http://localhost:3000/api/student/',
      data: {},
      success: function (dataB) {
        function randomaize(data) {
          var arr = []
          for (var i = 0; i < data.length; i++) {
            arr.push(data[i])
          }
          var length = arr.length;
          for (var i =0; i < arr.length; i++) {
            var rand = Math.floor(Math.random()*(length-i)+i);
            var previos = arr[i];
            arr[i] = arr[rand];
            arr[rand] = previos;
          }
          return arr;
        }
        var arr = randomaize(dataB);
        var result=[];
        var counter=-1;
        var filter = [];
        if(arr.length % 2 !== 0 ){
          counter = 0;
          for (var i = 0; i < arr.length; i++) {
            if(arr[i].Level >=3.5 && !arr[i].WhoPairedWith.includes("DUCK")){
              result.push([arr[i] , {StudentName:"DUCK"}])
              arr.splice(i,1)
              break;
            }
          }
        }
        while(arr.length>0){
          counter++;
          result.push([arr[0]]);
          var correntStudent = arr.shift()
          for (var i = 0; i < arr.length; i++) {
            if(arr[i].Level -1 === correntStudent.Level || arr[i].Level +1 === correntStudent.Level){
              if(correntStudent.WhoPairedWith.indexOf(arr[i].StudentName) === -1){
                result[counter].push(arr[i])
                var index = arr.indexOf(arr[i])
                arr.splice(index, 1)
                break;
              }
            }
          }
          for (var i = 0; i < result.length; i++) {
            if (result[i].length === 1) {
              for (var j = i; j < result.length; j++) {
                if (result[j] !== result[i] && result[j].length === 1 ){
                  if(result[i][0].WhoPairedWith.indexOf(result[j][0].StudentName) === -1){
                    result[i].push(result[j][0])
                    result.splice(j,1)
                  }
                }
              }
            }
          }
        }
        that.state.pairing=result;
        that.setState({
          pairing: that.state.pairing
        })
      },
      error: function (request, status, error) {
        console.log(error);
      }
    });
  }
  render() {

    var usernameComp = (
        <div><h1> Pairing List </h1>
          <form onSubmit={this.handleSubmit}>
            <label style={{fontWeight:"bold", fontSize:"20px"}}> Enter Sprint Name :   </label>
            <TextField floatingLabelText="Enter Sprint Name" onChange={this.change} />
          </form>
          <RaisedButton label="Create"  buttonStyle={{ background:"#FF1493"}}  onClick={this.pairingList}  />
          <Table>
            <TableHeader>
              <TableRow>
                <TableHeaderColumn>Student1</TableHeaderColumn>
                <TableHeaderColumn>Level1</TableHeaderColumn>
                <TableHeaderColumn>Student2</TableHeaderColumn>
                <TableHeaderColumn>Level2</TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody>
              {this.state.pairing.map((student,index) =>
                  <TableRow>
                    <TableRowColumn>{student[0].StudentName}</TableRowColumn>
                    <TableRowColumn>{student[0].Level}</TableRowColumn>
                    <TableRowColumn>{student[1].StudentName}</TableRowColumn>
                    <TableRowColumn>{student[1].Level}</TableRowColumn>
                  </TableRow>
              )}
            </TableBody>
          </Table>
          <RaisedButton label="Submit"  buttonStyle={{ background:"#FF1493"}}  onClick={this.add} /></div>
    );
    return (
        <div>
          <AppBar title='Pairing System' style={{background: '#FF1493', fontWeight: 'bold'}} >
            <Tabs>
              <Tab label='&nbsp;Add&nbsp;Students&nbsp;&nbsp;&nbsp;&nbsp;'style={{background: '#FF1493', fontWeight: 'bold'}} onClick={() => history.push('/addStudent')} />
              <Tab label='&nbsp;Groups&nbsp;' style={{background: '#FF1493', fontWeight: 'bold'}} />
            </Tabs>
          </AppBar>
          <Pairing />
        </div>
    )
  }
}

export default App
