import Local from "passport-local";
import { findUser, validatePassword } from "./user";

export const localStrategy = new Local.Strategy(
    { usernameField: "email" },
    function (email, password, done) {
        findUser(email, true)
            .then((user: any) => {
                if (user && validatePassword(user, password)) {
                    done(null, user);
                } else {
                    done(
                        new Error("Invalid username and password combination")
                    );
                }
            })
            .catch((error) => {
                done(error);
            });
    }
);
