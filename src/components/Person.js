import React, {Component} from 'react'

function Person(props) {

    return(
    <>
    <h2 onClick={() => props.viewOne(props.person.id)}>{props.person.name}</h2>
    <button onClick={() => props.delete(props.person.id)}>X</button>
    </>
    )
}

export default Person