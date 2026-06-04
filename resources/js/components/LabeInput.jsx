export function LabeInput({
    id,
    label,
    type = "text",
    placeholder = "",
    rightElement = null,
    autoComplete = "off",
    name,
    value,
    onChange,
    error = null,
}) {
    return (
        <div className="space-y-2">
            <div className="flex items-center justify-between">
                <label
                    className="block text-sm font-medium text-gray-11"
                    htmlFor={id}
                >
                    {label}
                </label>
                {rightElement}
            </div>
            <input
                id={id}
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                autoComplete={autoComplete}
                placeholder={placeholder}
                className="w-full rounded-md border-gray-7 border bg-white px-3 py-2 text-md text-gray-11 placeholder:text-gray- outline-none focus:border-blue-7 
                focus:ring-2 focus:ring-blue-7"
            />
            {error ? <p className="text-xs text-error font-medium">{error}</p> : null}
        </div>
    );
}
