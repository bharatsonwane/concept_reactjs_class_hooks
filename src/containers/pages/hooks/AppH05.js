import React from 'react'
import CounterOne from './resources/hooks05-useReducer/CounterOne'
import CounterTwo from './resources/hooks05-useReducer/CounterTwo'
import CounterThree from './resources/hooks05-useReducer/CounterThree'

function AppH05() {
    return (
        <React.Fragment>
            <CounterOne />
            <h1>------------------</h1>
            <CounterTwo />
            <h1>------------------</h1>
            <CounterThree />
        </React.Fragment>
    )
}

export default AppH05

// // useReducer in used for state management .
// // useReducer is an alternative to useState for state management.
