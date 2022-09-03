import YouTube from "@u-wave/react-youtube";
import { useEffect, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { isVideoLoadingAtom, volumeAtom, walkingTypeAtom } from "../../atoms";

function YoutubePlayer(props) {
  const { embedID } = props;

  const setIsVideoLoading = useSetRecoilState(isVideoLoadingAtom);
  const walkingType = useRecoilValue(walkingTypeAtom);
  const volume = useRecoilValue(volumeAtom);
  const [isPaused, setIsPaused] = useState(false);
  const [playerElement, setPlayerElement] = useState(null);

  const onPlayerReady = (event) => {
    setPlayerElement(event);
    setIsVideoLoading(false);
  };

  const onPlayerPause = () => {
    setIsVideoLoading(true);
  };

  const onPlayerEnd = () => {
    setIsVideoLoading(true);
  };

  useEffect(() => {
    if (playerElement) {
      const player = playerElement.target;
      if (walkingType.value === "Running") {
        console.log("Switched to Running");
        player.setPlaybackRate(1.5);
      } else if (walkingType.value === "Sprinting") {
        console.log("Switched to Sprinting");
        player.setPlaybackRate(2);
      } else {
        player.setPlaybackRate(1);
      }
    }
  }, [walkingType]);

  return (
    <YouTube
      video={embedID}
      autoplay={true}
      muted={volume === 0 ? true : false}
      controls={false}
      disableKeyboard={true}
      allowFullscreen={false} // Do not display fullscreen button
      annotations={false}
      modestBranding={false}
      playsInline={false}
      showRelatedVideos={false}
      playbackRate={1}
      suggestedQuality="default"
      onReady={onPlayerReady}
      onEnd={onPlayerEnd}
      onPause={onPlayerPause}
      paused={isPaused}
    />
  );
}

export default YoutubePlayer;
