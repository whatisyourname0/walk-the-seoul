import { VideoProps } from "./interfaces";

export const Cities = [
  'Jamsil',
  "Dongmyo",
  "Myeongdong",
  "Gangnam",
  "Euljiro",
  "Hapjeong",
  "Hyehwa",
  "Insadong",
  "Cityhall",
  "Gwanghwamoon",
  "Dongdaemoon",
  "Jongro",
  "Apgujeong",
  "Itaewon",
  "Hongdae",
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
  },
  {
    videoId: "tvnIAqAMZQY",
    city: "Hapjeong",
    startSeconds: 60,
    endSeconds: 1080,
    time: "Day",
  },
  {
    videoId: "JHWIoEWtQYo",
    city: "Hyehwa",
    startSeconds: 65,
    endSeconds: 1840,
    time: "Day"
  },
  {
    videoId: "XcXj8vgWwOY",
    city: ["Insadong", "Hyehwa"],
    startSeconds: 90,
    endSeconds: 2340,
    time: "Night",
  },
  {
    videoId: "H_-l8TvKqtI",
    city: ["Myeongdong", "Cityhall", "Gwanghwamoon"],
    startSeconds: 100,
    endSeconds: 2214,
    time: "Day",
  },
  {
    videoId: "QSlhItqvhHs",
    city: "Gwanghwamoon",
    startSeconds: 50,
    endSeconds: 1763,
    time: "Day",
  },
  {
    videoId: "dUSKiFee20o",
    city: ["Gwanghwamoon", "Dongdaemoon", "Jongro"],
    startSeconds: 30,
    endSeconds: 32 * 60,
    time: "Day"
  },
  {
    videoId: "OiSZyH7-es4",
    city: "Gangnam",
    startSeconds: 30,
    endSeconds: 31 * 60,
    time: "Day",
  },
  {
    videoId: "Ard2Hrzjnmc",
    city: "Jamsil",
    startSeconds: 2 * 60,
    endSeconds: 48 * 60,
    time: "Night",
  },
  {
    videoId: "l8JmbHPyDpo",
    city: "Apgujeong",
    startSeconds: 30,
    endSeconds: 22 * 60 + 30,
    time: "Day",
  },
  {
    videoId: "RMSxbTb2SSA",
    city: "Itaewon",
    startSeconds: 30,
    endSeconds: 39 * 60,
    time: "Night",
  },
  {
    videoId: "NbmAVjjtDG8",
    city: "Itaewon",
    startSeconds: 120,
    endSeconds: 29 * 60,
    time: "Night",
  },
  {
    videoId: "yZ3o-njfiBM",
    city: "Hongdae",
    startSeconds: 60,
    endSeconds: 37 * 60 + 20,
    time: "Night",
  },
  {
    videoId: "cvQ_nu810GE",
    city: "Gangnam",
    startSeconds: 150,
    endSeconds: 45 * 60,
    time: "Night",
  },
];

export const getRandomVideo = (locationQuery: typeof Cities[number] | "all"): VideoProps => {
  if (locationQuery === "all") {
    return VIDEOLIST[(Math.random() * VIDEOLIST.length) | 0];
  } else {
    const newVIDEOLIST = VIDEOLIST.filter(video => (video.city === locationQuery || video.city.includes(locationQuery)));
    return newVIDEOLIST[(Math.random() * newVIDEOLIST.length) | 0];
  }
}