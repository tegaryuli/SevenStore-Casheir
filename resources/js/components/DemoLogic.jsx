function cx(...parts) {
    return parts.filter(Boolean).join(" ");
}

export default function Demo({ children, className = "" }) {
    return (
        <div className={cx("min-h-screen bg-dark", className)}>
            {children ? (
                children
            ) : (
                <div className="flex min-h-screen items-center justify-center">
                    <div className="text-lg text-gray">Demo Page</div>
                </div>
            )}
        </div>
    );
}