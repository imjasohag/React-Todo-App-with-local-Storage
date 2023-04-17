import React, { useState } from 'react'
import Input from './form/Input';

function NewTodo(props) {

    const [title, setTitle] = useState('')
    const [des, setDes] = useState('')

    const controlSubmit = (e) => {
        e.preventDefault()
        if (!title) {
            alert('input todo title')
        }
        else if (!des) {
            alert('input todo description')
        } else {
            props.newTodo({ title, des })
            setTitle('');
            setDes('')
        }
    }
    const changeTitle = (e) => {

        setTitle(e.target.value)

    }
    const changeDes = (e) => {

        setDes(e.target.value)

    }

    return (
        <>

            <div className='pb-10'>
                <h1 className='text-center text-white text-2xl block'>ADD YOUR TODO</h1>
            </div>
            <div>
                <form onSubmit={controlSubmit}>
                    <Input label='Todo Title' value={title} changeHandle={changeTitle} isTextArea={false} />
                    <Input label='Todo Description' value={des} changeHandle={changeDes} isTextArea={true} />
                    <input className='bg-blue-700 text-white  py-1.5 px-2 rounded-lg cursor-pointer' type="submit" defaultValue="Submit" />
                </form>
            </div>


        </>

    )
}

export default NewTodo