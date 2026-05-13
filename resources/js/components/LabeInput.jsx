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
                <label className="block text-sm font-medium text-gray" htmlFor={id}>
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
                className="w-full rounded-md border border-gray/25 bg-dark px-3 py-2 text-sm text-gray placeholder:text-gray/55 outline-none focus:border-sldgreen focus:ring-2 focus:ring-sldgreen/30"
            />
            {error ? <p className="text-xs text-disconfirm">{error}</p> : null}
        </div>
    );
}
