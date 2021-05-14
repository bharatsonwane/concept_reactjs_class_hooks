import React, {useState} from 'react'
import HookMouse from './HookMouse'

function MouseContainer() {
    const [display, setDisplay] = useState(true)

    return (
        <React.Fragment>
            <button onClick={() => setDisplay(!display)}>Toggle Display</button>
            {display && <HookMouse />}
        </React.Fragment>
    )
}

export default MouseContainer
