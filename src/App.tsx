import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';

// Import Icons
import { IconContext } from 'react-icons';
import { FaGithub } from "react-icons/fa";
import { FiVolume1, FiVolume2, FiVolumeX } from "react-icons/fi";
import { GiRunningNinja } from "react-icons/gi";
import { MdChevronLeft, MdDirectionsWalk, MdOutlineDirectionsRun } from "react-icons/md";
import { IoSettingsSharp } from "react-icons/io5";

// Import Styles
import './_App.scss';

import { ReactComponent as WalkingMan } from "./assets/WalkingMan.svg";
import { currentQualityAtom, isVideoLoadingAtom, newVideoSignalAtom, qualitySettingsOptionAtom, volumeAtom, walkingTypeAtom } from './atoms';
import Noise from './Components/Noise/Noise';
import YoutubePlayer from './Components/YoutubePlayer/YoutubePlayer';
import { VideoProps, WalkingTypes } from './utils/interfaces';
import { Cities, getRandomVideo, VIDEOLIST } from './utils/videolist';
import useMediaQuery from './hooks/useMediaQuery';
import MobileFooter from './Components/MobileFooter/MobileFooter';

function App() {

  const isVideoLoading = useRecoilValue<boolean>(isVideoLoadingAtom);
  const [isStreetSoundActive, setIsStreetSoundActive] = useState<boolean>(false);
  const [walkingType, setWalkingType] = useRecoilState<WalkingTypes>(walkingTypeAtom);
  const [volume, setVolume] = useRecoilState<number>(volumeAtom);
  const [currVideo, setCurrVideo] = useState<VideoProps>(VIDEOLIST[0]);
  const [newVideoSignal, setNewVideoSignal] = useRecoilState<boolean>(newVideoSignalAtom);
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);
  const [currCity, setCurrCity] = useState<string>("");
  const [isSettingsOpen, setIsSettingsOpen] = useState<boolean>(false);
  const qualitySettingsOption = useRecoilValue<Array<any>>(qualitySettingsOptionAtom);
  const [currentQuality, setCurrentQuality] = useRecoilState(currentQualityAtom);

  const prevVolume = useRef(0);

  const isMobileVertical = useMediaQuery('(max-width: 451px)');

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

  useEffect(() => {
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
    setIsSettingsOpen(false);
  }

  const sidebarToggle = () => {
    setIsSidebarOpen((prev) => (!prev));
  }

  const handleQualityRadioClick = (event: React.MouseEvent<HTMLInputElement>) => {
    if (!isVideoLoading) {
      setCurrentQuality(event.currentTarget.value);
    }
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
        className="QualitySettingsButtonContainer"
        onClick={() => { setIsSettingsOpen((prev) => (!prev)); }}
      >
        <IconContext.Provider
          value={{ className: "QualitySettingsIcon" }}
        >
          <IoSettingsSharp />
          <div
            className="QualitySettingsTooltip"
            style={{
              opacity: isSettingsOpen ? "0" : "0.9",
            }}
          >
            <span>Video Quality settings</span>
            <br /><br />
            <span>Unfortunately, </span>
            <br></br>
            <span>Youtube disabled </span>
            <br></br>
            <span>downgrading quality :(</span>
          </div>
        </IconContext.Provider>
      </div>
      {/* <div
        className="QualitySettingsRadioContainer"
        style={{
          top: isSettingsOpen ? "15px" : "-50%",
          transition: "top 0.2s ease-in-out",
        }}
      >
        {qualitySettingsOption.filter((value) => {
          return value === "Auto Select" || (Number(value.replace("p", "") >= Number(currentQuality.replace("p", ""))))
        }).map((value) => {
          return (
            <div className="QualitySettingsOption">
              <label className='radioButton'>
                <input
                  type="radio"
                  name='quality'
                  id={value}
                  value={value}
                  checked={value === currentQuality}
                  onClick={handleQualityRadioClick}
                />
                <span>{value}</span>
              </label>
            </div>
          );
        })}
      </div> */}
      {!isMobileVertical &&
        (<div
          className={`SidebarToggleButton ${isSidebarOpen ? `Opened ` : `Closed `}`}
          onClick={sidebarToggle}
        >
          <div className="ButtonWrapper">
            <IconContext.Provider value={{
              className: `ChevronIcon ${isSidebarOpen ? `Opened ` : `Closed `}`
            }}>
              <MdChevronLeft />
            </IconContext.Provider>
          </div>
        </div>)}
      {!isMobileVertical ? (
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
      ) : <MobileFooter />}
    </div >
  );
}

export default App;
