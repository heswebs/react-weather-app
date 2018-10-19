import React, { Component } from "react";

const Form = props => (
  <form onSubmit={props.getWeather} autoComplete="off">
    <input type="text" name="city" placeholder="city..." />
    <input type="text" name="country" placeholder="country code..." />
    <button>get weather</button>
  </form>
);

export default Form;
