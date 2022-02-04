import { atom, selector } from 'recoil';
import {httpPost} from './apiClient'

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

export { userTokensState, ordersState};