import React from 'react'
import { useState } from 'react'

const Form = props => {

    const { addFunction } = props

    const [listData, setListData] = useState("")
    // if it was multiple fields
    // {
        // task: ""
    // }

    const formSubmit = (e) => {
        e.preventDefault()
        addFunction(listData)

        setListData("")
        // setListData({task: ""})
    }

    const handleChange = (e) => {
        const { name, value } = e.target

        // setListData(currentData => ({ ...currentData, [name]: value }))
        setListData(value)
    }

    return (
        <div>
            <form onSubmit={formSubmit}>
                <input name="task" onChange={handleChange} value={listData} type="text" />
                <button>Add</button>
            </form>
        </div>
    )
}

export default Form
