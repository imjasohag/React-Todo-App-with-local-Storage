import React, { useEffect, useState } from 'react'
import Todos from './Todos'
import NewTodo from './NewTodo';
import { v4 as uuidv4 } from 'uuid';

function Home() {
    const [todoList, setTodoList] = useState([])

    useEffect(() => {
        // read from local storage
        const todos = localStorage.getItem('todos')
        if(todos!=null){
            // string -> js arr
            const todosArr = JSON.parse(todos)
            // state update
            setTodoList(todosArr)
        }
        
    }, [])

    const newTodoHandle = (todo) => {
        const { title, des } = todo

        setTodoList((prevTodo) => {
            const allTodo = [...prevTodo, { id: uuidv4(), ttitle: title, ddes: des }]
            localStorage.setItem('todos', JSON.stringify(allTodo))
            return (allTodo)
        })
    }


    return (
        <>
            <section className='container mx-auto p-5 md:p-7'>
                <NewTodo newTodo={newTodoHandle} />
                <Todos todos={todoList} setTodoList={setTodoList} />
            </section>


        </>
    )
}

export default Home