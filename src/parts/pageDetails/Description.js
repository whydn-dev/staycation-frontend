import React from "react";
import ReactHtmlParser from "react-html-parser";
export default function Description(props) {
  const { data } = props;
  return (
    <main>
      <h4>About the place</h4>
      {ReactHtmlParser(data.description)}
      <div className="row" style={{ marginTop: 30 }}>
        {data.features.map((feature, index) => {
          return (
            <div
              key={`features-${index}`}
              className="col-3"
              style={{ marginBottom: 20 }}
            >
              <img
                src={feature.imageUrl}
                alt={feature.name}
                className="d-block mb-2"
                width="38"
              />
              <span> {feature.qty} </span>
              <span className="text-gray-500 font-weight-light">
                {feature.name}
              </span>
            </div>
          );
        })}
      </div>
    </main>
  );
}
