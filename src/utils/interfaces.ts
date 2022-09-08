import { Cities } from "./videolist";

export interface WalkingTypes {
  value: "Standing" | "Walking" | "Running" | "Sprinting";
}

type City = typeof Cities[number];

export interface VideoProps {
  videoId: string;
  city: City | Array<City>;
  time: "Day" | "Night";
  startSeconds: number;
  endSeconds: number;
}
