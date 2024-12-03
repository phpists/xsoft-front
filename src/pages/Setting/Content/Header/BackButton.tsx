import { NavLink, useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

export const BackButton = () => {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate(-1)} className="cursor-pointer">
      <BiArrowBack size={20} />
    </div>
  );
};
