import { restoreState } from "./restoreState";
import { signIn } from "./signIn";
import { signOut } from "./signOut";
import { signUp } from "./signUp";

export const query = {
    signUp: signUp,
    signIn: signIn,
    signOut: signOut,
    restoreState: restoreState
}