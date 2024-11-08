import styled from "styled-components";
import uaIcon from "../../assets/ua.svg";

export const Icon = () => (
  <StyledIcon className="flex items-center justify-center">
    <img src={uaIcon} alt="" />
  </StyledIcon>
);

const StyledIcon = styled.div`
  height: 52px;
  width: 52px;
  background: #cdd4db80;
  border-radius: 8px 0 0 8px;
  img {
    width: 26px;
  }
`;
