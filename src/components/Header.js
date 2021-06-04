import React  from 'react';
import halfmoon from '../assets/halfmoon.svg';

export default class Header extends React.Component {
	constructor(props){
		super(props);
		this.state={
			darkmode:false,
		}
	};
	
	toggle = () => {
		let check=this.state;
		this.setState({
			darkmode:!check,
		});
	};
    
	root = () => {
		this.props.history.push("/");
	  };
	render() {
		return (
			<div className="header header-mobile">
				<div className="header-title" onClick={this.root}>
					Where in the world?
				</div>

				<div className="header-action" onClick={this.toggle}>
					<img className="icon" src = {halfmoon} alt="HalfMoon" />
					
					<div className="header-link" onClick={this.toggleColorSchema}>
						Dark Mode
					</div>
				</div>
			</div>
		);
	}
}
