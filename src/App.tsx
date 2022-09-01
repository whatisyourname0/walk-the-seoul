import { useState } from 'react';
import { useRecoilState } from 'recoil';

// Import Icons
import { MdDirectionsWalk, MdOutlineDirectionsRun } from "react-icons/md";
import { GiRunningNinja } from "react-icons/gi";
import { FaGithub } from "react-icons/fa";
import { IconContext } from 'react-icons';

// Import Styles
import './App.scss';

import { isVideoLoadingAtom } from './atoms';
import Noise from './Components/Noise/Noise';
import { ReactComponent as WalkingMan } from "./assets/WalkingMan.svg";
import { WalkingTypes } from './utils/interfaces';
import YouTube, { YouTubeProps } from 'react-youtube';
import useWindowSize from './hooks/useWindowSize';

function App() {
  const [isVideoLoading, setIsVideoLoading] = useRecoilState<boolean>(isVideoLoadingAtom);
  const [isStreetSoundActive, setIsStreetSoundActive] = useState<boolean>(false);
  const [walkingType, setWalkingType] = useState<WalkingTypes>({ value: "Walking" });

  const WindowSize = useWindowSize();

  const youtubeOptions: YouTubeProps['opts'] = {
    height: `${WindowSize.height}`,
    width: `${WindowSize.width}`,
    playerVars: {
      autoplay: 1, // enable autoplay
      controls: 0, // disable player control
      disablekb: 1, // disable keyboard control
      fs: 0, // disable fullscreen button
      iv_load_policy: 3, // disable special effects
      modestbranding: 1, // disable youtube logo,
      playsinline: 0, // full screen in iOS device
      rel: 0, // disable relative video recommendation
      showinfo: 0, // disable video info
    }
  };

  const youtubeOnReady: YouTubeProps['onReady'] = (event) => {
    event.target.playVideo();
  }

  const VIDEO_ID = "YLbSl7Xr0jM";

  return (
    <div className="App">
      {isVideoLoading && <Noise />}
      <div className="TransparentLayer"></div>
      <div className="video-background">
        <div className="VideoContainer">
          {/* TODO:Do Youtube Player Configuration */}
          <YouTube
            videoId={VIDEO_ID}
            opts={youtubeOptions}
            onReady={youtubeOnReady}
          />
        </div>
      </div>
      <div className="Sidebar">
        <div className="TitleContainer">
          <span>Walk the Seoul</span>
        </div>
        <WalkingMan
          width="70"
          height="70"
          fill='#fff'
          stroke='#fff'
          className="WalkingManSvg"
        />
        <div className="StreetSoundContainer">
          <span>Street Sound</span>
          <div
            className={`ToggleButton ${isStreetSoundActive ? "active" : ""}`}
            onClick={() => { setIsStreetSoundActive((prev) => !prev); }}
          >
            {isStreetSoundActive ? "ON" : "OFF"}
          </div>
        </div>
        <div className="WalkingSpeedContainer">
          <div className="WalkingSpeedSpanContainer">
            <span>Walking Speed</span>
          </div>
          <div className="IconContainer">
            <IconContext.Provider
              value={{ className: "IconStyles" }}
            >
              <div
                className={`Icon Walking ${walkingType.value === "Walking" ? `` : `Nonactive`}`}
                onClick={() => setWalkingType({ value: "Walking" })}
              >
                <MdDirectionsWalk />
              </div>
              <div
                className={`Icon Running ${walkingType.value === "Running" ? `` : `Nonactive`}`}
                onClick={() => setWalkingType({ value: "Running" })}
              >
                <MdOutlineDirectionsRun />
              </div>
              <div
                className={`Icon Sprinting ${walkingType.value === "Sprinting" ? `` : `Nonactive`}`}
                onClick={() => setWalkingType({ value: "Sprinting" })}
              >
                <GiRunningNinja />
              </div>
            </IconContext.Provider>

          </div>

        </div>
        <a
          href='https://github.com/whatisyourname0/walk-the-seoul'
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="GithubWrapper">
            <FaGithub />
          </div>
        </a>
      </div>
    </div>
  );
}

export default App;
