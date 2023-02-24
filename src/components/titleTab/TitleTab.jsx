import React from "react";

const TitleTab = (props) => {
  document.title = "Foods ordering app -" + props.title;
  return <div className="w-100">{props.children}</div>;
};

export default TitleTab;
