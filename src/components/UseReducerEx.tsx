import React, {useReducer} from "react";

/**
 * An alternative to useState. Use it in the components that need complex state
 * management, such as multiple state values being updated by multiple methods
 */

// An ENUM that all type of actions
enum CounterActionTypes {
    INCREASE = "increase",
    DECREASE = "decrease"
}

// Interface for counter actions
interface ICounterAction {
    type: CounterActionTypes;
    payload: number;
}

// Interface for counter state
interface ICounterState {
    counter: number;
}

const counterReducer = (state: ICounterState, action: ICounterAction) => {
    const {type, payload} = action;

    switch (type) {
        case CounterActionTypes.INCREASE:
            return {
                ...state,
                counter: state.counter + payload
            };
        case CounterActionTypes.DECREASE:
            return {
                ...state,
                counter: state.counter - payload
            };
        default:
            return state;
    }
}

const UseReducerEx = () => {
    const initialState = {counter: 0};

    const [state, dispatch] = useReducer(counterReducer, initialState);

    return (
        <>
            Count: {state.counter} <br/>
            <button onClick={() => dispatch({type: CounterActionTypes.INCREASE, payload: 5})}>+</button>
            {'  '}
            <button onClick={() => dispatch({type: CounterActionTypes.DECREASE, payload: 5})}>-</button>
        </>
    )
};

export default UseReducerEx;