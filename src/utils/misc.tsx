export const parseYoutubeToQuality = (value: string) => {
  if (value === "tiny") {
    return "144p";
  } else if (value === "small") {
    return "240p";
  } else if (value === "medium") {
    return "360p";
  } else if (value === "large") {
    return "480p";
  } else if (value === "auto") {
    return "Auto Select";
  } else {
    return value.substring(2, value.length) + "p";
  }
};

export const parseQualityToYoutube = (value: string) => {
  if (value === "144p") {
    return "tiny";
  } else if (value === "240p") {
    return "small";
  } else if (value === "360p") {
    return "medium";
  } else if (value === "480p") {
    return "large";
  } else if (value === "Auto Select") {
    return "auto";
  } else {
    return "hd" + value.replace("p", "");
  }
};