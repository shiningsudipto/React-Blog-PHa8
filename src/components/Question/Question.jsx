import React from 'react';

const Question = () => {
    return (
        <div>
            <div>
                <h4>What is the difference between Props and State?</h4>
                <div className="row">
                    <div className="col-md-6">
                        <h5>Props</h5>
                        <p><li>Props are used to pass data from a parent component to a child component.</li></p>
                    </div>
                    <div className="col-md-6">
                        <h5>State</h5>
                        <p><li>State is used to manage a component's internal state and its behavior.</li></p>
                    </div>
                </div>
            </div>
            <div>
                <h4>How does useState work?</h4>
                <p>useState hook is used to add state to functional components. The useState hook returns an array with two values that is a current state value, and a function to update the state value.</p>
            </div>
            <div>
                <h4>Which work useEffect do without data load?</h4>
                <ul>
                    <li>Reading data from local storage</li>
                    <li>Live filtering</li>
                    <li>useEffect used for asynchronous tasks</li>
                    <li>validating input field</li>
                    <li>To add event listeners</li>
                </ul>
            </div>
            <div>
                <h4>How does React work?</h4>
                <p>React is a JavaScript library for building user interfaces.</p>
                <p><b>Components:</b>
                    Components are reusable pieces of code that encapsulate a particular functionality or UI.
                </p>
                <p><b>Virtual DOM:</b>
                    React uses a Virtual DOM to optimize updates to the UI. The VDOM is a lightweight representation of the actual DOM. When you update the state of a component, React calculates the difference between the previous VDOM and the new VDOM, and then updates only the parts of the actual DOM that need to change.
                </p>
                <p><b>JSX:</b>
                    React uses JSX, which is a syntax extension for JavaScript that allows to write HTML-like code in JavaScript files. JSX allows to write declarative UI code that is easy to read and write.
                </p>
                <p><b>Data flow:</b>
                    React uses a unidirectional data flow. This means that data flows down from the parent component to the child components. If a child component needs to update the parent component, it does so by invoking a function that was passed down as a prop.
                </p>
                <p><b>Hooks:</b>
                    React introduced hooks to add state and lifecycle methods to functional components. Hooks allow to write components as functions, which can simplify code and make it easier to reason about.
                </p>

            </div>

        </div>
    );
};

export default Question;