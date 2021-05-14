import React from 'react'
import Child2 from './Child2'

function Parent2() {

    const handleRecivedPropsFromChild = (a) => {
        console.log("handleRevicedProps function", a)
    }
    return (
        <div>
            <Child2 provideProps={(a)=>handleRecivedPropsFromChild(a)} />
        </div>
    )
}

export default Parent2
