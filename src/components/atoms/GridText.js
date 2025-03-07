import React from "react";

const GridText = ({children, className=""}) => {
    return (
        <div className={`grid-text ${className}`}>
            { children }
        </div>
    )
}

export default GridText;