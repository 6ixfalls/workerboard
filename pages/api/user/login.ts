// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import passport from "passport";
import nextConnect from "next-connect";
import { localStrategy } from "../../../lib/passport-local";
import { setLoginSession } from "../../../lib/auth";

const authenticate = (req: NextApiRequest, res: NextApiResponse) => {
    return new Promise((resolve, reject) => {
        passport.authenticate("local", (err, token) => {
            if (err) {
                reject(err);
            } else {
                resolve(token);
            }
        })(req, res);
    });
};

passport.use(localStrategy);

export default nextConnect()
    .use(passport.initialize())
    .post(async (req: NextApiRequest, res: NextApiResponse) => {
        try {
            const session = await authenticate(req, res);

            await setLoginSession(res, session);

            res.status(200).send({ done: true });
        } catch (error: any) {
            res.status(401).send("Invalid email/password combination");
        }
    });
