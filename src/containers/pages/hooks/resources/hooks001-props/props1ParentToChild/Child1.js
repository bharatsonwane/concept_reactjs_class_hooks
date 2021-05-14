import React from 'react'

function Child1(props) {
    return (
        <div>
            <h3 style={{color: "red"}}>Props from parent to Child = {props.fruitProps}</h3>
        </div>
    )
}

export default Child1
