import styled from "styled-components";

export const Banner = () => (
  <StyledBanner className="flex">
    <div></div>
  </StyledBanner>
);

const StyledBanner = styled.div`
  padding: 120px 0 0 0;
  width: 100%;
  div {
    background: #000;
    width: 100%;
    height: 100%;
    border-top-left-radius: 16px;
  }
  @media (max-width: 1100px) {
    display: none;
  }
`;
