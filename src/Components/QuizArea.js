// import React, { Component } from "react";
import Question from "./Question";
import AnswerList from "./AnswerList";
import UserGreeting from "./UserGreetings";

export default function QuizArea(props) {
  if (props.isFinished) {
    return <UserGreeting />;
  }
  return (
    <div>
      <h2>Quiz Area</h2>
      <Question dataset={props.dataset} />
      <AnswerList dataset={props.dataset} />
    </div>
  );
}
