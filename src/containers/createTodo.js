import React, { Component } from 'react'
import TodoForm from '../components/todoForm'

class CreateTodo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: "",
            description: "",
        }
    }

    onSubmit = (e) => {
        e.preventDefault();
        fetch("http://localhost:3030/todo", {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers:{
              'Content-Type': 'application/json'
            }
          })
          .then(res => res.json())
          .then(response => this.props.history.push("/todos"))
          .catch(error => console.error('Error:', error));
    }

    onInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        const { title, description } = this.state;

        return <TodoForm title={title} description={description} onInputChange={this.onInputChange} onSubmit={this.onSubmit}  />
    }
}

export default CreateTodo
