import AppLayout from "@/layouts/App-Layout";
import Attendances from "@/features/Reports/Attendances";

export default function Reports({ view, ...props }) {
    return <Attendances {...props} />;
}

Reports.layout = (page) => <AppLayout>{page}</AppLayout>;
