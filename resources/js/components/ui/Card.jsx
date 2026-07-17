export default function Card({ children, className = "", noPadding = false }) {
    return (
        <div className={`bg-white rounded-2xl shadow-sm border border-low-white ${noPadding ? "" : "p-6"} ${className}`.trim()}>
            {children}
        </div>
    );
}