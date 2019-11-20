import React, { Component } from 'react';
import './App.css';
import Fragments from './Fragments';
import Table from './Table';
import Clock from './Clock';

class App extends Component {
  render() {
    return (
     <div>
        <Table/>
    <Clock/>
     {/*Fragments/*/}
      
     </div>
    );
  }
}

export default App;
