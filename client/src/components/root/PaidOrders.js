import React, { useEffect, useState } from 'react'
import AuthOptions from '../auth/AuthOptions'
import './style.css'

const PaidOrders = () => {

    const [box, setBox] = useState({ posts: [] })


    const port = process.env.PORT || 5000;

    let userdata = JSON.parse(localStorage.getItem('user-data'))

    if (userdata === null) {
        localStorage.setItem("user-data", "");
        userdata = "";
    }

    const qwe = async () => {
        let token = localStorage.getItem("auth-token")
        if (token === null) {
            localStorage.setItem("auth-token", "");
            token = "";
        }
        const response = await fetch(`http://localhost:${port}/paid`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                "x-auth-token": token
            }
        });
        const data = await response.json();

        setBox({ posts: data })

    }
    useEffect(() => {
        qwe()
    }, [])

    const displayBlogPost = box.posts.filter(function (obj) {
        return (obj.owner === userdata.email)
    })


    return (
        <>
            <AuthOptions />
            <div className="headerPaid">
                <div className='qwwe1'>Date</div>
                <div className='qwwe2'>Price</div>
                <div className='qwwe3'>Bonus</div>
            </div>
            {displayBlogPost.map((post, i) => (
                <div className='table2' key={i} >
                    <div className='thead2'>
                        <div>{post.created_at}</div>
                        <div>{post.price}€</div>
                        <div>{(post.price) / 10}</div>
                    </div>
                    <div className='tbody2'>
                        <div>{post.title}</div>
                    </div>
                </div>
            ))}


        </>
    )
}

export default PaidOrders
