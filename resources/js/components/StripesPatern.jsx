import { twMerge } from "tailwind-merge";

export default function StripesPatern(className) {
    return (
        <div 
            className={twMerge( "w-14 border-x border-lidark/40", className,) }
            style={{ backgroundImage: 'repeating-linear-gradient(-45deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05) 1px, transparent 1px, transparent 8px)' }}>
        </div>
    );
}   