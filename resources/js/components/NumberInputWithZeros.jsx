import { useState, useEffect } from "react";

function ButtonZero({ children, className = "", ...props }) {
    return (
        <button
            type="button"
            className={`inline-block px-2 py-1 bg-blue-2 text-white text-sm rounded-lg cursor-pointer ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}

export default function NumberInputWithZeros({ initialValue = "", onChange, required = false }) {
    const [base, setBase] = useState(() => {
        if (!initialValue) return "";
        return initialValue.toString().replace(/0+$/, "");
    });
    
    const [zeros, setZeros] = useState(() => {
        if (!initialValue) return "";
        const match = initialValue.toString().match(/0+$/);
        return match ? match[0] : "";
    });

    useEffect(() => {
        onChange(base + zeros);
    }, [base, zeros]);

    const appendZeros = (count) => {
        setZeros((prev) => prev + "0".repeat(count));
    };

    return (
        <div className="flex items-center w-full px-2 py-2 border border-low-white rounded-xl focus-within:ring-2 focus-within:ring-blue-2 focus-within:border-transparent bg-white transition-shadow">
            <input
                type="number"
                min="0"
                value={base}
                onChange={(e) => setBase(e.target.value)}
                className="w-full px-2 focus:outline-none bg-transparent [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none [-moz-appearance:textfield]"
                required={required && !zeros}
            />
            {zeros && (
                <span className="text-blue-2 font-md px-2 py-1 rounded mx-1 text-sm select-none">
                    {zeros}
                </span>
            )}
            <div className="flex gap-1 ml-auto shrink-0">
                <ButtonZero onClick={() => appendZeros(1)}>+0</ButtonZero>
                <ButtonZero onClick={() => appendZeros(3)}>+000</ButtonZero>
                <ButtonZero onClick={() => setZeros("")} title="Reset semua nol dari tombol">
                    ⌫ 0
                </ButtonZero>
            </div>
        </div>
    );
}
