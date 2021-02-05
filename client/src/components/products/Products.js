import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../root/style.css'
import { useStateValue } from '../../StateProvider';
import AuthOptions from '../auth/AuthOptions';




const Products = () => {
  let token = localStorage.getItem("auth-token")
  if (token === null) {
    localStorage.setItem("auth-token", "");
    token = "";
  }
  const [box, setBox] = useState({ posts: [] })



  const [{ userData }] = useStateValue()

  const qwe = async () => {
    const response = await fetch('https://pacific-shelf-87157.herokuapp.com/menu', {
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
  })


  const displayBlogPost = (posts) => {
    if (!posts.length) return null;

    return posts.map((post, index) => (
      <div key={index} className="box1">

        <h2 className='stock'>{post.stock ? <span className='green'>in stock</span> : <span className='red'>not in stock</span>}</h2>
        <div className="title-description">
          <h2>{post.title}</h2>
          <h3>{post.description}</h3>
          <h3>{post.price}€</h3>
          <div className='btn-count'>
            {post.stock ?
              <button onClick={() => {
                let box2 = { title: undefined, desc: undefined, price: undefined, id: undefined, owner: undefined }
                box2 = {
                  title: post.title,
                  desc: post.description,
                  price: post.price,
                  id: post.id,
                  owner: userData.user.id
                }
                axios.post('https://pacific-shelf-87157.herokuapp.com/orders', box2)
              }} className='addBtn'>Add to orders</button> : ''}
          </div>

        </div>
        <img className='image' src={post.images[0].url} alt="" />
      </div >

    ));
  };

  return (
    <>
      <AuthOptions />
      <div className="menu">
        {displayBlogPost(box.posts)}
      </div>
    </>
  );

}

export default Products;



