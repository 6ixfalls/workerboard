import { ReactNode } from "react";
import Layout from "../../components/dashboardLayout";

export default function Dashboard() {
    return (
        <div className="grid grid-cols-3 grid-flow-row gap-10">
            {Array.from({ length: 5 }, (_, i) => (
                <a
                    key={i}
                    className="flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-lg transition dark:bg-gray-800 dark:border-gray-700 dark:!shadow-slate-700/[.7]"
                    href="#"
                >
                    <div className="p-4 md:p-5">
                        <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                            Test Worker
                        </h3>
                        <p className="mt-2 text-gray-800 dark:text-gray-400">
                            Test worker for the workerboard platform running
                            under workerd.
                        </p>
                    </div>
                    <div className="bg-gray-100 border-t rounded-b-xl py-3 px-4 md:py-4 md:px-5 dark:bg-gray-800 dark:border-gray-700">
                        <span className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            <span className="w-1.5 h-1.5 inline-block bg-green-400 rounded-full"></span>
                            testworker.example.com
                        </span>
                    </div>
                </a>
            ))}
        </div>
    );
}

Dashboard.getLayout = function getLayout(page: ReactNode) {
    return <Layout>{page}</Layout>;
};
