import React from 'react'
import ToDo from './ToDo'

const ToDoList = props =>{
    console.log(props)
    return(
        <div className='todo-list'>
            {props.todos.map(toDo =>(
                <ToDo
                    key={toDo.id}
                    toDo={toDo}
                    dispatch={props.dispatch}
                  
                />
            ))}
            <button className='clear-btn' onClick={e => props.dispatch({ type: 'CLEAR' })}>
                Clear Completed Tasks
            </button>
        </div>
    )
}

export default ToDoList