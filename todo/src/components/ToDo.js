import React from 'react'
import styled from 'styled-components'

const StyledToDoDiv = styled.div`
    .toDo{
        &:hover{
            cursor: pointer;
            text-decoration: underline;
        }
    }
    .toDocompleted{
        text-decoration: line-through
    }
`

const ToDo = props =>{

    const clickHandler = () => props.dispatch({ type: 'TOGGLE', payload: props.toDo.id })
    return(
        <StyledToDoDiv
            onClick={clickHandler}
            className='tododiv'
        >
            <p className={`toDo${props.toDo.completed ? "completed" : ""}`}>{props.toDo.item}</p>
        </StyledToDoDiv>
    )
}

export default ToDo 