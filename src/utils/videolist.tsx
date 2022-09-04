import { VideoProps } from "./interfaces";

export const CITYLIST: Array<string> = [
  "Jamsil",
  "Suwon",

]

export const VIDEOLIST: Array<VideoProps> = [
  {
    videoId: "UtrUouDU7oQ",
    city: "Jamsil",
    startSeconds: 100,
    endSeconds: 4955
  },
  {
    videoId: "C-jePeWlHWE",
    city: "Suwon",
    startSeconds: 60,
    endSeconds: 1680
  }
];

export const getRandomVideo = (locationQuery: string): VideoProps => {
  if (locationQuery === "all") {
    return VIDEOLIST[(Math.random() * VIDEOLIST.length) | 0];
  } else {
    return VIDEOLIST.filter(
      video => video.city === locationQuery
    )[(Math.random() * VIDEOLIST.length) | 0];
  }
}