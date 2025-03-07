import React from "react";

const GridForm = ({children, className=""}) => {
    return (
        <div className={`grid-form ${className}`}>
            { children }
        </div>
    )
}

export default GridForm;