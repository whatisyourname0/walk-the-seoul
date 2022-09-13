import YouTube from "@u-wave/react-youtube";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  currentQualityAtom,
  isVideoLoadingAtom,
  newVideoSignalAtom,
  qualitySettingsOptionAtom,
  volumeAtom,
  walkingTypeAtom,
} from "../../atoms";
import { parseQuality } from "../../utils/misc";
import { Cities } from "../../utils/videolist";

function YoutubePlayer({ videoId, city, startSeconds, endSeconds }) {
  const setIsVideoLoading = useSetRecoilState(isVideoLoadingAtom);
  const walkingType = useRecoilValue(walkingTypeAtom);
  const volume = useRecoilValue(volumeAtom);
  const [playerElement, setPlayerElement] = useState(null);
  const setNewVideoSignal = useSetRecoilState(newVideoSignalAtom);
  const setQualitySettingsOption = useSetRecoilState(qualitySettingsOptionAtom);
  const [currentQuality, setCurrentQuality] =
    useRecoilState(currentQualityAtom);

  const onPlayerReady = (event) => {
    setPlayerElement(event);
  };

  const onPlayerPause = () => {
    setIsVideoLoading(true);
  };

  const onPlayerEnd = () => {
    setIsVideoLoading(true);
    setNewVideoSignal(true);
  };

  const onPlayerBuffering = () => {
    setIsVideoLoading(true);
  };

  const onPlayerPlaying = () => {
    setIsVideoLoading(false);
    if (playerElement) {
      const player = playerElement.target;

      const setQualityArray = () => {
        const qualitySettingsArray = player.getAvailableQualityLevels();
        const newArray = qualitySettingsArray.map((value) => {
          return parseQuality(value);
        });
        setQualitySettingsOption(newArray);
      };

      const setQuality = () => {
        const getCurQuality = player.getPlaybackQuality();
        setCurrentQuality(parseQuality(getCurQuality));
      };

      setQualityArray();
      setQuality();
    }
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
      video={videoId}
      startSeconds={startSeconds}
      endSeconds={endSeconds}
      autoplay={true} // toggle autoplay
      muted={volume === 0 ? true : false} // mute or do-not mute
      controls={false} // disable control bar
      disableKeyboard={true} // disable keyboard shortcuts
      allowFullscreen={false} // Do not display fullscreen button
      annotations={false} // disable annotations
      modestBranding={false} // disable youtube branding stuffs
      playsInline={false}
      showRelatedVideos={false}
      playbackRate={1} // playback rate. Controlled by setter func. above
      suggestedQuality="default" // auto-set quality
      onReady={onPlayerReady}
      onPlaying={onPlayerPlaying}
      onBuffering={onPlayerBuffering}
      onEnd={onPlayerEnd}
      onPause={onPlayerPause}
    />
  );
}

YoutubePlayer.propTypes = {
  videoId: PropTypes.string.isRequired,
  city: PropTypes.oneOfType([
    PropTypes.oneOf(Cities).isRequired,
    PropTypes.arrayOf(PropTypes.oneOf(Cities)).isRequired,
  ]).isRequired,
  startSeconds: PropTypes.number.isRequired,
  endSeconds: PropTypes.number.isRequired,
};

export default YoutubePlayer;
