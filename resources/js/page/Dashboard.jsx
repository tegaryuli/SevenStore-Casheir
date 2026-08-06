import AppLayout from "@/layouts/App-Layout";
import DashboardFeature from "@/features/Dashboard/Index";

export default function Dashboard(props) {
    return <DashboardFeature {...props} />;
}

Dashboard.layout = (page) => <AppLayout>{page}</AppLayout>;
