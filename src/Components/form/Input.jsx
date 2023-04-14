import React from 'react'

const Input = ({ label, value, changeHandle, isTextArea = false }) => {

    return (
        <>
            <div className='pb-3 flex flex-col'>
                <label className="text-slate-400 pb-2" htmlFor="newTodo">{label}</label>
                {
                    (isTextArea) ?
                        <textarea className='bg-gray-700 border border-gray-600  rounded-lg focus:ring-blue-500 focus:border-blue-500 outline-none py-1.5 px-2 text-white' type="text" id="title" name="title" value={value} onChange={changeHandle} />
                        :
                        <input className='bg-gray-700 border border-gray-600  rounded-lg focus:ring-blue-500 focus:border-blue-500 outline-none py-1.5 px-2 text-white' type="text" id="title" name="title" value={value} onChange={changeHandle} />

                }



            </div>
        </>
    )
}


export default Input;


