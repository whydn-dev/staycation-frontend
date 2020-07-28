import React from "react";
import Fade from "react-reveal/Fade";
export default function MainContent(props) {
  const { data, current } = props;
  return <Fade> {data[current] && data[current].content} </Fade>;
}
