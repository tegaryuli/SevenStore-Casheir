import { forwardRef } from "react";

const SearchInput = forwardRef(
    (
        { value, onChange, onKeyDown, placeholder = "Cari...", className = "" },
        ref,
    ) => {
        return (
            <div className={`relative flex-1 max-w-40 ${className}`}>
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg
                        className="h-5 w-5 text-dark opacity-40"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        ></path>
                    </svg>
                </div>
                <input
                    ref={ref}
                    type="text"
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    onKeyDown={onKeyDown}
                    className="w-full pl-10 pr-4 py-2 border border-low-white rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-2 text-sm text-blue-2"
                />
            </div>
        );
    },
);

export default SearchInput;
