import { useRecoilState } from 'recoil';
import './App.scss';
import { isVideoLoadingAtom } from './atoms';
import Noise from './Components/Noise/Noise';

function App() {
  const [isVideoLoading, setIsVideoLoading] = useRecoilState<boolean>(isVideoLoadingAtom);

  return (
    <div className="App">
      {isVideoLoading && <Noise />}
      <div className="video-background">

      </div>
      <div className="Sidebar">
        <div className="TitleContainer">
          <span>Lorem ipsum</span>
        </div>
        <div className="StreetSoundContainer">

        </div>
      </div>
    </div>
  );
}

export default App;
