import { useRecoilState } from 'recoil';
import './App.css';
import { isVideoLoadingAtom } from './atoms';
import Noise from './Components/Noise';

function App() {
  const [isVideoLoading, setIsVideoLoading] = useRecoilState<boolean>(isVideoLoadingAtom);

  return (
    <div className="App">
      {<Noise />}
    </div>
  );
}

export default App;
