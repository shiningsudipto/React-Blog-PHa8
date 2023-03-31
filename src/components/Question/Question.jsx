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
            </div>
            <div>
                <h4>How does React work?</h4>
            </div>

        </div>
    );
};

export default Question;