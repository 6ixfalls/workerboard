import crypto from "crypto";
import { prisma } from "./db";
import { User } from "@prisma/client";

type UserWithoutPassword = Omit<User, "salt" | "hash">;

export async function createUser({
    email,
    password,
}: {
    email: string;
    password: string;
}) {
    const salt = crypto.randomBytes(16).toString("hex");
    const hash = crypto
        .pbkdf2Sync(password, salt, 1000, 64, "sha512")
        .toString("hex");
    return await prisma.user.create({
        data: {
            email,
            salt,
            hash,
        },
    });
}

// Here you should lookup for the user in your DB
export async function findUser(email: string, keepPassword: boolean = false) {
    return new Promise<User | UserWithoutPassword | null>(
        async (resolve, reject) => {
            const user = await prisma.user.findUnique({
                where: {
                    email: email,
                },
            });

            if (!user) {
                resolve(null);
            }
            if (keepPassword) {
                resolve(user);
            } else {
                const { hash, salt, ...userWithoutHash } = user!;
                resolve(userWithoutHash);
            }
        }
    );
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
