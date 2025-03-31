"use client"
import React from 'react';
import { useState } from 'react';
// import './Quiz.css';

const questions = [
  {
    question: "Hola, Gabriel, ¿ _________ ? Bien, gracias. Y tú, ¿cómo estás?",
    options: ["qué tal", "cómo te va", "cómo estás", "cómo vas tú"],
    correctAnswer: "qué tal"
  },
  {
    question: "– Buenos días. ¿Cómo se llama usted? – _________ Eduardo.",
    options: ["Me llamo", "Yo soy", "Mi nombre es", "Yo me llamo"],
    correctAnswer: "Me llamo"
  },
  {
    question: "¿Cuál es la forma correcta de decir 'Eu estou cansado' em espanhol?",
    options: ["Yo soy cansado", "Yo estoy cansado", "Yo tengo cansado", "Yo soy cansada"],
    correctAnswer: "Yo estoy cansado"
  },
  {
    question: "¿Cómo se diz 'Eu gosto de você' em espanhol?",
    options: ["Yo te quiero", "Me gustas", "Yo te amo", "Me caes bien"],
    correctAnswer: "Me gustas"
  },
  {
    question: "¿Qué tiempo verbal es 'hablaría'?",
    options: ["Presente", "Futuro", "Condicional", "Imperfecto"],
    correctAnswer: "Condicional"
  },
  {
    question: "¿Cómo se conjuga el verbo 'tener' en la primera persona del singular en pretérito?",
    options: ["tengo", "tuve", "tenía", "tendré"],
  },
]

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
      <h4 className="text-center text-4xl sm:text-20xl text-treetop font-semibold ">Quiz de Espanhol</h4>
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
                className={selectedAnswer === option ? 'border-treetop rounded-full py-4 px-12 mb-6 bg-treetop text-offwhite text-sm font-bold' : 'text-sm font-bold text-treetop bg-transparent hover:bg-treetop hover:text-white border-2 border-treetop rounded-full py-4 px-12 mb-6'}
              >
                {option}
              </button>
            ))}
          </div>
          <div className="navigation-section text-2xl font-bold mb-3">
            <button onClick={handleNextQuestion}>
              {currentQuestion + 1 < questions.length ? 'Próxima Pergunta >' : 'Finalizar Quiz'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;