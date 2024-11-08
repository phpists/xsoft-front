import styled from "styled-components";
import uaIcon from "../../../../assets/ua.svg";

export const Country = () => (
  <StyledCountry className="flex items-center justify-center">
    <img src={uaIcon} alt="" />
  </StyledCountry>
);

const StyledCountry = styled.div`
  height: 54px;
  height: 54px;
  background: #cdd4db80;
  img {
    width: 26px;
  }
`;
