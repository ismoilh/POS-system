import React from "react";
import '../root/style.css'

export default function ErrorNotice(props) {
    return (
        <div className="error-notice">
            <span>{props.message}</span>
        </div>
    );
}