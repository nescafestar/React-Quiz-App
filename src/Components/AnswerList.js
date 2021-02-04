import React from "react";
import Answer from "./Answer";

export default function AnswerList(props) {
  const Options = []; //created empty array

  for (let i = 0; i < props.dataSet.options.length; i++) {
    Options.push(
      //push answer component to array
      <Answer
        //choices passed to answer
        choice={i}
        //options of answers to selec from
        answer={props.dataSet.options[i]}
      />
    );
  }

  return { Options };
}
