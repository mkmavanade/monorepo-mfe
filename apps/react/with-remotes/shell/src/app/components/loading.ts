import { useLottie } from "lottie-react";
import loadingAnimation from '../../assets/loading-gradient.json'


interface ILoading {
  width?: string;
  height?: string;
}

export const Loading = ({width, height}: ILoading) => {
  const options = {
    animationData: loadingAnimation,
    loop: true,
    style: {
      width: width ? width : "50px",
      height: height? height : "50px",
    }
  };

  const { View } = useLottie(options);

  return View;
};