import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';

// Import Icons
import { IconContext } from 'react-icons';
import { FaGithub } from "react-icons/fa";
import { GiRunningNinja } from "react-icons/gi";
import { MdDirectionsWalk, MdOutlineDirectionsRun, MdChevronLeft } from "react-icons/md";
import { FiVolumeX, FiVolume1, FiVolume2 } from "react-icons/fi";

// Import Styles
import './_App.scss';

import { ReactComponent as WalkingMan } from "./assets/WalkingMan.svg";
import { isVideoLoadingAtom, newVideoSignalAtom, volumeAtom, walkingTypeAtom } from './atoms';
import Noise from './Components/Noise/Noise';
import YoutubePlayer from './Components/YoutubePlayer/YoutubePlayer';
import { VideoProps, WalkingTypes } from './utils/interfaces';
import { Cities, getRandomVideo, VIDEOLIST } from './utils/videolist';

function App() {
  const isVideoLoading = useRecoilValue<boolean>(isVideoLoadingAtom);
  const [isStreetSoundActive, setIsStreetSoundActive] = useState<boolean>(false);
  const [walkingType, setWalkingType] = useRecoilState<WalkingTypes>(walkingTypeAtom);
  const [volume, setVolume] = useRecoilState<number>(volumeAtom);
  const [currVideo, setCurrVideo] = useState<VideoProps>(VIDEOLIST[0]);
  const [newVideoSignal, setNewVideoSignal] = useRecoilState<boolean>(newVideoSignalAtom);
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);
  const [currCity, setCurrCity] = useState<string>("");

  const prevVolume = useRef(0);

  // toggle street sound volume.
  useEffect(() => {
    if (!isStreetSoundActive) {
      setVolume(0);
    } else {
      setVolume(prevVolume.current);
    }
  }, [isStreetSoundActive]);

  // initialize first video.
  useLayoutEffect(() => {
    const initVideo = getRandomVideo("all");
    setCurrVideo(initVideo);
  }, []);

  useLayoutEffect(() => {
    const nextVideo = getRandomVideo("all");
    setCurrVideo(nextVideo);
    setNewVideoSignal(false);
  }, [newVideoSignal]);

  const handleVolume = (event: React.ChangeEvent<HTMLInputElement>) => {
    setVolume(Number(event.target.value));
    prevVolume.current = volume;
  }

  const handleCityClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const selectedCity = (event.currentTarget.textContent || "");
    setCurrCity(selectedCity);
    const nextVideo = getRandomVideo(selectedCity as typeof Cities[number]);
    setCurrVideo(nextVideo);
  }

  const sidebarToggle = () => {
    setIsSidebarOpen((prev) => (!prev));
  }

  return (
    <div className="App">
      {isVideoLoading && <Noise />}
      <div className="video-background">
        <div className="VideoContainer">
          <YoutubePlayer
            videoId={currVideo.videoId}
            city={currVideo.city}
            startSeconds={currVideo.startSeconds}
            endSeconds={currVideo.endSeconds}
          />
        </div>
      </div>
      <div
        className={`SidebarToggleButton ${isSidebarOpen ? `Opened ` : `Closed `}`}
        onClick={sidebarToggle}
      >
        <div className="ButtonWrapper">
          <IconContext.Provider value={{ className: "ChevronIcon" }}>
            <MdChevronLeft />
          </IconContext.Provider>
        </div>
      </div>
      <div className={`Sidebar ${isSidebarOpen ? `Opened ` : `Closed `}`}>
        <div>
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
          <div className="CityListContainer">
            <div className="CitySpan">
              <span>Scroll down for more cities</span>
            </div>
            <div className="CityList">
              <ol>
                {/* Don't mutate the original array */}
                {[...Cities].sort().map((city, idx) => {
                  return (
                    <li>
                      <div
                        className={`City ${currCity === city ? "Current " : " "}`}
                        key={idx}
                        onClick={(event) => handleCityClick(event)}
                      >
                        {city}
                      </div>
                    </li>
                  )
                })}
              </ol>
            </div>
          </div>
          <div className="StreetSoundContainer">
            <div className="EnableSoundContainer">
              <span>Street Sound</span>
              <div
                className={`ToggleButton ${isStreetSoundActive ? "active" : ""}`}
                onClick={() => { setIsStreetSoundActive((prev) => !prev); }}
              >
                {isStreetSoundActive ? "ON" : "OFF"}
              </div>
            </div>
            <div
              className="SoundbarContainer"
              style={{
                visibility: isStreetSoundActive ? "visible" : "hidden",
                opacity: isStreetSoundActive ? "1" : "0",
                transition: "visibility 0.2s ease-in-out, opacity 0.2s ease-in-out",
              }}
            >
              <div className="SoundIconContainer">
                <IconContext.Provider value={{ className: "SoundIcon" }}>
                  {volume === 0 ? <FiVolumeX /> :
                    volume < 50 ? <FiVolume1 /> :
                      <FiVolume2 />}
                </IconContext.Provider>
              </div>
              <input
                type="range"
                name="volume"
                id="volume"
                min="0"
                max="100"
                step="1"
                defaultValue={0}
                onChange={handleVolume}
              />
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
                <div>
                  <div
                    className={`Icon Walking ${walkingType.value === "Walking" ? `` : `Nonactive`}`}
                    onClick={() => setWalkingType({ value: "Walking" })}
                  >
                    <MdDirectionsWalk />
                  </div>
                  <div className={`SpeedTooltip ${walkingType.value === "Walking" ? `opacity1` : `opacity0`}`}>
                    <span>1x</span>
                  </div>
                </div>
                <div>
                  <div
                    className={`Icon Running ${walkingType.value === "Running" ? `` : `Nonactive`}`}
                    onClick={() => setWalkingType({ value: "Running" })}
                  >
                    <MdOutlineDirectionsRun />
                  </div>
                  <div className={`SpeedTooltip ${walkingType.value === "Running" ? `opacity1` : `opacity0`}`}>
                    <span>1.5x</span>
                  </div>
                </div>
                <div>
                  <div
                    className={`Icon Sprinting ${walkingType.value === "Sprinting" ? `` : `Nonactive`}`}
                    onClick={() => setWalkingType({ value: "Sprinting" })}
                  >
                    <GiRunningNinja />
                  </div>
                  <div className={`SpeedTooltip ${walkingType.value === "Sprinting" ? `opacity1` : `opacity0`}`}>
                    <span>2x</span>
                  </div>
                </div>
              </IconContext.Provider>
            </div>
          </div>
        </div>
        <div>
          <a
            href={`https://www.youtube.com/watch?v=${currVideo.videoId}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="VideoSourceWrapper">
              <span>Go to Source Video</span>
            </div>
          </a>
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
    </div >
  );
}

export default App;
