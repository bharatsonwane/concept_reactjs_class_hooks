import React from 'react'
import ComponentC from './resources/hooks04-useContext/ComponentC'

export const UserContext = React.createContext() // export context
export const ChannelContext = React.createContext() // export context


function AppH04() {
    return (
        <React.Fragment>
            <UserContext.Provider value={'Vishwas'}>
                <ChannelContext.Provider value={'CodEvolution'}>
                    <ComponentC />
                </ChannelContext.Provider>
            </UserContext.Provider>
        </React.Fragment>
    )
}

export default AppH04
