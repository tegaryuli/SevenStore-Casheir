import AppLayout from "@/layouts/App-Layout";
import Index from "@/features/Notifications/Index";

export default function Notifications({ ...props }) {
    return <Index {...props} />;
}

Notifications.layout = (page) => <AppLayout>{page}</AppLayout>;
