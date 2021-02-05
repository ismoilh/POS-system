import React, { useEffect, useState } from "react";
import "../root/style.css";
import { Link } from "react-router-dom";
import AuthOptions from "../auth/AuthOptions";
import '../root/style.css'

const BlogDetail = () => {
  let readId = localStorage.getItem("id-read");


  const port = process.env.PORT || 5000;

  const [box, setBox] = useState({
    posts: {
      title: undefined,
      description: undefined
    },
  });

  const asd = async () => {
    const response = await fetch(`http://localhost:${port}/blog/show/` + readId, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    setBox({ posts: data });
  };
  useEffect(() => {
    asd();
  }, []);

  return (
    <>
      <div className="header-top q1">
        <AuthOptions />
      </div>
      <div className="card mb-3 blogT">
        <div className="card-body">
          <h2 className="card-title">{box.posts.title}</h2>
          <hr />
          <p className="card-text">{box.posts.description}</p>
        </div>
      </div>
    </>
  );
};

export default BlogDetail;
