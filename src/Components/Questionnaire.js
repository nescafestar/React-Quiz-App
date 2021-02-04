import React, { Component } from "react";
import dataSet from "../Api/dataSet";
import QuizArea from "./QuizArea";
import ScoreArea from "./ScoreArea";

export default class Questionnaire extends Component {
  constructor() {
    super();

    // default values for setting up states.
    this.state = {
      current: 0,
      dataset: dataSet,
      correct: 0,
      incorrect: 0,
      isFinished: false
    };
  }

  render() {
    return (
      <div>
        <h2>Quiz Area</h2>
        <QuizArea
          // passing current dataset state
          dataSet={this.state.dataset[this.state.current]}
          //test state
          isFinished={this.state.isFinished}
        />
        <ScoreArea />
      </div>
    );
  }
}
