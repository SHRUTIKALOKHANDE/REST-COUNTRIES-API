import React from 'react';
import { Input, Menu, Dropdown, Button, message, Row, Col } from 'antd';
import { SearchOutlined, DownOutlined } from '@ant-design/icons';
import Header from './Header';
import Country from './Country';
import { withRouter } from 'react-router';
import { getAllData } from '../utils/apiCallHandler.js';

class ProjectView extends React.Component {
	constructor(props) {
		super(props);
		this.debounceTimeout = 0;
		this.regions = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];
		this.countries = [
			'germany',
			'united states of america',
			'brazil',
			'iceland',
			'afghanistan',
			'aland islands',
			'albania',
			'algeria',
		];
		this.DATA = [];
		this.state = {
			loading: false,
			filteredCountries: [],
		};
	};

	async componentDidMount() {
		console.log('componentdidmount calling');
		this.DATA=await getAllData();
		this.setState(
			{
				loading: true,
				filteredCountries: this.DATA,
			},
			//console.log(this.state.loading, this.state.filteredCountries)
		);
		console.log('componentdidmount completed');
	};

	handleMenuClick = (e) => {
		message.info('Click on menu item.');
		console.log('click', e.key);
		console.log(this.regions[e.key]);
		let searchRegion = this.regions[e.key];
		this.search(searchRegion);
	};

	search = (text) => {
		text = text.toLowerCase();
		let result;
		if (text.length === 0) {
			result = this.DATA;
			console.log('1', result);
		} else {
			result = this.DATA.filter(function (country) {
				let nm = country.name.toLowerCase();
				let reg = country.region.toLowerCase();
				return nm.includes(text) || reg.includes(text);
			});
		}
		if (result.length === 0) {
			message.error('Sorry, Not Found!');
			result = this.DATA;
		}

		this.setState({ filteredCountries: result }, console.log(this.state.filteredCountries));
	};

	debounceSearch = (event) => {
		//console.log('Event ', event.target.value);
		let searchText = event.target.value;
		if (this.debounceTimeout) {
			clearTimeout(this.debounceTimeout);
		}
		this.debounceTimeout = setTimeout(() => {
			this.search(searchText);
		}, 300);
	};

	handleCountryCardClick = (country) => {
		console.log("ProjectViews onClick called");
		this.props.history.push({
			pathname: '/country',
			state: { details: country }
		  });
	};

	render() {
		const menu = (
			<Menu>
				{this.regions.map((region, idx) => (
					<Menu.Item key={idx} onClick={(event) => this.handleMenuClick(event)}>
						{region}
					</Menu.Item>
				))}
			</Menu>
		);

		return (
			<>
				<Header  history={this.props.history}/>
				<div className="view-container view-container-mobile">
					<div className="search-container mobile">
						<div className="searchdiv">
						<Input
							className="searchbar"
							size="large"
							placeholder="Search for a country..."
							prefix={<SearchOutlined />}
							// onSearch={this.search}
							onChange={this.debounceSearch}
						/>
						</div>
						<div className="dropdowndiv">
						<Dropdown classname="dropdown" overlay={menu}>
							<Button>
								Filter by Region <DownOutlined />
							</Button>
						</Dropdown>
						</div>
					</div>

					<Row>
						{/* <Col xs={{ span: 6 }} md={{ span: 24 }} className="contry-container"> */}
						<Col gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} className="contry-container">

							<div>
								<Row justify="center">
									{this.state.loading &&
										this.state.filteredCountries.map((country, idx) => (
											<Country countryData={country} onClick={this.handleCountryCardClick} key={idx} />
										))}
								</Row>
							</div>
						</Col>
					</Row>
				</div>
			</>
		);
	}
}

export default withRouter(ProjectView);
