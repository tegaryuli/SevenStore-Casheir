export default function SelectInput({
    value,
    onChange,
    options = [],
    className = "",
    defaultOption = "Pilih opsi",
    defaultOptionValue = "all",
}) {
    return (
        <select
            value={value}
            onChange={onChange}
            className={`px-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-2 text-sm text-blue-2 bg-white truncate ${className}`.trim()}
        >
            {defaultOption && (
                <option value={defaultOptionValue}>{defaultOption}</option>
            )}
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
}
