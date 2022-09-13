export const parseQuality = (value: string) => {
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