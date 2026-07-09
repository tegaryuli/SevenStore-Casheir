import { usePage } from "@inertiajs/react";
import { Headbar } from "@/components/HeadbarComponents";
import UserDropdown from "@/components/UserDropdown";

export default function AppHeadbar({ user }) {
    const { auth } = usePage().props;
    const currentUser = user || auth?.user;

    return (
        <Headbar>
            <div className="w-full h-fit px-16 flex">
                <UserDropdown user={currentUser} />
            </div>
        </Headbar>
    );
}
