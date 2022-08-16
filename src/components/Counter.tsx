import React, { useState } from "react";

const Counter = () => {
    const [counter, setCounter] = useState(0);

    const incrementCounter: any = () => {
        setCounter((prevCounter) => prevCounter + 1);
    };

    const decrementCounter: any = () => {
        setCounter((prevCounter) => prevCounter - 1);
    };

    return (
        <div>
            <button data-testid="increment" onClick={incrementCounter}>
                +
            </button>
            <p data-testid="counter">{counter}</p>
            <button disabled data-testid="decrement" onClick={decrementCounter}>
                -
            </button>
        </div>
    );
};

export default Counter;
