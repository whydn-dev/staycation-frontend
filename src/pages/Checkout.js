import React, { Component } from "react";
import Header from "parts/Header";
import Fade from "react-reveal/Fade";

import BookingInformation from "parts/Checkout/BookingInformation";
import Payment from "parts/Checkout/Payment";
import Completed from "parts/Checkout/Completed";

import ItemDetails from "json/itemDetails.json";
import Stepper from "elements/Stepper";
import Numbering from "elements/Stepper/Numbering";
import Meta from "elements/Stepper/Meta";
import MainContent from "elements/Stepper/MainContent";
import Controller from "elements/Stepper/Controller";
import Button from "elements/Button";

export default class Checkout extends Component {
  state = {
    data: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      proofPayment: "",
      bankName: "",
      bankHolder: "",
    },
  };

  onChange = (event) => {
    this.setState({
      data: { ...this.state.data, [event.target.name]: event.target.value },
    });
  };

  componentDidMount() {
    window.scroll(0, 0);
  }

  render() {
    const { data } = this.state;
    const checkout = { duration: 3 };
    const steps = {
      bookingInformation: {
        title: "Booking Information",
        description: "Please fill up the blank field below",
        content: (
          <BookingInformation
            data={data}
            checkout={checkout}
            ItemDetails={ItemDetails}
            onChange={this.onChange}
          />
        ),
      },
      payment: {
        title: "Payment",
        description: "kindly folow the insturctions below",
        content: (
          <Payment
            data={data}
            checkout={checkout}
            ItemDetails={ItemDetails}
            onChange={this.onChange}
          />
        ),
      },
      completed: {
        title: "Yay! Completed",
        description: null,
        content: <Completed />,
      },
    };

    console.log(data);

    return (
      <>
        <Header isCentered />

        <Stepper steps={steps}>
          {(prevStep, nextStep, CurrentStep, steps) => (
            <>
              <Numbering
                data={steps}
                current={CurrentStep}
                style={{ marginBottom: 50 }}
              />

              <Meta data={steps} current={CurrentStep} />

              <MainContent data={steps} current={CurrentStep} />

              {CurrentStep === "bookingInformation" && (
                <Controller>
                  {data.firstName !== "" &&
                    data.lastName !== "" &&
                    data.email !== "" &&
                    data.phone !== "" && (
                      <Fade>
                        <Button
                          className="btn mb-3"
                          type="button"
                          isBlock
                          isPrimary
                          hasShadow
                          onClick={nextStep}
                        >
                          Continue to Book
                        </Button>
                      </Fade>
                    )}
                  <Button
                    className="btn"
                    type="link"
                    isBlock
                    isLight
                    href={`/properties/${ItemDetails._id}`}
                  >
                    Cancel
                  </Button>
                </Controller>
              )}

              {CurrentStep === "payment" && (
                <Controller>
                  {data.firstName !== "" &&
                    data.lastName !== "" &&
                    (data.email !== "") & (data.phone !== "") && (
                      <Fade>
                        <Button
                          className="btn mb-3"
                          type="button"
                          isBlock
                          isPrimary
                          hasShadow
                          onClick={nextStep}
                        >
                          Continue to Confirmation
                        </Button>
                      </Fade>
                    )}

                  <Button
                    className="btn"
                    type="button"
                    isBlock
                    isLight
                    onClick={prevStep}
                  >
                    Back
                  </Button>
                </Controller>
              )}

              {CurrentStep === "completed" && (
                <Controller>
                  <Button
                    className="btn"
                    type="link"
                    isBlock
                    isPrimary
                    hasShadow
                    href=""
                  >
                    Back to Home
                  </Button>
                </Controller>
              )}
            </>
          )}
        </Stepper>
      </>
    );
  }
}
