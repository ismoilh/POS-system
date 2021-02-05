import React, { useEffect, useState } from "react";
import BlogItem from "../section-item/BlogItem";
import SectionHeader from "./SectionHeader";
import "../root/style.css";

const Blog = () => {
  let token = localStorage.getItem("auth-token");
  if (token === null) {
    localStorage.setItem("auth-token", "");
    token = "";
  }



  const [box, setBox] = useState({ posts: [] });

  const qwe = async () => {
    const response = await fetch(`http://localhost:${process.env.PORT}/blog`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": token,
      },
    });
    const data = await response.json();
    setBox({ posts: data.campgrounds });
  };


  useEffect(() => {
    qwe();
  }, []);


  const displayBlogPost = (posts) => {
    return posts.map((post, index) => (
      <div key={index}>
        <BlogItem title={post.title} desc={post.description} id={post._id} />
      </div>
    ));
  };

  return (
    <div className="blog">
      <div className="container">
        <div className="row">
          <SectionHeader info="Neu hier?" title="Entdecke Lieferando.de" />
        </div>
        <div className="row1">{displayBlogPost(box.posts)}</div>
      </div>
    </div>
  );
};

export default Blog;
