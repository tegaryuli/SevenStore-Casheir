export default function StandardContainer({
    header,
    children,
    rightSidebar = null,
    className = "",
    noBorder = false,
    noPadding = false,
}) {
    return (
        <div
            className={`flex-1 flex gap-6 overflow-hidden relative mt-2 ${className}`}
        >
            <div className={`flex-1 flex flex-col rounded-2xl overflow-hidden ${noPadding ? '' : 'bg-white border border-low-white shadow-sm p-4'}`}>
                {header && (
                    <div className="flex flex-col lg:flex-row gap-4 mb-2 justify-between items-start lg:items-center">
                        {header}
                    </div>
                )}

                <div className="flex-1 overflow-y-auto mb-4 custom-scrollbar">
                    <div
                        className={`${noBorder ? "border-none" : "border-2 border-dashed border-low-white"} rounded-xl min-h-full flex flex-col overflow-hidden bg-white`}
                    >
                        {children}
                    </div>
                </div>
            </div>
            {rightSidebar}
        </div>
    );
}
