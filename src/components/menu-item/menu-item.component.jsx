import React from "react";
import {withRouter} from 'react-router-dom';
 
import './menu-item.styles.scss';

// using the parenthesis "()" after the arrow is equal to using the braket and then call return inside. 
const MenuItem = ({title, imageUrl, size, history, linkUrl, match}) => (
    <div
    
    className={`${size} menu-item`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
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

export default withRouter(MenuItem);