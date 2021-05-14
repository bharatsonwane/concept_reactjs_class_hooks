import React, { Component } from 'react'
import Counter from './resources/class02-state/Counter'
import Message from './resources/class02-state/Messagae'

class AppC02 extends Component {
    render() {
        return (
            <React.Fragment>
                <Message message="Message from AppC02.js" />
                <h1>----------------------</h1>
                <Counter />
            </React.Fragment>
        )
    }
}

export default AppC02
