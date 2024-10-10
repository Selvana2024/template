import { atom } from "recoil";

export const $Counter = atom({
  key: "$Counter",
  default: 100,
});

export const $sideMenuIndex = atom({
  key: "$sideMenuIndex",
  default: true,
});
