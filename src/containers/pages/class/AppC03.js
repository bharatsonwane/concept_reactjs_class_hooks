import React, { Component } from 'react'
import FunctionClick from './resources/class03-function-Event/FunctionClick'
import ClassClick from './resources/class03-function-Event/ClassClick'
import EventBind from './resources/class03-function-Event/EventBind'

export class AppC03 extends Component {
    render() {
        return (
            <React.Fragment>
                <FunctionClick />
                <h1>---------------------</h1>
                <ClassClick />
                <h1>---------------------</h1>
                <EventBind />
            </React.Fragment>
        )
    }
}

export default AppC03
