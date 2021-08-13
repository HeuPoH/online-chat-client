import { restoreState } from "./restoreState";
import { signIn } from "./signIn";
import { signOut } from "./signOut";

export const query = {
    signIn: signIn,
    signOut: signOut,
    restoreState: restoreState
}