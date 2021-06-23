import React, { useState, useEffect } from 'react';
import { fetchDailyData } from '../../api/index';
import Style from './Charts.module.css';
import { Line, Bar } from 'react-chartjs-2';
import cx from 'classnames';
const Chart = ({ data: { confirmed, recovered, deaths }, country }) => {
	const [ dailyData, setdailyData ] = useState([]);
	useEffect(() => {
		const fetchAPI = async () => {
			setdailyData(await fetchDailyData());
		};
		console.log(country);
		fetchAPI();
	}, []);

	const LineChart = dailyData.length ? (
		<Line
			data={{
				labels   : dailyData.map(({ date }) => date),
				datasets : [
					{
						data        : dailyData.map(({ confirmed }) => confirmed),
						label       : 'Infected',
						borderColor : '#3333ff',
						fill        : true
					},
					{
						data            : dailyData.map(({ deaths }) => deaths),
						label           : 'Deaths',
						borderColor     : 'red',
						backgroundColor : 'rgba(255,0,0,0.5)',
						fill            : true
					}
				]
			}}
		/>
	) : null;
	const barChar = confirmed ? (
		<Bar
			data={{
				labels   : [ 'Infected', 'Recovered', 'Deaths' ],
				datasets : [
					{
						label           : `Current state in ${country}`,
						backgroundColor : [ 'rgba(0,0,255,0.5)', 'rgba(0,255,0,0.5)', 'rgba(255,0,0,0.5)' ],
						data            : [ confirmed.value, recovered.value, deaths.value ]
					}
				]
			}}
			options={{
				legand : { display: false },
				title  : { display: true, text: `Current state in ${country}` }
			}}
		/>
	) : null;
	return <div className={Style.container}>{country ? barChar : LineChart}</div>;
};

export default Chart;
