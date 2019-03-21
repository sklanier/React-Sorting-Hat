import React, { Component } from 'react';
import Header from './components/Header.js'
import SortingHat from './components/SortingHat.js'
import Houses from './components/Houses.js'
import './App.css';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      sorted : false,
      house : ''
    }
  }

  gettingHouse = () => {
    const houses = ['Gryffindor', 'Slytherin', 'Ravenclaw', 'Hufflepuff']
    let number = this.getRandomNumber(0, 3)
    this.setState({
      house: houses[number],
      sorted: true
    })
  }

  getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

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
        {this.state.sorted &&
          <Houses 
            resetState={this.resetState}
            selectedHouse={this.state.house}/>
        }
      </div>
    );
  }
}

export default App;