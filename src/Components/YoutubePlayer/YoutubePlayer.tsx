import { useEffect } from "react";
import YouTube, { YouTubeProps } from "react-youtube";
import { useRecoilState, useRecoilValue } from "recoil";
import { isVideoLoadingAtom, walkingTypeAtom } from "../../atoms";
import { WalkingTypes } from "../../utils/interfaces";
import "./_YoutubePlayer.scss";

interface IYoutubePlayerProps {
  embedID: string
}

function YoutubePlayer(props: IYoutubePlayerProps) {

  const [isVideoLoading, setIsVideoLoading] = useRecoilState<boolean>(isVideoLoadingAtom);
  const { embedID } = props;
  const walkingType = useRecoilValue<WalkingTypes>(walkingTypeAtom);

  const opts: YouTubeProps['opts'] = {
    height: "100%",
    width: "100%",
    playerVars: {
      mute: 1, // mute sound, this guarantees autoplay feature
      autoplay: 1, // enable autoplay
      controls: 0, // disable control panel
      disablekb: 1, // disable keyboard control
      enablejsapi: 1, // enable js api(important)!
      fs: 0, // no fullscreen button
      iv_load_policy: 3, // no video special effects
      modestbranding: 1, // no youtube logo on control bar
      rel: 0, // no related video recommendations
    }
  }

  const onPlayerReady: YouTubeProps['onReady'] = (event) => {
    event.target.playVideo();
  }

  const onPlayerEnd: YouTubeProps['onEnd'] = (event) => {
    event.target.stopVideo(0);
  }

  const onPlayerPlay: YouTubeProps['onPlay'] = (event) => {
    setIsVideoLoading(false);
  }

  return (
    <YouTube
      videoId={embedID}
      opts={opts}
      onReady={onPlayerReady}
      onEnd={onPlayerEnd}
      onPlay={onPlayerPlay}
    />
  )
};

export default YoutubePlayer;