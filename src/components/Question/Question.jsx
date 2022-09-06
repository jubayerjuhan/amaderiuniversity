import React, { useEffect } from "react";
import { useState } from "react";
import "./Question.css";

const Question = ({
  givenAnswer,
  submitted: disable,
  question,
  handleAnsClick,
}) => {
  const [selectedAns, setSelectedAns] = useState("");
  console.log(disable, "hello");

  // useEffect(() => {
  //   let customClass = "";
  //   const isTrue = selectedAns.serial === question.data.correctAns;
  //   if (isTrue) return customClass;
  // }, [question.data.correctAns, selectedAns.serial]);

  return (
    <div className="qs-body">
      <p className="qs-title">{question?.data.question}</p>
      <div className={`qs-options`}>
        {question?.data?.options?.map((opt, key) => (
          <div
            className={`qs-opt${
              selectedAns.serial === opt.serial ? "-selected" : ""
            }`}
            key={key}
          >
            <p
              className=""
              onClick={() => {
                setSelectedAns(opt);
                handleAnsClick(question, opt);
              }}
            >
              {opt?.name}
            </p>
          </div>
        ))}
        {disable && <p>Correct Ans : {question.data.correctAns}</p>}{" "}
      </div>
    </div>
  );
};

export default Question;
