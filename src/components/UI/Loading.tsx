import { FunctionComponent } from "react";
import LoadGif from "../../assets/loading-sc.gif";

interface ILoadingProps {
  size?: string;
}

const Loading: FunctionComponent<ILoadingProps> = ({ size = "240" }) => {
  return (
    <div
      style={{ width: size + "px" }}
      className={`min relative h-[${size}px] mx-auto`}
    >
      <img src={LoadGif} alt="" />
    </div>
  );
};

export default Loading;
