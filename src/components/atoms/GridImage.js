import React from "react";

const GridImage = ({children, className=""}) => {
    return (
        <div className={`grid-image ${className}`}>
            { children }
        </div>
    )
}

export default GridImage;