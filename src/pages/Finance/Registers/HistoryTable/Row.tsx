import styled from "styled-components";

interface Props {
  className?: string;
}

export const Row = ({ className }: Props) => (
  <>
    <StyledRow className={className}>28.11.2023 12:00</StyledRow>
    <StyledRow className={className}>Вікторія </StyledRow>
    <StyledRow className={className}>Списання</StyledRow>
    <StyledRow className={className}>Каса</StyledRow>
    <StyledRow className={className}>-100₴</StyledRow>
    <StyledRow className={className}>-100₴</StyledRow>
  </>
);

const StyledRow = styled.div`
  padding: 10px 8px;
  font-size: 12px;
  font-weight: 400;
  line-height: 16.8px;
  letter-spacing: 0.02em;
  color: #111111;
  height: 44px;
`;
