import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {increment, decrement, reset, incrementByAmount} from "./counterSlice";

function Counter(){
    const count = useSelector((state)=> state.counterR.value);

    const dispatch = useDispatch();

    const [amount, setAmount] = useState("");

    return(
        <div className="container mt-5 text-center">
            <div className="card shadow p-4">
                <h2>Redux Toolkit Counter App</h2>

                <h1 className="display-3 my-4">{count}</h1>

                <div className="mb-3">
                    <button className="btn btn-success me-2"
                        onClick={() => dispatch(increment())}
                    >
                        Increment
                    </button>

                    <button className="btn btn-danger me-2"
                        onClick={() => dispatch(decrement())}
                    >
                        Decrement
                    </button>

                    <button className="btn btn-secondary"
                        onClick={() => dispatch(reset())}
                    >
                        Reset
                    </button>
                </div>

                <div className="mt-4">
                    <input type="number"
                        className="form-control mb-2"
                        placeholder="Enter amount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                    />

                    <button className="btn btn-primary"
                            onClick={() => {dispatch(incrementByAmount(amount)
                            );
                            setAmount("");
                        }}
                    >
                        Increment By Amount
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Counter;