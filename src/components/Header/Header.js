import React from "react";
import "./Header.css";

function Header(props) {
    return (
<div className="header">
    <h1>{props.HeaderText}</h1>
</div>
    );
}

export default Header;