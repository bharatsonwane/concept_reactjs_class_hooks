import React, { Component } from 'react'
import Hoc1 from './resources/class14-HigherOrderComponent/Hoc1'
import Hoc2 from './resources/class14-HigherOrderComponent/Hoc2'

class AppC14 extends Component {
    render() {
        return (
            <React.Fragment>
                <Hoc1 />
                {/* <Hoc2 /> */}
            </React.Fragment>
        )
    }
}

export default AppC14
