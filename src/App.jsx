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
        correct: 1,
      },
      {
        mainQuestion: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        correct: 2,
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
      }  
  ]);
  const [currentQuestion,setCurrentQuestion]=useState(0)
  const [mainButtonContent,SetMainButtonContent]=useState({
    content:"Start",
    flag:true
  })

  // Start button handeller 
  function StartButtonHandeller(){
    setCurrentQuestion(0)
    {if (mainButtonContent.flag) {
      SetMainButtonContent({
        content:"Reset",
        flag: false
      })
    } else {
      SetMainButtonContent({
        content:"Start",
        flag: true
      }) 
    }}
  }

  return <div>
    <button onClick={StartButtonHandeller}>{mainButtonContent.content}</button>
    <GenerateQuiz mainQuestion={question[currentQuestion].mainQuestion} options={question[currentQuestion].options} ></GenerateQuiz>
  </div>;

function GenerateQuiz(props){
  return <div>
      <h1>{props.mainQuestion}</h1>
      <ul>
      {props.options.map((option,index) => {
        return <li key={index}>{option}</li>
        })}
      </ul>   
  </div>
}
}

export default App;




