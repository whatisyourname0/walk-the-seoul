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
  };

  const onPlayerPause = () => {
    setIsVideoLoading(true);
  };

  const onPlayerEnd = () => {
    setIsVideoLoading(true);
  };

  const onPlayerBuffering = () => {
    setIsVideoLoading(true);
  };

  const onPlayerPlaying = () => {
    setIsVideoLoading(false);
  };

  // set video speed
  useEffect(() => {
    if (playerElement) {
      const player = playerElement.target;
      if (walkingType.value === "Running") {
        player.setPlaybackRate(1.5);
      } else if (walkingType.value === "Sprinting") {
        player.setPlaybackRate(2);
      } else {
        player.setPlaybackRate(1);
      }
    }
  }, [walkingType]);

  // set video volume
  useEffect(() => {
    if (playerElement) {
      const player = playerElement.target;
      player.setVolume(volume);
    }
  }, [volume]);

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
      onPlaying={onPlayerPlaying}
      onBuffering={onPlayerBuffering}
      onEnd={onPlayerEnd}
      onPause={onPlayerPause}
      paused={isPaused}
    />
  );
}

export default YoutubePlayer;
