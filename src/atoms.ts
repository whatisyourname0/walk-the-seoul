import { atom } from "recoil";

export const isVideoLoadingAtom = atom<boolean>({
  key: "isVideoLoading",
  default: false,
});
