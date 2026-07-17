export default function PageHeader({ title, description, actions, className = "" }) {
    return (
        <div className={`mb-8 flex flex-col lg:flex-row lg:items-center justify-between gap-4 ${className}`.trim()}>
            <div>
                <h1 className="text-3xl font-bold text-blue-2 tracking-tight">
                    {title}
                </h1>
                {description && (
                    <p className="mt-2 text-sm text-gray-500">
                        {description}
                    </p>
                )}
            </div>
            {actions && (
                <div className="flex flex-wrap items-center gap-3">
                    {actions}
                </div>
            )}
        </div>
    );
}
