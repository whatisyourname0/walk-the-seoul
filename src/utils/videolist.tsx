import { VideoProps } from "./interfaces";

export const Cities = [
  'Jamsil',
  "Dongmyo",
  "Myeongdong",
  "Gangnam",
  "Euljiro"
] as const;

export const VIDEOLIST: Array<VideoProps> = [
  {
    videoId: "UtrUouDU7oQ",
    city: "Jamsil",
    startSeconds: 100,
    endSeconds: 4955,
    time: "Day",
  },
  {
    videoId: "2BkAzEY0RW8",
    city: "Jamsil",
    startSeconds: 90,
    endSeconds: 2605,
    time: "Day",
  },
  {
    videoId: "52SSoFBPLso",
    city: "Dongmyo",
    startSeconds: 51,
    endSeconds: 697,
    time: "Day",
  },
  {
    videoId: "qU9rT2yHtOA",
    city: "Myeongdong",
    startSeconds: 55,
    endSeconds: 1220,
    time: "Night",
  },
  {
    videoId: "X6G1KSfVgXs",
    city: "Gangnam",
    startSeconds: 40,
    endSeconds: 2220,
    time: "Night",
  },
  {
    videoId: "dMm2jWlRp0k",
    city: "Euljiro",
    startSeconds: 90,
    endSeconds: 1680,
    time: "Night",
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