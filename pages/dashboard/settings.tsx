import { ReactNode } from "react";
import Layout from "../../components/dashboardLayout";

export default function Dashboard() {
    return <a className="text-white">test</a>;
}

Dashboard.getLayout = function getLayout(page: ReactNode) {
    return <Layout>{page}</Layout>;
};
