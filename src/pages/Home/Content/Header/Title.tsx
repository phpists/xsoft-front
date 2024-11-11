import styled from "styled-components";

export const Title = () => <StyledTitle>Домашня сторінка</StyledTitle>;

const StyledTitle = styled.div`
  font-size: 18px;
  font-weight: 600;
  line-height: 25.2px;
  letter-spacing: 0.02em;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #111111;
`;
