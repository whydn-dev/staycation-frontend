import React from "react";

import Button from "elements/Button";
import IconText from "./IconText";

export default function Footer(props) {
  return (
    <footer className="container">
      <div className="row">
        <div className="col-auto" style={{ width: 350 }}>
          <IconText />
          <p className="brand-tagline">
            We kaboom your beuty holiday instantly and memorable.
          </p>
        </div>
        <div className="col-auto mr-5">
          <h6 className="mt-2">For Beginners</h6>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <Button type="link" href="/register">
                New Account
              </Button>
            </li>
            <li className="list-group-item">
              <Button type="link" href="/properties">
                Start Booking a Room
              </Button>
            </li>
            <li className="list-group-item">
              <Button type="link" href="/use-payments">
                Use Payments
              </Button>
            </li>
          </ul>
        </div>
        <div className="col-auto mr-5">
          <h6 className="mt-2">Explore Us</h6>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <Button type="link" href="/careers">
                Our Careers
              </Button>
            </li>
            <li className="list-group-item">
              <Button type="link" href="/privacy">
                Privacy
              </Button>
            </li>
            <li className="list-group-item">
              <Button type="link" href="/terms">
                Terms & Conditions
              </Button>
            </li>
          </ul>
        </div>
        <div className="col-3">
          <h6 className="mt-2">Connect Us</h6>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <Button isExternal type="link" href="mailto:hi@staycation.id">
                hi@staycation.id
              </Button>
            </li>
            <li className="list-group-item">
              <Button isExternal type="link" href="tel:+62122081998">
                021 - 2208 - 1998
              </Button>
            </li>
            <li className="list-group-item">
              <span>Staycation, Kemang Jakarta</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col text-center copyrights">
          Copyright 2019 • All rights reserved • Staycation
        </div>
      </div>
    </footer>
  );
}
