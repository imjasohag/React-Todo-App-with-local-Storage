import React from 'react'

function Todo(props) {
    console.log(props)
    const { title, des, id } = props;

    const deleteTodo = (id) => {

        props.setTodoList((todos) => {
            const newTodos = todos.filter((todo) => {
                if (todo.id === id) {
                    return false
                } else {
                    return true
                }
            })
            return newTodos;
        })
    }
    return (
        <>
            <article className='bg-gray-700 p-5 rounded-lg my-2 flex items-start'>
                <div className='pr-3'>
                    <h3 className='text-xl text-white'>{title}</h3>
                    <p className='text-lg text-white'>{des}</p>
                </div>
                <button onClick={() => {
                    deleteTodo(id)
                }}>
                    <i className="fa fa-trash-o text-red-500 text-xl" aria-hidden="true"></i>
                </button>

            </article>
        </>
    )
}
export default Todo