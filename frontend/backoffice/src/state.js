import { atom, selector } from 'recoil';
import {httpPost} from './apiClient'

// backoffice state

const userTokensLoader = selector({
    key: "userTokensLoader",
    get: async () => {
        const res = await httpPost("/token/", {"username": "eljoaco", "password": "joaco1234"});
        return res.data;
    },
});
  
const userTokensState = atom({
    key: "userTokens",
    default: userTokensLoader,
});

const ordersState = atom({
    key: "ordersState",
    default: [],
});

const listingIdState = atom({
    key: "listingIdState",
    default: ""
});


// frontoffice state

const usernameState = atom({
    key: "usernameState",
    default: ""
});

const passwordState = atom({
    key: "passwordState",
    default: ""
});

export { userTokensState, ordersState, listingIdState, usernameState, passwordState};