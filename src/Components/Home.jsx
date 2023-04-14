import React, { useState } from 'react'
import Todos from './Todos'
import NewTodo from './NewTodo';
import { v4 as uuidv4 } from 'uuid';

function Home() {

    const [todoList, setTodoList] = useState([])

    const newTodoHandle = (todo) => {
        const { title, des } = todo
        setTodoList((prevTodo) => {
            return ([...prevTodo, { id: uuidv4(), ttitle: title, ddes: des }])
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