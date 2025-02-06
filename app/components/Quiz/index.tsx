"use client"
import React from 'react';
import { useState } from 'react';
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
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [showScore, setShowScore] = useState<boolean>(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const handleAnswerClick = (option: string) => {
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
    <div className="text-center  bg-lightgrey py-24">
      <h1 className="text-center text-4xl sm:text-20xl text-blue font-semibold ">Quiz de Espanhol</h1>
      {showScore ? (
        <div className="score-section">
          <h2 className='text-sm font-medium text-darkgrey mb-3 mt-6'>Você acertou {score} de {questions.length} perguntas!</h2>
          <button className='text-2xl font-bold mb-3' onClick={restartQuiz}>Reiniciar Quiz</button>
        </div>
      ) : (
        <div className="quiz-section  max-w-7xl mx-auto">
          <div className="question-section">
            <h2 className='text-lg font-normal text-black group-hover:text-offwhite mb-3 mt-6'>{questions[currentQuestion].question}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-16 mx-5 gap-12">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerClick(option)}
                className={selectedAnswer === option ? 'border-blue rounded-full py-4 px-12 mb-6 bg-blue text-offwhite text-sm font-bold' : 'text-sm font-bold text-blue bg-transparent hover:bg-blue hover:text-white border-2 border-blue rounded-full py-4 px-12 mb-6'}
              >
                {option}
              </button>
            ))}
          </div>
          <div className="navigation-section text-2xl font-bold mb-3">
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