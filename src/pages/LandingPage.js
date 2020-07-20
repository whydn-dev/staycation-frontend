import React, { Component } from "react";

import Header from "parts/Header";
import Hero from "parts/Hero";
import data from "json/landingPage";

export default class LandingPage extends Component {
  render() {
    return (
      <>
        <Header {...this.props}></Header>
        <Hero data={data.hero} />
      </>
    );
  }
}
