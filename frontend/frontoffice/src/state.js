import { atom } from "recoil";

const usernameState = atom({
    key: "usernameState",
    default: ""
});

const passwordState = atom({
    key: "passwordState",
    default: ""
});

export { usernameState, passwordState };