import React, { Component } from 'react';
import Header from './components/Header.js'
import SortingHat from './components/SortingHat.js'
import './App.css';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      sorted : false,
      house : ''
    }
  }


  //Returns a string with the House name value and sets it in the state
  gettingHouse = () => {
    const houses = ['Gryffindor', 'Slytherin', 'Ravenclaw', 'Hufflepuff']
    let number = this.getRandomNumber(0, 3)
    this.setState({
      house: houses[number],
      sorted: true
    })
  }

  //Generates a random number in an specific range
  getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  //Reseting to initial states for a new sorting
  resetState = () => {
    this.setState({
      house: '',
      sorted: false
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        {!this.state.sorted &&
          <SortingHat gettingHouse={this.gettingHouse}/>
        }
      </div>
    );
  }
}

export default App;