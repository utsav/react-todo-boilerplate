import React, { Component } from 'react'

import Loader from '../../components/loader'
import TodoForm from '../../components/todo/form'

class EditTodo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: "",
            description: "",
        }
    }

    componentDidMount() {
        fetch("http://localhost:3030/todo/" + this.props.match.params.id)
        .then(resp => resp.json())
        .then(todo => this.setState({ title: todo.title, description: todo.description , loading: false }) )
    }

    onSubmit = (e) => {
        e.preventDefault();

        fetch("http://localhost:3030/todo/" + this.props.match.params.id, {
            method: 'PUT',
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
        const { title, description, loading } = this.state;

        if(loading) {
            return <Loader />
        }

        return <TodoForm title={title} description={description} onInputChange={this.onInputChange} onSubmit={this.onSubmit}  />
    }
}

export default EditTodo
