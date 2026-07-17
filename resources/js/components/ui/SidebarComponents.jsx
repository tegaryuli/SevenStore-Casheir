import * as React from "react";

export function Sidebar({ children, className = "", ...props }) {
    return (
        <aside
            className={`rounded-lg flex flex-col items-center p-4 gap-2 w-fit h-full ${className}`}
            {...props}
        >
            {children}
        </aside>
    );
}

export function SidebarItems({ children, className = "", ...props }) {
    return (
        <div
            className={`flex flex-col items-center p-0 gap-4 w-full h-fit ${className}`}
            {...props}
        >
            {children}
        </div>
    );
}

export function SidebarLogo({ children, className = "", ...props }) {
    return (
        <div
            className={`flex  items-center justify-center ${className}`}
            {...props}
        >
            {children}
        </div>
    );
}

export function SidebarDivider({ className = "", ...props }) {
    return (
        <hr
            className={`w-full border-t border-blue-2/20 ${className}`}
            {...props}
        />
    );
}

export function SidebarFrame({ children, className = "", ...props }) {
    return (
        <div
            className={`flex flex-col items-center justify-center w-fit h-fit py-2 px-4 gap-1 ${className}`}
            {...props}
        >
            {children}
        </div>
    );
}

export function SidebarIcon({ children, className = "", ...props }) {
    return (
        <div
            className={`flex items-center justify-center w-6 h-6 text-blue-2 ${className}`}
            {...props}
        >
            {children}
        </div>
    );
}
