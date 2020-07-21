import React, { Component } from "react";

import Header from "parts/Header";
import Hero from "parts/Hero";
import MostPicked from "parts/MostPicked";

import data from "json/landingPage";
import Categories from "parts/Categories";
import Testimony from "parts/Testimony";
import Footer from "parts/Footer";

export default class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.refMostPicked = React.createRef();
  }

  render() {
    return (
      <>
        <Header {...this.props} />
        <Hero refMostPicked={this.refMostPicked} data={data.hero} />
        <MostPicked refMostPicked={this.refMostPicked} data={data.mostPicked} />
        <Categories data={data.categories} />
        <Testimony data={data.testimonial} />
        <Footer />
      </>
    );
  }
}
