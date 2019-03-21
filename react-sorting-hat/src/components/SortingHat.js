import React, { Component } from 'react';


class Hat extends Component {
	render () {
		return (
			<div>
				<button onClick={this.props.gettingHouse}>
					CLICK TO DO STUFF
				</button>
			</div>
		);
	}
}

export default Hat;