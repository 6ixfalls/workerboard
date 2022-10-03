import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import { NextPageWithLayout } from "./types";

interface Props extends AppProps {
    Component: NextPageWithLayout;
}

function MyApp({ Component, pageProps }: Props) {
    useEffect(() => {
        import("preline");

        // dark mode check
        if (
            localStorage.theme === "dark" ||
            (!("theme" in localStorage) &&
                window.matchMedia("(prefers-color-scheme: dark)").matches)
        ) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
        document.documentElement.classList.remove("hidden");
    }, []);

    const getLayout = Component.getLayout || ((page: any) => page);

    return getLayout(<Component {...pageProps} />);
}

export default MyApp;
