import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

interface IDefButtonBtnProps {
  text?: string;
  className?: string;
  link?: string;
}

const DefButton: FunctionComponent<IDefButtonBtnProps> = ({
  text = "Save",
  className = "",
  link = "",
}) => {
  return (
    <button
      className={`${className} def-btn bg-[#0080ff] text-white py-2 border-[1px] border-[#0080ff] px-8 tr-2 hover:bg-white hover:text-[#0080ff] transition-transform-[0s] active:scale-95`}
    >
      {link ? <Link to={link}>{text}</Link> : <span>{text}</span>}
    </button>
  );
};

export default DefButton;
