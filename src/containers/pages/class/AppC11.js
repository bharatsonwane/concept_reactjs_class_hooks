import React, { Component } from 'react'
import FocusInput from './resources/class11-refs/FocusInput'
import RefsDemo from './resources/class11-refs/RefsDemo'
import FRParentInput from './resources/class11-refs/FRParentInput'

class AppC11 extends Component {
    render() {
        return (
            <div>
                {/* <RefsDemo /> */}
                {/* <FocusInput /> */}
                <FRParentInput />
            </div>
        )
    }
}

export default AppC11
