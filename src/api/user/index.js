import { restoreState } from "./restoreState";
import { signIn } from "./signIn";
import { signOut } from "./signOut";
import { signUp } from "./signUp";

export const user = {
    signIn: signIn,
    signUp: signUp,
    signOut: signOut,
    restoreState: restoreState
};