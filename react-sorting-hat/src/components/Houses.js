import React, { Component } from 'react';

  const houseData = [
    {
      name: 'Gryffindor',
      traits: 'bravery, nerve, chivalry, courage, daring',
      foundator: 'Godric Gryffindor',
      members: 'Harry Potter, Ron Weasley, Hermione Granger, Albus Dumbledor and Sirius Black.'
    },
    {
      name: 'Slytherin',
      traits: 'resourcelfulnnes, cunning, ambition, determination, self-preservation.',
      foundator: 'Salazar Slytherin',
      members: 'Tom Riddle, Severus Snape, Bellatrix Lestrange, Draco Malfoy and Albus Severus Potter.'
    },
    {
      name: 'Ravenclaw',
      traits: 'intelligence, wit, wisdom, creativity, originality, individuality, acceptance.',
      foundator: 'Rowena Ravenclaw',
      members: 'Luna Lovegood, Sybil Trelawney, Gilderoy Lockhart, Filius Flitwick and Cho Chang.'
    },
    {
      name: 'Hufflepuff',
      traits: 'dedication, hard work, fair play, patience, kindness, tolerance, unafraid of toil, loyalty.',
      foundator: 'Helga Hufflepuff',
      members: 'Nymphadora Tonks, Cedric Diggory, Pomona Sprout, Newton Scamander and Teddy Lupin.'
    }
  ]


class Houses extends Component {
  constructor(props) {
    super(props)
    this.state = {
      traits: '',
      foundator: '',
      members: ''
    }
  }
  componentWillMount () {
   const currentHouse = this.gettingHouse()
   this.setState({
    traits: currentHouse.traits,
    foundator: currentHouse.foundator,
    members: currentHouse.members
   })
  }

  gettingHouse = () => {
    let house = houseData.filter(v=> v.name === this.props.selectedHouse)
    return house[0]
  }

	render () {
		return (
			<div>
				<h3>Your House is..</h3>
				<h2>{this.props.selectedHouse}</h2>
				<button onClick={this.props.resetState}>
					{'< Go back'}
				</button>
			</div>
		);
	}
}

export default Houses;