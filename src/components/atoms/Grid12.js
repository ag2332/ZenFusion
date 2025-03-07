import React from "react";

const Grid12 = ({children, className=""}) => {
    return (
        <div className={`grid12 ${className}`}>
            { children }
        </div>
    )
}

export default Grid12;