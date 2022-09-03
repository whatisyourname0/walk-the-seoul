import { useState } from 'react';
import { useRecoilState } from 'recoil';

// Import Icons
import { IconContext } from 'react-icons';
import { FaGithub } from "react-icons/fa";
import { GiRunningNinja } from "react-icons/gi";
import { MdDirectionsWalk, MdOutlineDirectionsRun } from "react-icons/md";

// Import Styles
import './_App.scss';

import { ReactComponent as WalkingMan } from "./assets/WalkingMan.svg";
import { isVideoLoadingAtom, volumeAtom, walkingTypeAtom } from './atoms';
import Noise from './Components/Noise/Noise';
import YoutubePlayer from './Components/YoutubePlayer/YoutubePlayer.jsx';
import { WalkingTypes } from './utils/interfaces';

function App() {
  const [isVideoLoading, setIsVideoLoading] = useRecoilState<boolean>(isVideoLoadingAtom);
  const [isStreetSoundActive, setIsStreetSoundActive] = useState<boolean>(false);
  const [walkingType, setWalkingType] = useRecoilState<WalkingTypes>(walkingTypeAtom);
  const [volume, setVolume] = useRecoilState<number>(volumeAtom);

  const VIDEO_ID = "UtrUouDU7oQ";

  return (
    <div className="App">
      {isVideoLoading && <Noise />}
      <div className="TransparentLayer"></div>
      <div className="video-background">
        <div className="VideoContainer">
          {/* TODO:Do Youtube Player Configuration */}
          <YoutubePlayer embedID={VIDEO_ID} />
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
