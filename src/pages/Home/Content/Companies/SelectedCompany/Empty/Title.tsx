import styled from "styled-components";

export const Title = () => <StyledTitle>Статистика компанії</StyledTitle>;

const StyledTitle = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 22.4px;
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  margin-bottom: 24px;
  color: #111111;
`;
