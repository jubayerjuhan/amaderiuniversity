import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Button } from "react-bootstrap";
import client from "../../client.js";
import Question from "../../components/Question/Question.jsx";
import Form from "react-bootstrap/Form";

import Header from "../../components/Shared/Header/Header.js";
import Countdown from "react-countdown";
import "./mockTest.css";
import { useSelector } from "react-redux";
const Mocktest = () => {
  const [testQuestion, setTestQuestion] = useState([]);
  const [givenAnswer, setGivenAnswer] = useState([]);

  const { user } = useSelector((state) => state.user);
  console.log(user, "helo user");
  useEffect(() => {
    getQuestions();
  }, []);

  const getQuestions = async () => {
    const questions = await client.get("/questions");
    console.log(questions.data);
    setTestQuestion(questions.data);
  };

  //
  const handleAnsClick = (question, ans) => {
    console.log(question, "whois");

    const isFound = givenAnswer.find(
      (answer) => answer?.question?._id === question._id
    );
    if (isFound) {
      const newArray = givenAnswer.filter(
        (answer) => answer?.question?._id !== question?._id
      );

      newArray.push({
        question,
        ans,
      });
      return setGivenAnswer(newArray);
    }

    setGivenAnswer((prev) => [
      ...prev,
      {
        question,
        ans,
      },
    ]);
  };

  const [mockTest, setMockTest] = useState(false);
  const [endDate, setEndDate] = useState(0);
  const [group, setGroup] = useState("");
  const [correctAns, setCorrectAns] = useState([]);

  const validateAns = () => {
    let correctAns = [];
    for (let i = 0; i < givenAnswer.length; i++) {
      const element = givenAnswer[i];
      const correct = element.ans.serial === element.question.data.correctAns;
      if (correct === true) {
        correctAns.push(element);
        setCorrectAns((prev) => [...prev, element]);
      }
    }
    return correctAns;
  };
  const [disable, setDisable] = useState(false);

  const submitAllAns = async () => {
    const ans = validateAns();
    setDisable(true);
    setCorrectAns(ans);

    const res = await client.post("/addResult", {
      user: {
        userId: user.id,
        userName: user.name,
      },
      fullMark: testQuestion?.length,
      mark: ans.length,
      section: group,
    });

    console.log(res, "response");
  };

  return (
    <div>
      <Header />
      {!mockTest && (
        <div className="startWrapper">
          <div className="selectWrapper">
            <p>Enter Your Group</p>
            <select name="" id="" onChange={(e) => setGroup(e.target.value)}>
              <option value="No Group">Select A Group</option>
              <option value="science">Science</option>
              <option value="arts">Arts</option>
              <option value="commerces">Commerce</option>
            </select>
          </div>
          <Button
            className="mt-10 startButton"
            onClick={() => {
              setMockTest(true);
              setEndDate(Date.now() + 20 * 60 * 1000);
            }}
          >
            Start Mock Test
          </Button>
        </div>
      )}
      {mockTest && (
        <div className="question p-4">
          <div className="qsWrapper">
            <div className="countDown">
              {!disable && <Countdown date={endDate} />}{" "}
              {disable && (
                <p>
                  Your Marks : {correctAns.length}/{testQuestion.length}
                </p>
              )}{" "}
            </div>
            {testQuestion?.map((qs, key) => (
              <Question
                givenAnswer={givenAnswer}
                submitted={disable}
                handleAnsClick={handleAnsClick}
                question={qs}
                key={key}
              />
            ))}
            <div className="buttons">
              <Button disabled={disable} onClick={submitAllAns} className="">
                Submit Answer
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Mocktest;
