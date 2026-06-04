
export default function Header({ leftContent = null, children = null }) {
    return (
        <header className="absolute inset-x-0 top-0 z-10 border-b border-lidark">
            <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6">
                <div>{leftContent}</div>
                <div className="flex items-center gap-3">{children}</div>
            </div>
        </header>
    );
}
