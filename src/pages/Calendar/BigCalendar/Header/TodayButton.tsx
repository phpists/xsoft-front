import styled from "styled-components";

export const TodayButton = () => (
  <StyledTodayButton>Сьогодні</StyledTodayButton>
);

const StyledTodayButton = styled.button`
  padding: 11.5px 14px;
  height: 40px;
  border-radius: 4px;
  background: #dbdbdb;
  font-size: 12px;
  font-weight: 400;
  line-height: 16.8px;
  letter-spacing: 0.02em;
  color: #111111;
  &:hover {
    background: #d3d2d2;
  }
`;
