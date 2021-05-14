import React, { Component } from 'react'
import Props1ParentToChild from './resources/class01-function-props/Props1ParentToChild'
import Props2ChildToParent from './resources/class01-function-props/Props2ChildToParent'

class AppCr01 extends Component {
    render() {
        return (
            <div>
                <Props1ParentToChild />
                <Props2ChildToParent />
            </div>
        )
    }
}

export default AppCr01
