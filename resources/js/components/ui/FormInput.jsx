export default function FormInput({
    id,
    label,
    type = "text",
    placeholder = "",
    name,
    value,
    onChange,
    error = null,
    required = false,
    className = "",
    disabled = false,
}) {
    return (
        <div className={className}>
            <label
                className="block text-sm font-medium text-dark mb-2"
                htmlFor={id}
            >
                {label}{" "}
                {required && <span className="text-vintage-rouge">*</span>}
            </label>
            <input
                id={id}
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                required={required}
                disabled={disabled}
                className="w-full px-4 py-2 border border-low-white rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-2 disabled:opacity-50"
            />
            {error && (
                <p className="text-xs text-vintage-rouge mt-1">{error}</p>
            )}
        </div>
    );
}
