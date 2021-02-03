import React, { Component } from "react";
import dataset from "../Api/dataSet";
import QuizArea from "./QuizArea";
import ScoreArea from "./ScoreArea";

export default class Questionnaire extends Component {
  constructor() {
    super();

    // default values for setting up states.
    this.state = {
      current: 0,
      dataset: dataset,
      correct: 0,
      incorrect: 0,
      isFinished: false
    };
  }

  render() {
    return (
      <div>
        <QuizArea />
        <ScoreArea />
      </div>
    );
  }
}
