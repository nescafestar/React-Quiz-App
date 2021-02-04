import React from "react";
import Question from "./Question";
import AnswerList from "./AnswerList";
import UserGreeting from "./UserGreetings";

export default function QuizArea(props) {
  // checking for finish
  if (props.isFinished) {
    return <UserGreeting />;
  }

  return (
    <div>
      <h2>Quiz Area</h2>
      <Question dataSet={props.dataSet} />
      <AnswerList dataSet={props.dataSet} />
    </div>
  );
}
