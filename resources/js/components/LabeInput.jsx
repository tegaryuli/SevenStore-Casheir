export function LabeInput({
    id,
    label,
    type = "text",
    placeholder = "",
    rightElement = null,
    autoComplete = "off",
}) {
    return (
        <div className="space-y-2">
            <div className="flex items-center justify-between">
                <label className="block text-sm font-medium text-veryhite" htmlFor={id}>
                    {label}
                </label>
                {rightElement}
            </div>
            <input
                id={id}
                type={type}
                autoComplete={autoComplete}
                placeholder={placeholder}
                className="w-full rounded-md border border-veryhite/25 bg-bggray px-3 py-2 text-sm text-veryhite placeholder:text-veryhite/55 outline-none focus:border-sldgreen focus:ring-2 focus:ring-sldgreen/30"
            />
        </div>
    );
}
