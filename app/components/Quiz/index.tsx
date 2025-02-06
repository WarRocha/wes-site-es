"use client"
import React from 'react';
import {  useState } from 'react';
// import './Quiz.css';

const questions = [
  {
    question: "Como se diz 'Olá' em espanhol?",
    options: ["Hola", "Adiós", "Gracias", "Por favor"],
    correctAnswer: "Hola"
  },
  {
    question: "Qual é a tradução de 'Obrigado' em espanhol?",
    options: ["Por favor", "Gracias", "De nada", "Buenos días"],
    correctAnswer: "Gracias"
  },
  {
    question: "Como se diz 'Bom dia' em espanhol?",
    options: ["Buenas noches", "Buenos días", "Buenas tardes", "Hola"],
    correctAnswer: "Buenos días"
  },
  {
    question: "Qual é a tradução de 'Adeus' em espanhol?",
    options: ["Hola", "Adiós", "Gracias", "Por favor"],
    correctAnswer: "Adiós"
  }
];

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleAnswerClick = (option) => {
    setSelectedAnswer(option);
    if (option === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      setShowScore(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedAnswer(null);
  };

  return (
    <div className="App">
      <h1>Quiz de Nível de Espanhol</h1>
      {showScore ? (
        <div className="score-section">
          <h2>Você acertou {score} de {questions.length} perguntas!</h2>
          <button onClick={restartQuiz}>Reiniciar Quiz</button>
        </div>
      ) : (
        <div className="quiz-section">
          <div className="question-section">
            <h2>{questions[currentQuestion].question}</h2>
          </div>
          <div className="options-section">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerClick(option)}
                className={selectedAnswer === option ? 'selected' : ''}
              >
                {option}
              </button>
            ))}
          </div>
          <div className="navigation-section">
            <button onClick={handleNextQuestion}>
              {currentQuestion + 1 < questions.length ? 'Próxima Pergunta' : 'Finalizar Quiz'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;