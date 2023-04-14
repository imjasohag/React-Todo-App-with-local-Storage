import React from 'react'
import Todo from './Todo';



function Todos(props) {
    // const { todos, deleteTodo }  = props //['', {}]
    const { todos, setTodoList } = props

    return (
        <>
            <div>
                <div className='pb-10'>
                    <h1 className='text-center text-white text-2xl block'>TODO LIST</h1>
                </div>
                {todos.map((todo) => {
                    return (
                        // <Todo title={todo.ttitle} des={todo.ddes} key={todo.id} id={todo.id}delete={deleteTodo}/>
                        <Todo title={todo.ttitle} des={todo.ddes} key={todo.id} id={todo.id} setTodoList={setTodoList} />
                    )
                })}
            </div>


        </>
    )
}

export default Todos