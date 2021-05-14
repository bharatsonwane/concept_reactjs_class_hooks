import React, {useState} from 'react'
import Child1 from './Child1'

function Parent1() {
    const [state, setstate] = useState({
        fruitNum: "Parent Props => Apple => 0",
        num : 0,
    })


    const handleClick = () => {
        state.num = state.num + 1 // // mutating state directly ==> not recommended
        // To rerender component props should be changed/updated & state should be changed/updated by using setState() but not mutating.
        // To update child component props parent component should be rerender
        setstate({
            ...state,
            fruitNum: `Parent Props => Apple => ${state.num}`
        })
    }
    return (
        <div>
            <button onClick={() => { handleClick() }} >Pass props Parent to Child</button>
            <Child1  fruitProps={state.fruitNum}  />
        </div>
    )
}

export default Parent1
