import React from 'react';
import { Card, Grid, CardContent, Typography } from '@material-ui/core';
import Style from './Cards.module.css';
import CountUp from 'react-countup';
import cx from 'classnames';

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
	if (!confirmed && !recovered && !deaths && !lastUpdate) {
		return <h3>Loading...</h3>;
	}

	return (
		<div className={Style.container}>
			<Grid container spacing={3} justify="center">
				<Grid item component={Card} xs={12} md={3} className={cx(Style.card, Style.infected)}>
					<Typography color="textSecondary" gutterBottom>
						Infected
					</Typography>
					<Typography variant="h5">
						<CountUp start={0} end={confirmed.value} duration={2.5} separator="," />
					</Typography>
					<Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
					<Typography variant="body2">Number of active case of Covid-19</Typography>
				</Grid>
				<Grid item component={Card} xs={12} md={3} className={cx(Style.card, Style.recovered)}>
					<Typography color="textSecondary" gutterBottom>
						Recovered
					</Typography>
					<Typography variant="h5">
						<CountUp start={0} end={recovered.value} duration={2.5} separator="," />
					</Typography>
					<Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
					<Typography variant="body2">Number of recovered peopel from Covid-19</Typography>
				</Grid>
				<Grid item component={Card} xs={12} md={3} className={cx(Style.card, Style.deaths)}>
					<Typography color="textSecondary" gutterBottom>
						Deaths
					</Typography>
					<Typography variant="h5">
						<CountUp start={0} end={deaths.value} duration={2.5} separator="," />
					</Typography>
					<Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
					<Typography variant="body2">Number of deaths from Covid-19</Typography>
				</Grid>
			</Grid>
		</div>
	);
};

export default Cards;
