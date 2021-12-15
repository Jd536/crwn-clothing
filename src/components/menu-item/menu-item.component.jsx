import React from "react";
import './menu-item.styles.scss';

// using the parenthesis "()" after the arrow is equal to using the braket and then call return inside. 
const MenuItem = ({title, imageUrl, size}) => (
    <div
    
    className={`${size} menu-item`}
    >   
        <div className="background-image"
        style={{
            backgroundImage:`url(${imageUrl})`
        }}
        ></div>
        <div className="content">
            <h1 className="title">{title.toUpperCase()}</h1>
            <span className="subtitle">SHOP NOW</span>
        </div>
</div>
)

export default MenuItem;