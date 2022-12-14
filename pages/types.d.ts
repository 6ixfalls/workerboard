/// <reference types="next" />
import { NextPage } from "next";

export type NextPageWithLayout<P = {}> = NextPage<P> & {
    getLayout?: (page: React.ReactElement) => React.ReactElement;
};
