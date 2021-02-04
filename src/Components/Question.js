import React from "react";

export default function Question(props) {
  return (
    <div>
      <h1>THis is Question</h1>
      {props.dataSet.question}
    </div>
  );
}
