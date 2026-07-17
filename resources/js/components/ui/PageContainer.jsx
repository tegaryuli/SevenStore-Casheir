export default function ({ children, className = "" }) {
    return (
        <div
            className={`w-full h-full text-blue-2 font-inter ${className}`.trim()}
        >
            {children}
        </div>
    );
}

export function BiggContainter({ children, className = "" }) {
    return (
        <div className="w-full h-full text-blue-2 font-inter flex flex-col relative overflow-hidden ${className}">
            {children}
        </div>
    );
}
