import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";

const BackTo: FunctionComponent = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="flex py-3">
      <button
        className="flex items-center gap-4 hover:text-[#0080ff] tr-2"
        onClick={goBack}
      >
        <FontAwesomeIcon icon={faArrowLeft} />
        <span className="font-medium">Back to</span>
      </button>
    </div>
  );
};

export default BackTo;
