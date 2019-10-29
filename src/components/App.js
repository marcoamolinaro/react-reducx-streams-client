import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';


const PageOne = () => {
    return (
        <div>
            PageOne
            <Link to="/pagetwo">Navigate to PageTwo</Link>
        </div>
    );
};

const PageTwo = () => {
    return (
        <div>
            PageTwo
            <button>Click Me</button>
            <Link to="/">Navigate to PageOne</Link>
        </div>
    );
};

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <div>
                    <Route path="/" exact component={PageOne} />
                    <Route path="/pagetwo" component={PageTwo} />
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;