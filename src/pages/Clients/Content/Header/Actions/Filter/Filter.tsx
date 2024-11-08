import styled from "styled-components";
import { BiSlider } from "react-icons/bi";

export const Filter = () => {
  return (
    <StyledFilter>
      <BiSlider size={20} className="cursor-pointer" />
    </StyledFilter>
  );
};

const StyledFilter = styled.div``;
