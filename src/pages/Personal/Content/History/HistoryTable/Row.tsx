import styled from "styled-components";
import { Avatar } from "../../../../../components/Avatar/Avatar";

interface Props {
  className?: string;
}

export const Row = ({ className }: Props) => (
  <>
    <StyledRow className={`!pl-3.5 ${className}`}>
      <div>30.03.2024</div>
      <span>17:01</span>
    </StyledRow>
    <StyledRow className={className}>
      {" "}
      <div>Укладка</div>
      <span>Послуга</span>
    </StyledRow>
    <StyledRow className={className}>
      <div className="flex items-center gap-2">
        <Avatar />
        <div className="text-nowrap">Ольга Михайлова</div>
      </div>
    </StyledRow>
    <StyledRow className={className}>Каса 1</StyledRow>
    <StyledRow className={className}>350.00 ₴</StyledRow>
    <StyledRow className={className}>2%</StyledRow>
    <StyledRow className={className}>1</StyledRow>
  </>
);

const StyledRow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px 8px;
  font-size: 12px;
  font-weight: 400;
  line-height: 16.8px;
  letter-spacing: 0.02em;
  color: #111111;
  height: 44px;
  span {
    display: block;
    font-size: 10px;
    font-weight: 400;
    line-height: 14px;
    letter-spacing: 0.02em;
    color: #737373;
  }
`;
