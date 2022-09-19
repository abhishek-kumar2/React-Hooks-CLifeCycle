import React from 'react';
import './App.css';
import ClassBasedComponent from "./components/classBasedComponent";
import FunctionalComponent from "./components/functionalComponent";
import MultipleMountCall from "./components/multipleMountCall";
import UseStateEx from "./components/UseStateEx";
import UseReducerEx from "./components/UseReducerEx";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>React Hooks practices and Learning</h1>
                <p>
                    This is Abhishek Kumar. Step by step learning.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
            <ClassBasedComponent/>
            <FunctionalComponent/>
            <hr/>
            <MultipleMountCall/>
            <hr/>
            <UseStateEx/>
            <hr/>
            <UseReducerEx/>
        </div>
    );
}

export default App;