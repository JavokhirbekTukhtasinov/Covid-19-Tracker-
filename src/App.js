import React, { useEffect, useState } from 'react';
import { Cards, Chart, CountryPicker } from './components';
import Style from './App.module.css';
import { fetchData } from './api/index';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
class App extends React.Component {
	state = {
		data    : {},
		country : ''
	};
	async componentDidMount() {
		const fetchedData = await fetchData();
		this.setState({ data: fetchedData });
	}

	handleCoutryChange = async (country) => {
		const fetchedData = await fetchData(country);
		console.log(fetchedData);
		this.setState({ data: fetchedData, country: country });
	};
	render() {
		const { data, country } = this.state;
		return (
			<div className={Style.container}>
				<Header />
				<Cards data={data} />
				<CountryPicker onCountryHandler={this.handleCoutryChange} />
				<Chart data={data} country={country} />
				<Footer />
			</div>
		);
	}
}

export default App;
