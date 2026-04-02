

import { LoginLayout } from "./layout/login";

export default function Dashboard() {
    return (
        <LoginLayout>
            <div className="text-center text-sm text-[#8b949e]">
                Demo page loaded from <span className="text-[#c9d1d9] font-medium">dashboard.jsx</span>
            </div>
        </LoginLayout>
    );
}