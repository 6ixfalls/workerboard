import crypto from "crypto";
import { prisma } from "./db";
import { User } from "@prisma/client";

// Here you should lookup for the user in your DB
export async function findUser(email: string) {
    return prisma.user.findUnique({
        where: {
            email: email,
        },
    });
}

// Compare the password of an already fetched user (using `findUser`) and compare the
// password for a potential match
export function validatePassword(user: User, inputPassword: string) {
    const inputHash = crypto
        .pbkdf2Sync(inputPassword, user.salt, 1000, 64, "sha512")
        .toString("hex");
    const passwordsMatch = user.hash === inputHash;
    return passwordsMatch;
}
