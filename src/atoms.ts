import { atom } from "recoil";
import { WalkingTypes } from "./utils/interfaces";

export const isVideoLoadingAtom = atom<boolean>({
  key: "isVideoLoading",
  default: true,
});

export const walkingTypeAtom = atom<WalkingTypes>({
  key: "walkingType",
  default: { value: "Walking" },
});

export const volumeAtom = atom<number>({
  key: "volume",
  default: 0,
});
