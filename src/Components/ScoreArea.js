import React from "react";
import TotalCorrect from "./TotalCorrect";
import TotalIncorrect from "./TotalIncorrect";

export default function ScoreArea() {
  return (
    <div>
      <TotalCorrect />
      <TotalIncorrect />
    </div>
  );
}
