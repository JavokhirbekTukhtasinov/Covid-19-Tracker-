import React, { useEffect, useState } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import Style from './Countries.module.css';
import { fetchCountries } from '../../api/index';

const CountryPicker = (props) => {
	const [ countries, setCountries ] = useState([]);

	useEffect(
		() => {
			const fetchAPI = async () => {
				setCountries(await fetchCountries());
			};

			fetchAPI();
		},
		[ setCountries ]
	);

	return (
		<FormControl className={Style.formControl}>
			<NativeSelect className={Style.formControl} onChange={(e) => props.onCountryHandler(e.target.value)}>
				<option value="global">Global</option>
				{countries.map((country, index) => (
					<option key={index} value={country}>
						{country}
					</option>
				))}
			</NativeSelect>
		</FormControl>
	);
};

export default CountryPicker;
