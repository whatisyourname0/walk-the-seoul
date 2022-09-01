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
      autoplay: 1,
    }
  };

  return (
    <div className="App">
      {isVideoLoading && <Noise />}
      <div className="video-background">
        <div className="videoContainer">
          {/* TODO:Do Youtube Player Configuration */}
          <YouTube
            opts={youtubeOptions}
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
          fill='white'
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
