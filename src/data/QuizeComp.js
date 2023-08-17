import React from 'react'
import { useState } from 'react';
const QuizComp = () => {
    var Questionbank = [
        {
      
            Question: "1. Which of the following indicates. Level Crossing Without Gate?",
            Answers: [
                {Answer:"1a.png",isCorrect: true},
                {Answer:"1b.png",isCorrect: false},
                {Answer:"1c.png",isCorrect: false},
                {Answer:"1d.png",isCorrect: false}
            ],
    
        },
        {
           
         Question: "2.Which of the following indicates. Restaurant?",
            Answers: [
                {Answer:"2a.png",isCorrect: true},
                {Answer:"2b.png",isCorrect: false},
                {Answer:"2c.png",isCorrect: false},
                {Answer:"2d.png",isCorrect: false}
            ],
           
        },
        {
          
            Question: "3. which of the following indicates. U-TURN IS PROHIBITED",
            Answers: [
                {Answer:"3a.png",isCorrect:false},
                {Answer:"3b.png",isCorrect: true},
                {Answer:"3c.png",isCorrect: false},
                {Answer:"3d.png",isCorrect: false}
            ],
            
        },
        {
           
            Question: "4.which of the follwoing indicate. Box junction",
            Answers: [
                {Answer:"4a.png",isCorrect: false},
               {Answer:"4b.png",isCorrect: true},
               { Answer:"4c.png",isCorrect: false},
                {Answer:"4d.png",isCorrect: false}
            ],
            
        },
        {
         
            Question: "5. which of the following indicates. PEDESTRIAN PASSAGE?",
            Answers: [
                {Answer:"5a.png",isCorrect: false},
                {Answer:"5b.png",isCorrect: false},
                {Answer:"5c.png",isCorrect: true},
                {Answer:"5d.png",isCorrect: false}
            ],
            
        }
    ]

    //useState Hook
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState();

const handleAnswerResponse=(isCorrect)=>
{
    if(isCorrect)
    {
        setScore(score+5);
    }

   const nextQuestion= currentQuestion+1;
   if(nextQuestion<Questionbank.length)
   {
    setCurrentQuestion(nextQuestion);
   }
   else{
    setShowScore(true);
   }
}

const resetQuiz=()=>
{
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
}

    return (
        <div className='app'>
            {showScore ? (
                <div className='score-section'>
                    You have scored {score} out of {(Questionbank.length)*5}
                    <>
                       <button type="submit" onClick={resetQuiz}>Play Again!!</button>
                    </>
                </div>
            )
                : (
                    <>
                        <div className='question-section'>
                            <div className='question-count'>
                               <span>{currentQuestion+1}</span>/{Questionbank.length}
                            </div>

                            <div className='question-text'>
                             {Questionbank[currentQuestion].Question}
                            </div>
                        </div>

                        <div className='answer-section'>
                          {Questionbank[currentQuestion].Answers.map((answer)=>
                          (
                              <button onClick={()=>handleAnswerResponse(answer.isCorrect)}><img src={answer.Answer} alt=''/></button>
                          ))}
                        </div>
                    </>
                )
            }

        </div>
    );
}

export default QuizComp;