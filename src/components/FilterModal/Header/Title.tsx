import { BiSlider } from "react-icons/bi";
import styled from "styled-components";

export const Title = () => (
  <StyledTitle className="flex items-center gap-2">
    <BiSlider size={20} /> <span>Фільтр</span>
  </StyledTitle>
);

const StyledTitle = styled.div`
  font-size: 18px;
  font-weight: 600;
  line-height: 25.2px;
  letter-spacing: 0.02em;
  color: #111111;
`;
