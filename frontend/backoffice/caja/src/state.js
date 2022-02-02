import { atom, selector } from 'recoil';
import {httpPost} from './apiClient'

const userTokenLoader = selector({
    key: "userTokenLoader",
    get: async () => {
        const tokens = await httpPost("/token/", {"username": "eljoaco", "password": "joaco1234"});
        return tokens;
    },
  });
  
const userTokenState = atom({
    key: "userToken",
    default: userTokenLoader
});

export {userTokenState};