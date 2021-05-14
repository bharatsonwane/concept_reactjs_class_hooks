import React, { Component } from 'react'
import ClickCounterTwo from './resources/class15-RenderPropsPattern_lookout/ClickCounterTwo'
import Counter from './resources/class15-RenderPropsPattern_lookout/Counter'
import HoverCounterTwo from './resources/class15-RenderPropsPattern_lookout/HoverCounterTwo'
import User from './resources/class15-RenderPropsPattern_lookout/User'

class AppC15 extends Component {
    render() {
        return (
            <div>
                {/* <ClickCounterTwo />
                <HoverCounterTwo /> */}
                {/* <User name={(isLoggedIn) => (isLoggedIn ? "Vishwas" : "Guest")} /> */}
                {/* <User render={(isLoggedIn) => (isLoggedIn ? "Vishwas" : "Guest")} /> */}
                <Counter render={(count, incrementCount) => <ClickCounterTwo count={count} incrementCount={incrementCount} />} />
                <Counter render={(count, incrementCount) => <HoverCounterTwo count={count} incrementCount={incrementCount} />} />
            </div>
        )
    }
}

export default AppC15
