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
  "Gwanghwamun",
  "Dongdaemun",
  "Jongro",
  "Apgujeong",
  "Itaewon",
  "Hongdae",
  "Sadang",
  "Yeoido",
  "Namdaemoon",
  "Seoul Station",
  "Dangsan",
  "Hangang",
  "Ttuksum",
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
    city: ["Myeongdong", "Cityhall", "Gwanghwamun"],
    startSeconds: 100,
    endSeconds: 2214,
    time: "Day",
  },
  {
    videoId: "QSlhItqvhHs",
    city: "Gwanghwamun",
    startSeconds: 50,
    endSeconds: 1763,
    time: "Day",
  },
  {
    videoId: "dUSKiFee20o",
    city: ["Gwanghwamun", "Dongdaemun", "Jongro"],
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
  {
    videoId: "5c0FRXrv3iE",
    city: ["Gangnam", "Apgujeong"],
    startSeconds: 120,
    endSeconds: 43 * 60 + 45,
    time: "Night",
  },
  {
    videoId: "aycw_rkAByk",
    city: "Sadang",
    startSeconds: 180,
    endSeconds: 50 * 60,
    time: "Night",
  },
  {
    videoId: "qcFbN3vsOuA",
    city: "Yeoido",
    startSeconds: 4 * 60,
    endSeconds: 32 * 60,
    time: "Night",
  },
  {
    videoId: "-Lfy5sv4a-8",
    city: "Yeoido",
    startSeconds: 60,
    endSeconds: 53 * 60,
    time: "Day",
  },
  {
    videoId: "u8YJOXrEONk",
    city: "Dongmyo",
    startSeconds: 5 * 60 + 48,
    endSeconds: 74 * 60 + 28,
    time: "Day"
  },
  {
    videoId: "-aYDdHhAecg",
    city: "Namdaemoon",
    startSeconds: 3 * 60 + 30,
    endSeconds: 66 * 60 + 30,
    time: "Day"
  },
  {
    videoId: "ly2253j7mKg",
    city: "Jongro",
    startSeconds: 6 * 60,
    endSeconds: 73 * 60 + 20,
    time: "Day",
  },
  {
    videoId: "AEqd7nc3q1E",
    city: "Hongdae",
    startSeconds: 5 * 60,
    endSeconds: 38 ^ 60 + 30,
    time: "Night",
  },
  {
    videoId: "2Vfzt-q0ATI",
    city: "Hapjeong",
    startSeconds: 30,
    endSeconds: 29 * 60,
    time: "Night",
  },
  {
    videoId: "yGUkViPnNi4",
    city: ["Namdaemoon", "Seoul Station"],
    startSeconds: 20,
    endSeconds: 29 * 60,
    time: "Day",
  },
  {
    videoId: "OyLLgfvk2C0",
    city: "Seoul Station",
    startSeconds: 10,
    endSeconds: 28 * 60,
    time: "Day",
  },
  {
    videoId: "lxkGYQXG8Sw",
    city: "Dongdaemun",
    startSeconds: 70,
    endSeconds: 60 * 60,
    time: "Night",
  },
  {
    videoId: "qtD-a8POZMY",
    city: "Dongdaemun",
    startSeconds: 19 * 60 + 30,
    endSeconds: 43 * 60 + 20,
    time: "Night",
  },
  {
    videoId: "hQ_q4rEjNFU",
    city: ["Yeoido", "Hangang"],
    startSeconds: 8 * 60 + 50,
    endSeconds: 61 * 60 + 38,
    time: "Night"
  },
  {
    videoId: "VXbRGz1SpVo",
    city: ["Ttuksum", "Hangang"],
    startSeconds: 5 * 60,
    endSeconds: 44 * 60,
    time: "Day",
  },
  {
    videoId: "1j-lzi3-8Og",
    city: "Dangsan",
    startSeconds: 30,
    endSeconds: 30 * 60,
    time: "Night",
  },
  {
    videoId: "OvYBdLizBak",
    city: "Dangsan",
    startSeconds: 30,
    endSeconds: 10 * 60 + 40,
    time: "Day",
  }
];

export const getRandomVideo = (locationQuery: typeof Cities[number] | "all"): VideoProps => {
  if (locationQuery === "all") {
    return VIDEOLIST[(Math.random() * VIDEOLIST.length) | 0];
  } else {
    const newVIDEOLIST = VIDEOLIST.filter(video => (video.city === locationQuery || video.city.includes(locationQuery)));
    return newVIDEOLIST[(Math.random() * newVIDEOLIST.length) | 0];
  }
}