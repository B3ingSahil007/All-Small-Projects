let data
export default data = [
    {
        id: 1,
        question: "What is the primary purpose of React?",
        options: [
            "To manage the database",
            "To build user interfaces",
            "To handle HTTP requests",
            "To style web pages"
        ],
        correctAnswer: 2
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
        correctAnswer: 2
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
        correctAnswer: 3
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
        correctAnswer: 4
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
        correctAnswer: 3
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
        correctAnswer: 2
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
        correctAnswer: 4
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
        correctAnswer: 2
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
        correctAnswer: 1
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
        correctAnswer: 2
    },
    {
        id: 11,
        question: "What does the render method in React do?",
        options: [
            "Renders HTML to the DOM",
            "Creates a new component",
            "Updates the state",
            "Binds event handlers"
        ],
        correctAnswer: 1
    },
    {
        id: 12,
        question: "Which of the following is a valid React hook?",
        options: [
            "useFunction",
            "useArray",
            "useState",
            "useStyle"
        ],
        correctAnswer: 3
    },
    {
        id: 13,
        question: "What does the useState hook return?",
        options: [
            "An array with the current state and a function to update it",
            "A single state value",
            "A function to update the state",
            "A new component"
        ],
        correctAnswer: 1
    },
    {
        id: 14,
        question: "How do you handle side effects in a React functional component?",
        options: [
            "Using componentDidMount",
            "Using useEffect",
            "Using useSideEffect",
            "Using componentDidUpdate"
        ],
        correctAnswer: 2
    },
    {
        id: 15,
        question: "What is the virtual DOM?",
        options: [
            "A real DOM",
            "A copy of the real DOM",
            "A lightweight representation of the real DOM",
            "None of the above"
        ],
        correctAnswer: 3
    },
    {
        id: 16,
        question: "Which lifecycle method is invoked just before a component is removed from the DOM?",
        options: [
            "componentDidMount",
            "componentWillUnmount",
            "shouldComponentUpdate",
            "componentDidUpdate"
        ],
        correctAnswer: 2
    },
    {
        id: 17,
        question: "How can you optimize performance in a React application?",
        options: [
            "By using pure components",
            "By using shouldComponentUpdate",
            "By using React.memo",
            "All of the above"
        ],
        correctAnswer: 4
    },
    {
        id: 18,
        question: "What is a higher-order component (HOC) in React?",
        options: [
            "A component that returns another component",
            "A component that manages state",
            "A component that handles events",
            "A component that is created using React.createElement"
        ],
        correctAnswer: 1
    },
    {
        id: 19,
        question: "Which method is used to update the state of a component?",
        options: [
            "setState",
            "updateState",
            "changeState",
            "modifyState"
        ],
        correctAnswer: 1
    },
    {
        id: 20,
        question: "What is the purpose of the React.Fragment component?",
        options: [
            "To add CSS styles",
            "To wrap multiple elements without adding extra nodes to the DOM",
            "To handle events",
            "To manage state"
        ],
        correctAnswer: 2
    },
    {
        id: 21,
        question: "How do you pass a parameter to an event handler in React?",
        options: [
            "Using an arrow function",
            "Using the bind() method",
            "Using an inline function",
            "All of the above"
        ],
        correctAnswer: 4
    },
    {
        id: 22,
        question: "What does React.StrictMode do?",
        options: [
            "Checks for potential problems in the application",
            "Optimizes the application for production",
            "Enables the use of hooks",
            "Enables server-side rendering"
        ],
        correctAnswer: 1
    },
    {
        id: 23,
        question: "How do you handle forms in React?",
        options: [
            "Using controlled components",
            "Using uncontrolled components",
            "Using refs",
            "All of the above"
        ],
        correctAnswer: 4
    },
    {
        id: 24,
        question: "What is the purpose of the useReducer hook?",
        options: [
            "To handle side effects",
            "To manage state logic that involves multiple sub-values",
            "To create a context",
            "To memoize a function"
        ],
        correctAnswer: 2
    },
    {
        id: 25,
        question: "What is the purpose of the useContext hook?",
        options: [
            "To create a context",
            "To access the value of a context",
            "To provide a context value",
            "To memoize a value"
        ],
        correctAnswer: 2
    },
    {
        id: 26,
        question: "What is the purpose of the React.PureComponent?",
        options: [
            "To create a functional component",
            "To create a class component",
            "To create a component that only re-renders when props or state change",
            "To create a context provider"
        ],
        correctAnswer: 3
    },
    {
        id: 27,
        question: "How do you create a context in React?",
        options: [
            "Using React.createContext",
            "Using React.createComponent",
            "Using React.createElement",
            "Using React.createRef"
        ],
        correctAnswer: 1
    },
    {
        id: 28,
        question: "What is the purpose of the useRef hook?",
        options: [
            "To create a reference to a DOM element",
            "To manage state",
            "To handle side effects",
            "To create a context"
        ],
        correctAnswer: 1
    },
    {
        id: 29,
        question: "How do you conditionally render a component in React?",
        options: [
            "Using an if statement",
            "Using a ternary operator",
            "Using logical && operator",
            "All of the above"
        ],
        correctAnswer: 4
    },
    {
        id: 30,
        question: "What is the useCallback hook used for?",
        options: [
            "To create a memoized value",
            "To handle side effects",
            "To memoize a function",
            "To manage state"
        ],
        correctAnswer: 3
    },
    {
        id: 31,
        question: "How do you lift state up in React?",
        options: [
            "By passing a function as a prop",
            "By passing state as a prop",
            "By using Redux",
            "By using Context API"
        ],
        correctAnswer: 2
    },
    {
        id: 32,
        question: "Which hook is used to access lifecycle methods in a functional component?",
        options: [
            "useState",
            "useEffect",
            "useContext",
            "useReducer"
        ],
        correctAnswer: 2
    },
    {
        id: 33,
        question: "What is the purpose of the key prop in React?",
        options: [
            "To identify each element in a list",
            "To set the initial state",
            "To handle events",
            "To create a context"
        ],
        correctAnswer: 1
    },
    {
        id: 34,
        question: "What is the difference between state and props in React?",
        options: [
            "State is managed within the component, while props are passed from outside",
            "Props are managed within the component, while state is passed from outside",
            "State is immutable, while props are mutable",
            "There is no difference"
        ],
        correctAnswer: 1
    },
    {
        id: 35,
        question: "What is the purpose of the useMemo hook?",
        options: [
            "To create a memoized value",
            "To handle side effects",
            "To manage state",
            "To create a context"
        ],
        correctAnswer: 1
    },
    {
        id: 36,
        question: "How do you handle errors in React components?",
        options: [
            "Using try-catch blocks",
            "Using error boundaries",
            "Using the useError hook",
            "Using the useEffect hook"
        ],
        correctAnswer: 2
    },
    {
        id: 37,
        question: "Which of the following is a feature of React?",
        options: [
            "One-way data binding",
            "Virtual DOM",
            "Reusable components",
            "All of the above"
        ],
        correctAnswer: 4
    },
    {
        id: 38,
        question: "How do you force a React component to re-render?",
        options: [
            "Using setState",
            "Using forceUpdate",
            "Using reRender",
            "Using render"
        ],
        correctAnswer: 2
    },
    {
        id: 39,
        question: "What is the purpose of the ReactDOM library?",
        options: [
            "To manage the state of components",
            "To create new components",
            "To handle the rendering of React components in the DOM",
            "To create a context"
        ],
        correctAnswer: 3
    },
    {
        id: 40,
        question: "How do you create a reference to a DOM element in a React class component?",
        options: [
            "Using createElement",
            "Using createRef",
            "Using useRef",
            "Using useEffect"
        ],
        correctAnswer: 2
    },
    {
        id: 41,
        question: "What is the difference between component and pure component in React?",
        options: [
            "Pure component does not implement shouldComponentUpdate",
            "Component does not implement shouldComponentUpdate",
            "Pure component implements shouldComponentUpdate with shallow prop and state comparison",
            "There is no difference"
        ],
        correctAnswer: 3
    },
    {
        id: 42,
        question: "How do you handle events in React?",
        options: [
            "Using inline event handlers",
            "Using arrow functions",
            "Using bind() method",
            "All of the above"
        ],
        correctAnswer: 4
    },
    {
        id: 43,
        question: "What is the purpose of the useLayoutEffect hook?",
        options: [
            "To handle side effects after the DOM has been updated",
            "To handle side effects before the DOM has been painted",
            "To manage state",
            "To create a context"
        ],
        correctAnswer: 2
    },
    {
        id: 44,
        question: "Which of the following is a valid way to import a component in React?",
        options: [
            "import { Component } from 'react'",
            "import Component from 'react'",
            "import { Component } from 'Component'",
            "import * as Component from 'react'"
        ],
        correctAnswer: 1
    },
    {
        id: 45,
        question: "What is the purpose of the React.Children API?",
        options: [
            "To manage state",
            "To create a context",
            "To handle side effects",
            "To manipulate and traverse React component children"
        ],
        correctAnswer: 4
    },
    {
        id: 46,
        question: "How do you handle conditional rendering in React?",
        options: [
            "Using if statements",
            "Using ternary operators",
            "Using logical && operator",
            "All of the above"
        ],
        correctAnswer: 4
    },
    {
        id: 47,
        question: "What is the purpose of the useImperativeHandle hook?",
        options: [
            "To manage state",
            "To handle side effects",
            "To create a context",
            "To customize the instance value that is exposed when using refs"
        ],
        correctAnswer: 4
    },
    {
        id: 48,
        question: "How do you share state between React components?",
        options: [
            "Using props",
            "Using context",
            "Using Redux",
            "All of the above"
        ],
        correctAnswer: 4
    },
    {
        id: 49,
        question: "What is the purpose of the useDebugValue hook?",
        options: [
            "To manage state",
            "To handle side effects",
            "To display a label for custom hooks in React DevTools",
            "To create a context"
        ],
        correctAnswer: 3
    },
    {
        id: 50,
        question: "Which of the following is a benefit of using React?",
        options: [
            "Fast rendering using virtual DOM",
            "Reusable components",
            "One-way data binding",
            "All of the above"
        ],
        correctAnswer: 4
    },
    {
        id: 1,
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        correctAnswer: 3
    },
    {
        id: 2,
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        correctAnswer: 2
    },
    {
        id: 3,
        question: "What is the largest mammal in the world?",
        options: ["Elephant", "Blue Whale", "Great White Shark", "Giraffe"],
        correctAnswer: 2
    },
    {
        id: 4,
        question: "Who wrote 'Romeo and Juliet'?",
        options: ["William Shakespeare", "Mark Twain", "Charles Dickens", "Jane Austen"],
        correctAnswer: 1
    },
    {
        id: 5,
        question: "What is the chemical symbol for water?",
        options: ["H2O", "O2", "CO2", "NaCl"],
        correctAnswer: 1
    },
    {
        id: 6,
        question: "What is the tallest mountain in the world?",
        options: ["Mount Kilimanjaro", "Mount Everest", "K2", "Mount Fuji"],
        correctAnswer: 2
    },
    {
        id: 7,
        question: "Which ocean is the largest?",
        options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        correctAnswer: 4
    },
    {
        id: 8,
        question: "Who is known as the 'Father of Computers'?",
        options: ["Charles Babbage", "Alan Turing", "Isaac Newton", "Albert Einstein"],
        correctAnswer: 1
    },
    {
        id: 9,
        question: "What is the hardest natural substance on Earth?",
        options: ["Gold", "Iron", "Diamond", "Platinum"],
        correctAnswer: 3
    },
    {
        id: 10,
        question: "In which year did the Titanic sink?",
        options: ["1912", "1920", "1898", "1905"],
        correctAnswer: 1
    },
    {
        id: 11,
        question: "What is the smallest prime number?",
        options: ["0", "1", "2", "3"],
        correctAnswer: 3
    },
    {
        id: 12,
        question: "Which element has the chemical symbol 'O'?",
        options: ["Gold", "Oxygen", "Osmium", "Oganesson"],
        correctAnswer: 2
    },
    {
        id: 13,
        question: "Who painted the Mona Lisa?",
        options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
        correctAnswer: 3
    },
    {
        id: 14,
        question: "What is the most widely spoken language in the world?",
        options: ["English", "Mandarin Chinese", "Spanish", "Hindi"],
        correctAnswer: 2
    },
    {
        id: 15,
        question: "What is the longest river in the world?",
        options: ["Amazon River", "Nile River", "Yangtze River", "Mississippi River"],
        correctAnswer: 2
    },
    {
        id: 16,
        question: "What is the main ingredient in guacamole?",
        options: ["Tomato", "Onion", "Avocado", "Lemon"],
        correctAnswer: 3
    },
    {
        id: 17,
        question: "Which country is known as the Land of the Rising Sun?",
        options: ["China", "Japan", "South Korea", "Thailand"],
        correctAnswer: 2
    },
    {
        id: 18,
        question: "What is the square root of 64?",
        options: ["6", "7", "8", "9"],
        correctAnswer: 3
    },
    {
        id: 19,
        question: "Who discovered penicillin?",
        options: ["Marie Curie", "Alexander Fleming", "Louis Pasteur", "Thomas Edison"],
        correctAnswer: 2
    },
    {
        id: 20,
        question: "What is the currency of Japan?",
        options: ["Yen", "Won", "Dollar", "Euro"],
        correctAnswer: 1
    },
    {
        id: 21,
        question: "Who wrote 'To Kill a Mockingbird'?",
        options: ["Harper Lee", "F. Scott Fitzgerald", "Ernest Hemingway", "John Steinbeck"],
        correctAnswer: 1
    },
    {
        id: 22,
        question: "What is the largest desert in the world?",
        options: ["Sahara Desert", "Arabian Desert", "Gobi Desert", "Antarctic Desert"],
        correctAnswer: 4
    },
    {
        id: 23,
        question: "What is the main ingredient in traditional paella?",
        options: ["Pasta", "Rice", "Potatoes", "Bread"],
        correctAnswer: 2
    },
    {
        id: 24,
        question: "Who was the first man to walk on the moon?",
        options: ["Neil Armstrong", "Buzz Aldrin", "Yuri Gagarin", "Alan Shepard"],
        correctAnswer: 1
    },
    {
        id: 25,
        question: "What is the chemical symbol for gold?",
        options: ["Au", "Ag", "Pt", "Pb"],
        correctAnswer: 1
    },
    {
        id: 26,
        question: "Who was the first President of the United States?",
        options: ["Thomas Jefferson", "John Adams", "George Washington", "James Madison"],
        correctAnswer: 3
    },
    {
        id: 27,
        question: "What is the largest island in the world?",
        options: ["Greenland", "New Guinea", "Borneo", "Madagascar"],
        correctAnswer: 1
    },
    {
        id: 28,
        question: "Which planet has the most moons?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        correctAnswer: 3
    },
    {
        id: 29,
        question: "What is the currency of the United Kingdom?",
        options: ["Dollar", "Euro", "Pound Sterling", "Yen"],
        correctAnswer: 3
    },
    {
        id: 30,
        question: "Who wrote the play 'Hamlet'?",
        options: ["William Shakespeare", "George Bernard Shaw", "Oscar Wilde", "Tennessee Williams"],
        correctAnswer: 1
    },
    {
        id: 31,
        question: "What is the largest organ in the human body?",
        options: ["Heart", "Liver", "Skin", "Lungs"],
        correctAnswer: 3
    },
    {
        id: 32,
        question: "What is the capital of Canada?",
        options: ["Toronto", "Vancouver", "Ottawa", "Montreal"],
        correctAnswer: 3
    },
    {
        id: 33,
        question: "What is the smallest country in the world by area?",
        options: ["Monaco", "Nauru", "Vatican City", "San Marino"],
        correctAnswer: 3
    },
    {
        id: 34,
        question: "Who developed the theory of general relativity?",
        options: ["Isaac Newton", "Galileo Galilei", "Albert Einstein", "Niels Bohr"],
        correctAnswer: 3
    },
    {
        id: 35,
        question: "Which element has the atomic number 1?",
        options: ["Helium", "Oxygen", "Hydrogen", "Carbon"],
        correctAnswer: 3
    },
    {
        id: 36,
        question: "What is the capital of Australia?",
        options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
        correctAnswer: 3
    },
    {
        id: 37,
        question: "Which planet is closest to the sun?",
        options: ["Venus", "Mars", "Earth", "Mercury"],
        correctAnswer: 4
    },
    {
        id: 38,
        question: "Who invented the telephone?",
        options: ["Thomas Edison", "Alexander Graham Bell", "Nikola Tesla", "Guglielmo Marconi"],
        correctAnswer: 2
    },
    {
        id: 39,
        question: "Which country won the FIFA World Cup in 2018?",
        options: ["Germany", "Argentina", "Brazil", "France"],
        correctAnswer: 4
    },
    {
        id: 40,
        question: "What is the largest bone in the human body?",
        options: ["Femur", "Tibia", "Fibula", "Humerus"],
        correctAnswer: 1
    },
    {
        id: 41,
        question: "Who wrote 'Pride and Prejudice'?",
        options: ["Jane Austen", "Charlotte Brontë", "Emily Brontë", "Mary Shelley"],
        correctAnswer: 1
    },
    {
        id: 42,
        question: "What is the largest planet in our solar system?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        correctAnswer: 3
    },
    {
        id: 43,
        question: "What is the chemical symbol for sodium?",
        options: ["Na", "S", "K", "Ca"],
        correctAnswer: 1
    },
    {
        id: 44,
        question: "Which continent is the Sahara Desert located on?",
        options: ["Asia", "Africa", "Australia", "South America"],
        correctAnswer: 2
    },
    {
        id: 45,
        question: "What is the speed of light?",
        options: ["300,000 km/s", "150,000 km/s", "75,000 km/s", "600,000 km/s"],
        correctAnswer: 1
    },
    {
        id: 46,
        question: "Who was the first woman to win a Nobel Prize?",
        options: ["Marie Curie", "Rosalind Franklin", "Dorothy Hodgkin", "Ada Lovelace"],
        correctAnswer: 1
    },
    {
        id: 47,
        question: "What is the tallest building in the world as of 2024?",
        options: ["Shanghai Tower", "Abraj Al-Bait Clock Tower", "One World Trade Center", "Burj Khalifa"],
        correctAnswer: 4
    },
    {
        id: 48,
        question: "Which country is the largest producer of coffee in the world?",
        options: ["Colombia", "Vietnam", "Ethiopia", "Brazil"],
        correctAnswer: 4
    },
    {
        id: 49,
        question: "What is the capital of Italy?",
        options: ["Venice", "Florence", "Milan", "Rome"],
        correctAnswer: 4
    },
    {
        id: 50,
        question: "Which element is a diamond made of?",
        options: ["Carbon", "Hydrogen", "Nitrogen", "Oxygen"],
        correctAnswer: 1
    }
];