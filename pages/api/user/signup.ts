import { NextApiRequest, NextApiResponse } from "next";
import { createUser } from "../../../lib/user";

export default async function signup(
    req: NextApiRequest,
    res: NextApiResponse
) {
    try {
        await createUser(req.body);
        res.status(200).send({ done: true });
    } catch (error: any) {
        console.error(error);
        res.status(500).end("Failed to create user");
    }
}
