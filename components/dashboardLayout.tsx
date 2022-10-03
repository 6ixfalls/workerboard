import { Icon } from "@iconify/react";
import Image from "next/image";
import { ReactNode } from "react";
import useSWR from "swr";
import axios from "axios";
import md5 from "md5";
import { useRouter } from "next/router";
import Link from "next/link";

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

export default function Dashboard({ children }: { children: ReactNode }) {
    const router = useRouter();
    const { data, error } = useSWR("/api/user/me", fetcher);
    const user = error ? null : data?.user;

    return (
        <div className="dark:bg-gray-900 bg-gray-10 w-screen h-screen">
            <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white border-b text-sm py-2.5 sm:py-4 dark:bg-slate-900 dark:border-gray-700">
                <nav
                    className="max-w-7xl flex basis-full items-center w-full mx-auto px-4 sm:px-6 lg:px-8"
                    aria-label="Global"
                >
                    <div className="mr-5 md:mr-8">
                        <Link href="/dashboard">
                            <a
                                className="flex-none text-xl font-semibold dark:text-white"
                                aria-label="Workerboard"
                            >
                                Workerboard
                            </a>
                        </Link>
                    </div>

                    <div className="w-full flex items-center justify-end ml-auto sm:justify-between sm:gap-x-3 sm:order-3">
                        <div className="flex grow flex-row items-center justify-end gap-2">
                            <button
                                type="button"
                                className="inline-flex flex-shrink-0 justify-center items-center gap-2 h-[2.375rem] w-[2.375rem] rounded-full font-medium bg-white text-gray-700 align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition-all text-xs dark:bg-gray-800 dark:hover:bg-slate-800 dark:text-gray-400 dark:hover:text-white dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800"
                                onClick={() => {
                                    localStorage.theme =
                                        localStorage.theme === "dark"
                                            ? "light"
                                            : "dark";
                                    if (localStorage.theme === "dark") {
                                        document.documentElement.classList.add(
                                            "dark"
                                        );
                                    } else {
                                        document.documentElement.classList.remove(
                                            "dark"
                                        );
                                    }
                                }}
                            >
                                <Icon
                                    icon="carbon:moon"
                                    width="16"
                                    className="hs-dark-mode-active:hidden block"
                                />
                                <Icon
                                    icon="carbon:sun"
                                    width="16"
                                    className="hs-dark-mode-active:block hidden"
                                />
                            </button>
                            <div
                                className="hs-dropdown relative inline-flex"
                                data-hs-dropdown-placement="bottom-right"
                            >
                                <button
                                    id="hs-dropdown-with-header"
                                    type="button"
                                    className="inline-flex flex-shrink-0 justify-center items-center gap-2 h-[2.375rem] w-[2.375rem] rounded-full font-medium bg-white text-gray-700 align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition-all text-xs dark:bg-gray-800 dark:hover:bg-slate-800 dark:text-gray-400 dark:hover:text-white dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800"
                                >
                                    <Icon
                                        icon="carbon:notification-new"
                                        width="16"
                                    />
                                </button>

                                <div
                                    className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-[15rem] z-10 bg-white shadow-md rounded-lg p-2 dark:bg-gray-800 dark:border dark:border-gray-700"
                                    aria-labelledby="hs-dropdown-with-header"
                                >
                                    <div className="flex flex-auto flex-col justify-center items-center p-4 md:p-5">
                                        <svg
                                            className="max-w-[5rem]"
                                            viewBox="0 0 375 428"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M254.509 253.872L226.509 226.872"
                                                className="stroke-gray-400"
                                                stroke="currentColor"
                                                strokeWidth="7"
                                                strokeLinecap="round"
                                            />
                                            <path
                                                d="M237.219 54.3721C254.387 76.4666 264.609 104.226 264.609 134.372C264.609 206.445 206.182 264.872 134.109 264.872C62.0355 264.872 3.60864 206.445 3.60864 134.372C3.60864 62.2989 62.0355 3.87207 134.109 3.87207C160.463 3.87207 184.993 11.6844 205.509 25.1196"
                                                className="stroke-gray-400"
                                                stroke="currentColor"
                                                strokeWidth="7"
                                                strokeLinecap="round"
                                            />
                                            <rect
                                                x="270.524"
                                                y="221.872"
                                                width="137.404"
                                                height="73.2425"
                                                rx="36.6212"
                                                transform="rotate(40.8596 270.524 221.872)"
                                                className="fill-gray-400"
                                                fill="currentColor"
                                            />
                                            <ellipse
                                                cx="133.109"
                                                cy="404.372"
                                                rx="121.5"
                                                ry="23.5"
                                                className="fill-gray-400"
                                                fill="currentColor"
                                            />
                                            <path
                                                d="M111.608 188.872C120.959 177.043 141.18 171.616 156.608 188.872"
                                                className="stroke-gray-400"
                                                stroke="currentColor"
                                                strokeWidth="7"
                                                strokeLinecap="round"
                                            />
                                            <ellipse
                                                cx="96.6084"
                                                cy="116.872"
                                                rx="9"
                                                ry="12"
                                                className="fill-gray-400"
                                                fill="currentColor"
                                            />
                                            <ellipse
                                                cx="172.608"
                                                cy="117.872"
                                                rx="9"
                                                ry="12"
                                                className="fill-gray-400"
                                                fill="currentColor"
                                            />
                                            <path
                                                d="M194.339 147.588C189.547 148.866 189.114 142.999 189.728 138.038C189.918 136.501 191.738 135.958 192.749 137.131C196.12 141.047 199.165 146.301 194.339 147.588Z"
                                                className="fill-gray-400"
                                                fill="currentColor"
                                            />
                                        </svg>
                                        <p className="mt-5 text-sm text-gray-500 dark:text-gray-400">
                                            No notifications
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div
                                className="hs-dropdown relative inline-flex"
                                data-hs-dropdown-placement="bottom-right"
                            >
                                <button
                                    id="hs-dropdown-with-header"
                                    type="button"
                                    className="hs-dropdown-toggle inline-flex flex-shrink-0 justify-center items-center gap-2 h-[2.375rem] w-[2.375rem] rounded-full font-medium bg-white text-gray-700 align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition-all text-xs dark:bg-gray-800 dark:hover:bg-slate-800 dark:text-gray-400 dark:hover:text-white dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800"
                                >
                                    {user ? (
                                        <Image
                                            src={
                                                "https://www.gravatar.com/avatar/" +
                                                // deepcode ignore InsecureHash: gravatar avatar hash
                                                md5(
                                                    user.email
                                                        .trim()
                                                        .toLowerCase()
                                                )
                                            }
                                            layout="fill"
                                            alt="Profile Picture"
                                            className="rounded-full"
                                        />
                                    ) : (
                                        <span className="w-full h-full block bg-gray-200 rounded-full dark:bg-gray-700"></span>
                                    )}
                                </button>

                                <div
                                    className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-[15rem] z-10 bg-white shadow-md rounded-lg p-2 dark:bg-gray-800 dark:border dark:border-gray-700"
                                    aria-labelledby="hs-dropdown-with-header"
                                >
                                    <div className="py-3 px-5 -m-2 bg-gray-100 rounded-t-lg dark:bg-gray-700">
                                        <p className="text-sm text-gray-500 dark:text-gray-400">
                                            Signed in as
                                        </p>
                                        <p className="text-sm font-medium text-gray-800 dark:text-gray-300">
                                            {user
                                                ? user.email
                                                : "user@example.com"}
                                        </p>
                                    </div>
                                    <div className="mt-2 py-2 first:pt-0 last:pb-0">
                                        <Link href="/dashboard/settings">
                                            <a className="flex items-center gap-x-2 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300">
                                                <Icon
                                                    icon="ci:settings"
                                                    height="16"
                                                />
                                                Settings
                                            </a>
                                        </Link>
                                        <a
                                            className="flex items-center gap-x-2 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                                            onClick={() => {
                                                axios
                                                    .post("/api/user/logout")
                                                    .finally(() =>
                                                        router.push("/login")
                                                    );
                                            }}
                                            href="#"
                                        >
                                            <Icon icon="ci:exit" height="16" />
                                            Log Out
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
            <main className="max-w-7xl mx-auto py-10 sm:px-6 lg:px-8">
                {children}
            </main>
        </div>
    );
}
