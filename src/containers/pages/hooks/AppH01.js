import React from 'react'
import Props1ParentToChild from './resources/hooks001-props/Props1ParentToChild'
import Props2ChildToParent from './resources/hooks001-props/Props2ChildToParent'

function AppH01() {


    return (
        <div>
            <Props1ParentToChild />
            <h1>---------------------------------</h1>
            <Props2ChildToParent />
        </div>
    )
}

export default AppH01
