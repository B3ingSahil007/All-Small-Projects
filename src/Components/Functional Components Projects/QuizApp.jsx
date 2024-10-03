import React, { useRef, useState } from 'react'
import data from './Data/QuizData'

const QuizApp = () => {
    let [index, setIndex] = useState(0)
    let [question, setQuestion] = useState(data[index])
    let [lock, setLock] = useState(false)
    let [score, setScore] = useState(0)
    let [result, setResult] = useState(false)

    let Option1 = useRef(null)
    let Option2 = useRef(null)
    let Option3 = useRef(null)
    let Option4 = useRef(null)

    let option_array = [Option1, Option2, Option3, Option4];

    const checkAnswer = (e, ans) => {
        if (lock === false) {
            if (question.correctAnswer === ans) {
                e.target.classList.add("correct")
                setLock(true)
                setScore(prev => prev + 1)
            } else {
                e.target.classList.add("incorrect")
                setLock(true)
                option_array[question.correctAnswer - 1].current.classList.add("correct")
            }
        }
    }
    const nextQuestion = () => {
        if (lock === true) {
            if (index === data.length - 1) {
                setResult(true)
                return 0
            }
            setIndex(++index)
            setQuestion(data[index])
            setLock(false)
            option_array.map((option) => {
                option.current.classList.remove("incorrect")
                option.current.classList.remove("correct")
                return null
            })
        }
    }
    const resetQuiz = () => {
        setIndex(0)
        setQuestion(data[0])
        setScore(0)
        setLock(false)
        setResult(false)
    }
    return (
        <>
            <div style={{ fontFamily: 'Courier New, Courier, monospace' }} className="text-center">
                <h4>Quiz App.jsx</h4>
                <div style={{ width: '700px', margin: 'auto', marginTop: '40px', gap: '10px', borderRadius: '20px', padding: '20px 50px', border: '2px solid black' }} className="container bg-light text-dark d-flex flex-column">
                    <h4>Quiz Game</h4>
                    <hr style={{ height: '2px', border: 'none', background: '#000', margin: '0' }} />
                    {result ? <>
                        <h3>Congratulations,<br />Your score is : {score} out of {data.length}</h3>
                        <button onClick={() => { resetQuiz() }} style={{ margin: 'auto', width: '250px' }} className="btn btn-outline-dark">Reset Quiz</button>
                    </> : <>
                        <h3>Question {question.id}. {question.question}</h3>
                        <ul style={{ padding: '0' }}>
                            <li ref={Option1} onClick={(e) => { checkAnswer(e, 1) }} className='d-flex align-items-center mb-2' style={{ height: '40px', paddingLeft: '15px', border: '2px solid #686868', borderRadius: '10px', cursor: 'pointer' }}>Option A : {question.options[0]}</li>
                            <li ref={Option2} onClick={(e) => { checkAnswer(e, 2) }} className='d-flex align-items-center mb-2' style={{ height: '40px', paddingLeft: '15px', border: '2px solid #686868', borderRadius: '10px', cursor: 'pointer' }}>Option B : {question.options[1]}</li>
                            <li ref={Option3} onClick={(e) => { checkAnswer(e, 3) }} className='d-flex align-items-center mb-2' style={{ height: '40px', paddingLeft: '15px', border: '2px solid #686868', borderRadius: '10px', cursor: 'pointer' }}>Option C : {question.options[2]}</li>
                            <li ref={Option4} onClick={(e) => { checkAnswer(e, 4) }} className='d-flex align-items-center mb-2' style={{ height: '40px', paddingLeft: '15px', border: '2px solid #686868', borderRadius: '10px', cursor: 'pointer' }}>Option D : {question.options[3]}</li>
                        </ul>
                        <button onClick={() => { nextQuestion() }} style={{ margin: 'auto', width: '250px' }} className="btn btn-outline-dark">Next Question</button>
                        <div className="index mt-3">
                            <h6>{question.id} of {data.length} Questions.</h6>
                        </div>
                    </>}
                </div>
            </div>
            <style>{`
                .correct {
    background: lightgreen;
}

.incorrect {
    background: #FF4A4A;
}
            `}</style>
        </>
    )
}

export default QuizApp
