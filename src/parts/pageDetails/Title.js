import React from "react";
import Fade from "react-reveal/Fade";

import Breadcrumb from "elements/Breadcrumb";

export default function Title(props) {
  const { data, breadcrumb } = props;

  return (
    <section className="container spacing-sm">
      <Fade bottom>
        <div className="row align-items center">
          <div className="col">
            <Breadcrumb data={breadcrumb} />
          </div>
          <div className="col-auto text-center">
            <div className="h2">{data.name}</div>
            <span className="text-gray-400">
              {data.city}, {data.country}
            </span>
          </div>
          <div className="col"></div>
        </div>
      </Fade>
    </section>
  );
}
