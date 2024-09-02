import "./App.css";
import { useEffect, useMemo, useState } from "react";
import Start from "./components/Start";
import Timer from "./components/Timer";
import Trivia from "./components/Trivia";

function App() {
  const [username, setUsername] = useState(null);
  const [timeOut, setTimeOut] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [earned, setEarned] = useState("$ 0");

  const data = [
    {
      id: 1,
      question: "Which name is given by my grandmother (Nani) ?",
      answers: [
        {
          text: "Rabban",
          correct: false,
        },
        {
          text: "Rehan",
          correct: true,
        },
        {
          text: "Javed",
          correct: false,
        },
        {
          text: "golu",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "what is my actual birth year ?",
      answers: [
        {
          text: "1999",
          correct: true,
        },
        {
          text: "2000",
          correct: false,
        },
        {
          text: "2001",
          correct: false,
        },
        {
          text: "2002",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "what is my favourite color?",
      answers: [
        {
          text: "pink",
          correct: false,
        },
        {
          text: "Blue",
          correct: false,
        },
        {
          text: "Green",
          correct: false,
        },
        {
          text: "Black",
          correct: true,
        },
      ],
    },
    {
      id: 4,
      question: "what I do in my free Time?",
      answers: [
        {
          text: "reels",
          correct: false,
        },
        {
          text: "coding",
          correct: true,
        },
        {
          text: "searching job",
          correct: false,
        },
        {
          text: "watching serial",
          correct: false,
        },
        
      ],
    },
    {
      id: 5,
      question: "Tell me About My qualifications?",
      answers: [
        {
          text: "MBA",
          correct: false,
        },
        {
          text: "MSC",
          correct: false,
        },
        {
          text: "MCA",
          correct: true,
        },
        {
          text: "PHD",
          correct: false,
        },
        
      ],
    },
    {
      id: 6,
      question: "Who is my first favourite actress",
      answers: [
        {
          text: "Alia Bhat",
          correct: false,
        },
        {
          text: "Sonakshi Sinha",
          correct: true,
        },
        {
          text: "Sonali Bendre",
          correct: false,
        },
        {
          text: "Ananya Panday",
          correct: false,
        },
        
      ],
    },
    {
      id: 7,
      question: "What I like the most?",
      answers: [
        {
          text: "painting",
          correct: false,
        },
        {
          text: "cooking",
          correct: false,
        },
        {
          text: "flirting",
          correct: false,
        },
        {
          text: "Hacking",
          correct: true,
        },
      ],
    },
    {
      id: 8,
      question: "What is my caste?",
      answers: [
        {
          text: "sheikh",
          correct: true,
        },
        {
          text: "sayyed",
          correct: false,
        },
        {
          text: "mughal",
          correct: false,
        },
        {
          text: "Pathan",
          correct: false,
        },
      ],
    },
    {
      id: 9,
      question: "Which is my most favourite dish ?",
      answers: [
        
        {
          text: "nalli - nahari",
          correct: false,
        },
        {
          text: "chikken tikka",
          correct: true,
        },
        {
          text: "chicken chengezhi",
          correct: false,
        },
        {
          text: "Biryani",
          correct: false,
        },
      ],
    },
    {
      id: 10,
      question: "What is my mother occupation?",
      answers: [
        {
          text: "cook",
          correct: false,
        },
        {
          text: "Teacher",
          correct: false,
        },
        {
          text: "house-wife",
          correct: false,
        },
        {
          text: "All rounder",
          correct: true,
        },
      ],
    },
  ];

  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "$ 500" },
        { id: 2, amount: "$ 1.000" },
        { id: 3, amount: "$ 2.000" },
        { id: 4, amount: "$ 4.000" },
        { id: 5, amount: "$ 8.000" },
        { id: 6, amount: "$ 16.000" },
        { id: 7, amount: "$ 32.000" },
        { id: 8, amount: "$ 64.000" },
        { id: 9, amount: "$ 125.000" },
        { id: 10, amount: "$ 250.000" },
      ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [questionNumber, moneyPyramid]);

  return (
    <div className="app">
      {!username ? (
        <Start setUsername={setUsername} />
      ) : (
        <>
          <div className="main">
            {timeOut ? (
              <h1 className="endText">You earned: {earned}</h1>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer
                      setTimeOut={setTimeOut}
                      questionNumber={questionNumber}
                    />
                  </div>
                </div>
                <div className="bottom">
                  <Trivia
                    data={data}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    setTimeOut={setTimeOut}
                  />
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map((m) => (
                <li
                  className={
                    questionNumber === m.id
                      ? "moneyListItem active"
                      : "moneyListItem"
                  }
                >
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
