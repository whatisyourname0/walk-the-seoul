export interface WalkingTypes {
  value: "Standing" | "Walking" | "Running" | "Sprinting";
}

export interface VideoProps {
  videoId: string;
  city: string;
  startSeconds: number;
  endSeconds: number;
}
