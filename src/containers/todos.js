import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Loader from '../components/loader'

class Todos extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: true,
            todos: [],
        }
    }

    componentDidMount() {
        this.getData()
    }

    getData = () => {
        fetch("http://localhost:3030/todos")
            .then(resp => resp.json())
            .then(todos => this.setState({ todos, loading: false }))
    }

    doDelete(id) {
        fetch("http://localhost:3030/todo/" + id, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(response => this.getData())
            .catch(error => console.error('Error:', error))
    }

    render() {

        const { todos, loading } = this.state

        if (loading) {
            return <Loader />
        }

        return <div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map((todo, i) => (
                        <tr key={todo.id}>
                            <td>{todo.title}</td>
                            <td>{todo.description}</td>
                            <td>
                                <div className="btn-group">
                                    <Link className="btn btn-primary" to={`/todos/edit/${todo.id}`}>Edit</Link>
                                    <a className="btn btn-danger" href="javascript:void(0)" onClick={() => this.doDelete(todo.id)} >Delete</a>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    }
}

export default Todos
