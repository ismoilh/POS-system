import React from "react";
import { Link } from "react-router-dom";
import "../root/style.css";

const BlogItem = (props) => {
  const read = () => {
    localStorage.setItem("id-read", props.id);
  };

  return (
    <div className="row2">
      <div className="card1">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.desc}</p>
        <Link to='blog/show/' className="btn btn-yellow-m">
          <button onClick={read}>Read More</button>
        </Link>
      </div>
    </div>
  );
};

export default BlogItem;
