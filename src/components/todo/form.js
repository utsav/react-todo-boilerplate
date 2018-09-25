import React from 'react'

const TodoForm = ({ onSubmit, onInputChange, title, description }) => {
    return <form onSubmit={onSubmit}>
        <div className="form-group">
            <label htmlFor="title">Title:</label>
            <input type="text" className="form-control" value={title} onChange={onInputChange} placeholder="Enter Title" name="title" />
        </div>
        <div className="form-group">
            <label htmlFor="description">Description:</label>
            <input type="text" className="form-control" value={description} onChange={onInputChange} placeholder="Enter Description" name="description" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
    </form>
}

export default TodoForm
