import { useEffect } from "react";
import Router from "next/router";
import useSWR from "swr";
import axios from "axios";

const fetcher = (url: string) =>
    axios
        .get(url)
        .then((r) => r.data)
        .then((data) => {
            return { user: data?.user || null };
        });

export function useUser({
    redirectTo,
    redirectIfFound,
}: { redirectTo?: string; redirectIfFound?: boolean } = {}) {
    const { data, error } = useSWR("/api/me", fetcher);
    const user = data?.user;
    const finished = Boolean(data);
    const hasUser = Boolean(user);

    useEffect(() => {
        if (!redirectTo || !finished) return;
        if (
            // If redirectTo is set, redirect if the user was not found.
            (redirectTo && !redirectIfFound && !hasUser) ||
            // If redirectIfFound is also set, redirect if the user was found
            (redirectIfFound && hasUser)
        ) {
            Router.push(redirectTo);
        }
    }, [redirectTo, redirectIfFound, finished, hasUser]);

    return error ? null : user;
}
