import React, { Component } from 'react'
import LifecycleA from "./resources/class08-LifecycleMethod/LifecycleA";
import FragmentDemo from "./resources/class08-LifecycleMethod/FragmentDemo";
import Tables from "./resources/class08-LifecycleMethod/Tables"

class AppC08 extends Component {
    render() {
        return (
            <div>
                <h1>This is from App.js</h1><br />
                <LifecycleA />
                <h1>------------------</h1>
                {/* <FragmentDemo/> */}
                <h1>------------------</h1>
                {/* <Tables /> */}
                
                
            </div>
        )
    }
}

export default AppC08
