import styled from "styled-components";

interface Props {
  className?: string;
  type: string;
  casheTitle: string;
  amount: number;
  casheAmount: number;
  userName: string;
  createdAt: string;
}

export const Row = ({
  className,
  type,
  casheTitle,
  amount,
  casheAmount,
  userName,
  createdAt,
}: Props) => (
  <>
    <StyledRow className={className}>{createdAt}</StyledRow>
    <StyledRow className={className}>{userName} </StyledRow>
    <StyledRow className={className}>{type}</StyledRow>
    <StyledRow className={className}>{casheTitle}</StyledRow>
    <StyledRow className={className}>{amount}₴</StyledRow>
    <StyledRow className={className}>{casheAmount}₴</StyledRow>
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
