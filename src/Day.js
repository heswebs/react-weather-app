import React, { Component } from 'react';

const WeatherToday = props => (
			<div>
			   { props.city && props.country && <h3>Weather for {props.city}, {props.country.toUpperCase()}</h3> }
			   { props.currentDay && <p>{props.currentDay}</p> }
			   { props.icon && <h3><img src={props.icon} alt="weather Icon" /></h3> } 
			   { props.tempMax && props.tempMin && <p><span> {props.tempMax}° </span>/<span> {props.tempMin}° </span></p> } 
			   { props.desc && <p>Conditions: {props.desc}</p> }

			</div>

			)

export default WeatherToday;


