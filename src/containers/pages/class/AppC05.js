import React, { Component } from 'react'
import UserGreeting from './resources/class05-Conditional-Rendering/UserGreeting'
import NameList from './resources/class05-Conditional-Rendering/NameList'

class AppC05 extends Component {
    render() {
        return (
            <div>
                <UserGreeting />
                <h1>-------------------</h1>
                <NameList />
                
            </div>
        )
    }
}

export default AppC05
