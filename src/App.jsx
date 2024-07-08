import { useState } from "react";
import "./App.css";

function App() {
  // StateVariable defined as questions options and correct
  const [question, setQuestion] = useState([
    {
      mainQuestion: "Who Was the first PM of India?",
      options: [
        "JawarLal Nehru",
        "Narendra Modi",
        "MK Gandhi",
        "Indira Gandhi",
      ],
      correct: 0,
    },
    {
      mainQuestion: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Rome"],
      correct: 1,
    },
    {
      mainQuestion: "Which planet is known as the Red Planet?",
      options: ["Earth", "Mars", "Jupiter", "Saturn"],
      correct: 1,
    },
    {
      mainQuestion: "Who wrote 'Romeo and Juliet'?",
      options: [
        "William Shakespeare",
        "Charles Dickens",
        "Mark Twain",
        "Jane Austen",
      ],
      correct: 0,
    },
    {
      mainQuestion: "What is the largest mammal in the world?",
      options: ["Elephant", "Blue Whale", "Giraffe", "Polar Bear"],
      correct: 1,
    },
    {
      mainQuestion: "Which element has the chemical symbol 'O'?",
      options: ["Oxygen", "Gold", "Osmium", "Oganesson"],
      correct: 0,
    },
    {
      mainQuestion: "What is the tallest mountain in the world?",
      options: ["K2", "Mount Everest", "Kangchenjunga", "Lhotse"],
      correct: 1,
    },
    {
      mainQuestion: "Who painted the Mona Lisa?",
      options: [
        "Leonardo da Vinci",
        "Vincent van Gogh",
        "Pablo Picasso",
        "Claude Monet",
      ],
      correct: 0,
    },
    {
      mainQuestion: "What is the smallest country in the world by land area?",
      options: ["Monaco", "Vatican City", "Nauru", "San Marino"],
      correct: 1,
    },
    {
      mainQuestion: "In which year did the Titanic sink?",
      options: ["1905", "1912", "1920", "1930"],
      correct: 1,
    },
    {
      mainQuestion: "Which language is primarily spoken in Brazil?",
      options: ["Spanish", "Portuguese", "French", "English"],
      correct: 1,
    },
  ]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [mainButtonContent, SetMainButtonContent] = useState({
    content: "Start",
    flag: true,
  });

  // main button content updater
  function MainButtonContentUpdate() {
    {
      if (mainButtonContent.flag) {
        SetMainButtonContent({
          content: "Reset",
          flag: false,
        });
      } else {
        if (currentQuestion == 0) {
          SetMainButtonContent({
            content: "Start",
            flag: true,
          });
        }
      }
    }
  }

  // Start button handeller
  function StartButtonHandeller() {
    setCurrentQuestion(0);
    MainButtonContentUpdate();
  }

  // Next Button handeler
  function NextButtonHandeller() {
    console.log()
    if (currentQuestion==question.length-1) {
      alert("No more Questions") 
    }
    else{
      setCurrentQuestion(currentQuestion + 1);
    }
    MainButtonContentUpdate();
  }

  //PreviousButton handeler
  function PreviousButtonHandeller() {
    if (currentQuestion==0) {
      alert("No previous Questions")
    }
    else{
      setCurrentQuestion(currentQuestion - 1);
    }
    MainButtonContentUpdate();
  }

  // Answer checking 
  function CheckAnswer(index){
    if (question[currentQuestion].correct==index) {
      alert("Correct") 
    }
    else{
      alert("Incorrect")
    }
  }

  return (
    <div className="QuizArea">
      <GenerateQuiz
        mainQuestion={question[currentQuestion].mainQuestion}
        options={question[currentQuestion].options}
      ></GenerateQuiz>
      <div className="buttonControls">
        <button className="statusButton" onClick={PreviousButtonHandeller}>
          Previous
        </button>
        <button className="statusButton" onClick={StartButtonHandeller}>
          {mainButtonContent.content}
        </button>
        <button className="statusButton" onClick={NextButtonHandeller}>
          Next
        </button>
      </div>
    </div>
  );

  function GenerateQuiz(props) {
    return (
      <div>
        <h1 className="questionElement">{props.mainQuestion}</h1>
        <div className="optionBox">
          <ul className="optionList">
            {props.options.map((option, index) => {
              console.log(index)
              return (
                <li className="optionElements" key={index} onClick={() => {
                  CheckAnswer(index)
                }}>
                  {option}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
