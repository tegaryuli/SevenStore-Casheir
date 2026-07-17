export default function Bubbles() {
    return (
        <>
            <div
                className="pointer-events-none absolute -top-32 right-0 h-[28rem] w-[28rem] rounded-full bg-blue blur-3xl"
                aria-hidden
            />
            <div
                className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 rounded-full bg-blue-2 blur-3xl"
                aria-hidden
            />
        </>
    );
}
