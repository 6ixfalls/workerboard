import type { NextPage } from "next";
import Head from "next/head";
import { Icon } from "@iconify/react";

const Login: NextPage = () => {
    return (
        <div className="dark:bg-gray-900 bg-gray-10 flex items-center py-16 w-screen h-screen">
            <Head>
                <title>Login</title>
            </Head>

            <main
                id="content"
                role="main"
                className="w-full max-w-md mx-auto p-6"
            >
                <div className="mt-7 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-4 sm:p-7">
                        <div className="text-center">
                            <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
                                Sign in
                            </h1>
                            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                                Workerboard Dashboard
                            </p>
                        </div>

                        <div className="mt-5">
                            <form action="/api/login" method="post">
                                <div className="grid gap-y-4">
                                    <div>
                                        <label
                                            htmlFor="email"
                                            className="block text-sm mb-2 dark:text-white"
                                        >
                                            Email address
                                        </label>
                                        <div className="relative">
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 border"
                                                required
                                                aria-describedby="email-error"
                                            />
                                        </div>
                                    </div>

                                    <div className="mb-3">
                                        <div className="flex justify-between items-center">
                                            <label
                                                htmlFor="password"
                                                className="block text-sm mb-2 dark:text-white"
                                            >
                                                Password
                                            </label>
                                        </div>
                                        <div className="relative">
                                            <input
                                                type="password"
                                                id="password"
                                                name="password"
                                                className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 border"
                                                required
                                                aria-describedby="password-error"
                                            />
                                        </div>
                                    </div>

                                    <button
                                        type="submit"
                                        className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                                    >
                                        Sign in
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <p className="mt-3 flex justify-center items-center text-center divide-x divide-gray-300 dark:divide-gray-700">
                    <a
                        className="pr-3.5 inline-flex items-center gap-x-2 text-sm text-gray-600 decoration-2 dark:text-gray-500 hover:underline hover:text-blue-600 dark:hover:text-gray-200 transition"
                        href="https://github.com/6ixfalls/workerboard"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Icon icon="mingcute:version-fill"></Icon>
                        workerboard {process.env.NEXT_PUBLIC_BUILD_ID}
                    </a>
                    <a
                        className="pl-3.5 inline-flex items-center gap-x-2 text-sm text-gray-600 decoration-2 dark:text-gray-500 hover:underline hover:text-blue-600 dark:hover:text-gray-200 transition"
                        href="https://github.com/cloudflare/workerd"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Icon icon="simple-icons:cloudflare"></Icon>
                        workerd v1.0.0
                    </a>
                </p>
            </main>
        </div>
    );
};

export default Login;
