import { atom, selector } from 'recoil';
import {httpPost} from './apiClient'

// backoffice state

const userTokensLoader = selector({
    key: "userTokensLoader",
    get: async () => {
        const res = await httpPost("/token/", {"username": "joaquin", "password": "joaquin1234"});
        return res.data;
    },
});

const userTokensState = atom({
    key: "userTokens",
    default: "",
});

const ordersState = atom({
    key: "ordersState",
    default: [],
});



// frontoffice state

const usernameState = atom({
  key: "usernameState",
  default: null,
});

const passwordState = atom({
  key: "passwordState",
  default: null,
});

const notificationState = atom({
  key: "notificationState",
  default: "",
});

const listingsState = atom({
  key: "listingsState",
  default: [],
});

const listingIdState = atom({
  key: "listingIdState",
  default: ""
});

const listingTitleState = atom({
  key: "listingTitleState",
  default: ""
});

const listingsProductState = atom({
key: "listingsProductState",
default: [],
});

export {
  listingsProductState,
  listingTitleState,
  userTokensState,
  ordersState,
  listingIdState,
  usernameState,
  passwordState,
  notificationState,
  listingsState,
};
