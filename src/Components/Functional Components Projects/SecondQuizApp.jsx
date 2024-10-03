import React, { Component } from 'react';
import jsPDF from 'jspdf';

export class SecondQuizApp extends Component {
    constructor() {
        super();
        this.state = {
            Questions: [
                {
                    id: 1,
                    question: "What is the primary purpose of React?",
                    options: [
                        "To manage the database",
                        "To build user interfaces",
                        "To handle HTTP requests",
                        "To style web pages"
                    ],
                    correctAnswer: 1
                },
                {
                    id: 2,
                    question: "Which method in a React component is called after the component is rendered for the first time?",
                    options: [
                        "componentWillUnmount",
                        "componentDidMount",
                        "shouldComponentUpdate",
                        "componentDidUpdate"
                    ],
                    correctAnswer: 1
                },
                {
                    id: 3,
                    question: "What is a state in React?",
                    options: [
                        "A permanent storage",
                        "An external JavaScript library",
                        "An internal data store (object) of a component",
                        "A function that returns JSX"
                    ],
                    correctAnswer: 2
                },
                {
                    id: 4,
                    question: "How can you bind the 'this' keyword in React component methods?",
                    options: [
                        "Using bind() method",
                        "Using arrow functions",
                        "Using constructor",
                        "All of the above"
                    ],
                    correctAnswer: 3
                },
                {
                    id: 5,
                    question: "Which of the following is used to pass data to a component from outside in React?",
                    options: [
                        "setState",
                        "render with arguments",
                        "props",
                        "PropTypes"
                    ],
                    correctAnswer: 2
                },
                {
                    id: 6,
                    question: "What is the name of the tool used to take JSX and turn it into createElement calls?",
                    options: [
                        "ReactDOM",
                        "Babel",
                        "Webpack",
                        "JSX Compiler"
                    ],
                    correctAnswer: 1
                },
                {
                    id: 7,
                    question: "How do you create a React component using a function?",
                    options: [
                        "class MyComponent extends React.Component {}",
                        "const MyComponent = () => {}",
                        "function MyComponent() {}",
                        "Both B and C"
                    ],
                    correctAnswer: 3
                },
                {
                    id: 8,
                    question: "What hook would you use to handle lifecycle events in a functional component?",
                    options: [
                        "useEvent",
                        "useEffect",
                        "useState",
                        "useLifecycle"
                    ],
                    correctAnswer: 1
                },
                {
                    id: 9,
                    question: "Which command is used to create a new React project?",
                    options: [
                        "npx create-react-app my-app",
                        "npm install create-react-app",
                        "npx react new my-app",
                        "npm init react-app"
                    ],
                    correctAnswer: 0
                },
                {
                    id: 10,
                    question: "What is JSX?",
                    options: [
                        "A type of JavaScript",
                        "A syntax extension for JavaScript",
                        "A new version of JavaScript",
                        "A library for managing state in React"
                    ],
                    correctAnswer: 1
                }
            ],
            currentQuestionIndex: 0,
            selectedOption: null,
            correctAnswers: 0,
            wrongAnswers: 0,
            quizCompleted: false,
        };
    }

    handleOptionChange = (optionIndex) => {
        this.setState({ selectedOption: optionIndex });
        // console.log(optionIndex);
    }

    handleSubmit = () => {
        const currentQuestion = this.state.Questions[this.state.currentQuestionIndex];

        if (this.state.selectedOption === currentQuestion.correctAnswer) {
            this.setState(prevState => ({
                correctAnswers: prevState.correctAnswers + 1,
                feedbackMessage: 'Correct!',
                feedbackType: 'correct',
                showFeedback: true
            }));
        } else {
            this.setState(prevState => ({
                wrongAnswers: prevState.wrongAnswers + 1,
                feedbackMessage: 'Incorrect!',
                feedbackType: 'incorrect',
                showFeedback: true
            }));
        }

        if (this.state.currentQuestionIndex < this.state.Questions.length - 1) {
            this.setState(prevState => ({
                currentQuestionIndex: prevState.currentQuestionIndex + 1,
                selectedOption: null
            }));
        } else {
            this.setState({ quizCompleted: true });
        }
    }
    handleRestart = () => {
        this.setState({
            currentQuestionIndex: 0,
            selectedOption: null,
            correctAnswers: 0,
            wrongAnswers: 0,
            quizCompleted: false
        });
    }

    downloadScoreInPdf = () => {
        // const doc = new jsPDF();
        // doc.text("Thanks For Participating In This Quiz", 60, 30);
        // doc.text(`Correct Answere Is : ${this.state.correctAnswers}`, 75, 40);
        // doc.text(`Wrong Answere Is : ${this.state.wrongAnswers}`, 75, 50);
        // doc.save("score.pdf");

        // const capture = document.querySelector('.download')
        // html2canvas(capture).then((canvas) => {
        //     const imgData = canvas.toDataURL("img/png");
        //     const doc = new jsPDF('p', 'mm', 'a4');
        //     const componentWidth = doc.internal.pageSize.getWidth();
        //     const componentHeight = doc.internal.pageSize.getHeight();
        //     doc.addImage(imgData, 'PNG', 0, 0, componentWidth, componentHeight)
        //     doc.save("score.pdf");
        // })
        const doc = new jsPDF();
        doc.setFontSize(25);
        doc.setFont("cursive", "italic");
        doc.text("Thanks For Participating In This Quiz", 40, 30);

        doc.setFontSize(16);
        doc.setFont("helvetica", "italic");
        doc.setTextColor('orange');
        doc.text(`Correct Answers: ${this.state.correctAnswers}`, 85, 40);
        doc.text(`Wrong Answers: ${this.state.wrongAnswers}`, 85, 50);

        doc.save("score.pdf");

    }

    render() {
        const currentQuestion = this.state.Questions[this.state.currentQuestionIndex];

        return (
            this.state.quizCompleted ? (
                <div className="d-flex justify-content-center text-center">
                    <div style={{ width: '18cm', border: '2px solid white', borderRadius: '24px' }} className="bg-dark text-light">
                        <h3 className='mt-2'>Quiz Completed!</h3>
                        <hr />
                        <div id='download' className='m-3'>
                            <h3 className='mt-2'>Thanks For Participating In This Quiz App !!</h3>
                            <h4 className='m-3'>Correct Answers : {this.state.correctAnswers}</h4>
                            <h4 className='m-3'>Wrong Answers : {this.state.wrongAnswers}</h4>
                            <button style={{ width: '200px' }} className="btn btn-outline-light mx-3 mt-3" onClick={() => { this.downloadScoreInPdf() }}>Download Score</button>
                            <button style={{ width: '200px' }} className="btn btn-outline-light mx-3 mt-3" onClick={() => { this.handleRestart() }}>Restart Quiz</button>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="d-flex justify-content-center text-center">
                    <div style={{ width: '18cm', border: '2px solid white', borderRadius: '24px' }} className="bg-dark text-light mt-3">
                        <div>
                            <h3 className='mt-2'>Quiz Questions</h3>
                            <hr />
                        </div>
                        <div>
                            <h4>Question {currentQuestion.id}. {currentQuestion.question}</h4>
                            {currentQuestion.options && currentQuestion.options.length > 0 && currentQuestion.options.map((option, oIndex) => (
                                <div className="form-check m-3" key={oIndex}>
                                    <input className="form-check-input" style={{ marginLeft: '3cm' }} type="radio" name={`question-${currentQuestion.id}`} id={`question-${currentQuestion.id}-option-${oIndex}`} checked={this.state.selectedOption === oIndex} onChange={() => this.handleOptionChange(oIndex)}
                                    />
                                    <label style={{ marginRight: '3cm' }} className="form-check-label" htmlFor={`question-${currentQuestion.id}-option-${oIndex}`}>
                                        {option}
                                    </label>
                                </div>
                            ))}
                        </div>
                        <button style={{ width: '200px' }} className="btn btn-outline-light m-3" onClick={() => { this.handleSubmit() }} >
                            {/*//^ disabled={this.state.selectedOption === null} */}
                            Submit
                        </button>
                        <div className='mb-3'>
                            <h6>{(this.state.currentQuestionIndex + 1) + ' of ' + this.state.Questions.length + ' Questions'}</h6>
                            <progress style={{ width: '40%' }} value={this.state.currentQuestionIndex + 1} max={this.state.Questions.length}></progress>
                        </div>
                    </div>
                </div>
            )
        );
    }
}

export default SecondQuizApp;
