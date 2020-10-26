import React, { Fragment, useState, useEffect } from 'react'
import EditTodo from './EditTodo'

const ListTodos = () => {

    const [todos, setTodos] = useState([])


    //get function
    const getTodos = async() => {
        try {
            const response = await fetch('http://localhost:5000/todos')
            const jsonData = await response.json()

            setTodos(jsonData)

        } catch (err) {
            console.log(err.message)
        }
    }

    useEffect (() => {
        getTodos()
    }, [])

    //delete function

    const deleteTodo = async(id) => {
        try {
            const deleteTodo = await fetch(`http://localhost:5000/todos/${id}`, {
                method: 'DELETE'
            })

            setTodos(todos.filter(todo => todo.todo_id !== id))

        } catch (err) {
            console.log(err.message)
        }
    }
    return (
        <Fragment>
    <table className="table mt-5 text-center">
    <thead>
      <tr>
        <th>Description</th>
        <th><EditTodo /></th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {todos.map(todo =>(
          <tr key={todo.todo_id}>
              <td>{todo.description}</td>
              <td><button className='btn btn-warning'>Delete</button></td>
              <td><button className='btn btn-danger' onClick={() => deleteTodo(todo.todo_id)}>Delete</button></td>
          </tr>
      ))}
    </tbody>
  </table>
        </Fragment>
    )
}

export default ListTodos
