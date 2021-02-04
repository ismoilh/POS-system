import React, { Component } from 'react';

class BlogTop extends Component {
    render() {
        return (
            <div className="blog-top container">
                <div className="row">
                    <div className="col-md-7 mb-4">
                        <div className="blog-top-left">
                            <p>Lust auf mehr?</p>
                            <p>Auf unserem Blog findest Du spannende News aus den Bereichen Food & Lifestyle!</p>
                            <a href="/">Zum Blog</a>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="blog-top-right">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Dell_Inspiron_One_23_Touch_AIO_Desktop_PC.png/1280px-Dell_Inspiron_One_23_Touch_AIO_Desktop_PC.png" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BlogTop;
