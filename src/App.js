import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppNavbar from './components/AppNavbar';
import ShoppingListOne from './components/ShoppingList';
import { Test } from './components/Test';
import { Container } from 'reactstrap'
import { ShoppingList } from './components/ShoppingListOne';

class App extends Component {
  render() {
    return (
        <div className="App">
          <AppNavbar />
          <Container>
            <ShoppingList  />
            <ShoppingListOne />
          </Container>
        </div>
    );
  }
}

export default App;
