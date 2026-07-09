export function Headbar({ children, className = "", ...props }) {
    return (
        <header className={`w-full h-fit p-2 pb-0 ${className}`} {...props}>
            {children}
        </header>
    );
}

export function HeadbarProfile({ children, className = "", ...props }) {
    return (
        <div
            className={`flex items-center p-0 w-fit h-fit gap-3 ${className}`}
            {...props}
        >
            {children}
        </div>
    );
}

export function ProfileName({ children, className = "", ...props }) {
    return (
        <span
            className={` font-inter font-medium text-lg text-white ${className}`}
            {...props}
        >
            {children}
        </span>
    );
}
