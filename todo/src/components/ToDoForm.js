import React from 'react'

class ToDoForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            toDoText: ''
        }
    }

    handleChanges = e =>{
        this.setState({
            toDoText: e.target.value
        })
    }

    handleSubmit = e =>{
        e.preventDefault();
        this.props.dispatch({ type: 'ADD', payload: this.state.toDoText })
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input 
                    type='text'
                    name='toDoText'
                    value={this.state.toDoText}
                    onChange={this.handleChanges}
                    />
                <button>Add a Step</button>
            </form>
        )
    }
}

export default ToDoForm