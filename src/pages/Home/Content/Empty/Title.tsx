import styled from "styled-components";

export const Title = () => (
  <StyledTitle>
    Привіт, ласкаво просимо на домашню сторінку. <br />У вас ще немає жодної
    створеної компанії.
  </StyledTitle>
);

const StyledTitle = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 22.4px;
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #737373;
  margin-bottom: 24px;
`;
