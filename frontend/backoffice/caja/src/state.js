import { atom, selector } from 'recoil';
import {httpPost} from './apiClient'

const userTokensLoader = selector({
    key: "userTokensLoader",
    get: async () => {
        const res = await httpPost("/token/", {"username": "Jero", "password": "joacoselacome"});
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