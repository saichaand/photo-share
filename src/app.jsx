import React, {Component} from 'react';
import {render} from 'react-dom';

class App extends Component{
	render(){
		return(
			<div>
				React woo Point
			</div>
		)
	}
}

render(<App/>, document.getElementById('root'));