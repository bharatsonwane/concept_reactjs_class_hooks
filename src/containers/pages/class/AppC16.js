import React, { Component } from 'react'
import ComponentC from './resources/class16-Context/ComponentC'
import { UserProvider } from './resources/class16-Context/userContext'


class AppC16 extends Component {
    render() {
        return (
            <div>
                <UserProvider value="Vishwas">
                    <ComponentC />
                </UserProvider>

                {/* <ComponentC /> */}
            </div>
        )
    }
}

export default AppC16
