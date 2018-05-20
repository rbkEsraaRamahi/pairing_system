import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory as history } from 'react-router';
import Student from './components/addStudent.jsx';
import Pairing from './components/pairingList.jsx';
import RaisedButton from 'material-ui/RaisedButton';
import Badge from 'material-ui/Badge';
import TextField from 'material-ui/TextField';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {Tabs, Tab} from 'material-ui/Tabs';
import AppBar from 'material-ui/AppBar';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  
    }

    

  }
  
  render() {
    return (
      <div>
      <AppBar title="Pairing System" style={{background:"#FF1493",fontWeight:"bold"}} >
      <Tabs>
      <Tab label="&nbsp;Add&nbsp;Students&nbsp;&nbsp;&nbsp;&nbsp;"style={{background:"#FF1493",fontWeight:"bold"}} onClick={() =>history.push('/addStudent')} />
      <Tab label="&nbsp;Groups&nbsp;" style={{background:"#FF1493",fontWeight:"bold"}}  />
      </Tabs>
      </AppBar>
      <Pairing />
      </div>
      );

  }
}



export default App;
