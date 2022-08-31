import { useState } from "react";
import { useRecoilState } from "recoil";
import { isVideoLoadingAtom } from "../../atoms";
import "./_Noise.scss";

function Noise() {
  const [videoLoading, setVideoLoading] = useRecoilState<boolean>(isVideoLoadingAtom);

  return (
    videoLoading ? <div className="Noise"></div> : null
  );
}

export default Noise;