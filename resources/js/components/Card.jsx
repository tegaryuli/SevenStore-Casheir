function cx(...parts) {
    return parts.filter(Boolean).join(" ");
}

export function Card({ className, children, ...props }) {
    return (
        <div
            className={cx(
                "rounded-md border border-veryhite/20 bg-noirblack text-veryhite shadow-lg shadow-black/25",
                className,
            )}
            {...props}
        >
            {children}
        </div>
    );
}

export function CardHeader({ className, children, ...props }) {
    return (
        <div className={cx("flex flex-col gap-1.5 border-b border-veryhite/10 px-6 py-4", className)} {...props}>
            {children}
        </div>
    );
}

export function CardTitle({ className, children, ...props }) {
    return (
        <h3 className={cx("text-lg font-semibold leading-tight tracking-tight text-veryhite", className)} {...props}>
            {children}
        </h3>
    );
}

export function CardDescription({ className, children, ...props }) {
    return (
        <p className={cx("text-sm text-whgray", className)} {...props}>
            {children}
        </p>
    );
}

export function CardContent({ className, children, ...props }) {
    return (
        <div className={cx("px-6 py-4", className)} {...props}>
            {children}
        </div>
    );
}

export function CardFooter({ className, children, ...props }) {
    return (
        <div className={cx("flex flex-wrap items-center gap-2 border-t border-veryhite/10 px-6 py-4", className)} {...props}>
            {children}
        </div>
    );
}
