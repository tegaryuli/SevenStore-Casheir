import * as React from "react";

export function Container({ children, className = "", ...props }) {
    return (
        <div className={"p-4 w-fit  ${className}"} {...props}>
            {children}
        </div>
    );
}
