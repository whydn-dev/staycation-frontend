import React from "react";
import Fade from "react-reveal/Fade";

export default function FeaturedImages(props) {
  const { data } = props;
  return (
    <section className="container">
      <div className="container-grid sm">
        {data.map((item, index) => {
          return (
            <div
              key={`Featured-image-${index}`}
              className={`item ${
                index > 0 ? "column-5 row-1 " : "column-7 row-2"
              }`}
            >
              <Fade bottom delay={100 * index}>
                <div className="card h-100">
                  <figure className="img-wrapper">
                    <img src={item.url} alt={item._id} className="img-cover" />
                  </figure>
                </div>
              </Fade>
            </div>
          );
        })}
      </div>
    </section>
  );
}
