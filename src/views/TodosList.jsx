
import React from 'react'
import './TodosList.scss'
import { Link } from '@reach/router'

class TodosList extends React.Component {
    state = {
        newTodoText: ''
    }

    handleChange = (event) => {
        this.setState({ newTodoText: event.target.value });
    }
    onKeyPress = (event) => {
        if (event.charCode === 13) {

            this.props.onNewTodo(event.target.value)
            this.setState({ newTodoText: '' });
        }
    }


    render() {

        return (
            <div className="TodosList">
                <div className="addTodo">
                    <input
                        type="text"
                        placeholder="Añade una nueva tarea"
                        value={this.state.newTodoText}
                        onChange={this.handleChange}
                        onKeyPress={this.onKeyPress}
                    autoFocus/>
                </div>
                <div className="allTodos">
                    {this.props.todos.map(todo => (
                        <div key={todo.id} className={`todo ${todo.completed ? 'completed' : ''}`}>
                            <span className="text">{todo.text}</span>
                            <div className="actions">
                                <button><Link to={'/todo/' + todo.id}> ✏</Link> </button>
                                <button onClick={() => this.props.onCompleted(todo.id)}> {todo.completed ? '✅' : '✔'}</button>
                                 <button onClick={() => this.props.onDeleteTodo(todo.id)}>❌</button>
                                
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )



    }
}




export default TodosList;