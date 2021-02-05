import React, { useState } from 'react'
import axios from 'axios'
import './style.css'
import AuthOptions from '../auth/AuthOptions'



const Blog = () => {

    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')


    const submit = (e) => {
        e.preventDefault()
        let Data = { title: title, desc: desc }
        axios.post('https://pacific-shelf-87157.herokuapp.com/blog', Data).then(() => {
            setTitle('')
            setDesc('')
        })
    }

    return (
        <>
            <AuthOptions />
            <div className='addblogpage'>
                <form className='form-blog' onSubmit={submit}>
                    <h3>Lieferando</h3>
                    <h4>Here you can add your blog about our restaurant</h4>
                    <h1>Title</h1>
                    <input maxLength='50' type="text" value={title} onChange={((e) => setTitle(e.target.value))} required />
                    <h1>Description</h1>
                    <input type="text" value={desc} onChange={((e) => setDesc(e.target.value))} required />
                    <button type='submit'>Submit</button>
                </form>
            </div>
        </>
    )
}

export default Blog
