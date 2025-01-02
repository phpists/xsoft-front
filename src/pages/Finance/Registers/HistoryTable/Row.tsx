import styled from "styled-components";
import { ActionButton } from "../../../Items/Circulation/Header/ActionButton";
import { Actions } from "../../../../components/Actions/Actions";
import { useNavigate } from "react-router-dom";

interface Props {
  className?: string;
  type: string;
  casheTitle: string;
  amount: number;
  casheAmount: number;
  userName: string;
  createdAt: string;
  id: number;
  movementId: number;
}

export const Row = ({
  className,
  type,
  casheTitle,
  amount,
  casheAmount,
  userName,
  createdAt,
  id,
  movementId,
}: Props) => {
  const navigate = useNavigate();

  return (
    <>
      <StyledRow className={className}>{createdAt}</StyledRow>
      <StyledRow className={className}>{userName} </StyledRow>
      <StyledRow className={className}>{type}</StyledRow>
      <StyledRow className={className}>{casheTitle}</StyledRow>
      <StyledRow className={className}>{amount}₴</StyledRow>
      <StyledRow className={className}>{casheAmount}₴</StyledRow>
      <StyledRow className={`${className} actions-row`}>
        {type === "Борг" ? (
          <Actions
            options={[
              {
                title: "Редагувати",
                onClick: () =>
                  navigate(
                    `/finance?debt=true&id=${id}&movementId=${movementId}`
                  ),
              },
            ]}
          />
        ) : null}
      </StyledRow>
    </>
  );
};

const StyledRow = styled.div`
  padding: 10px 8px;
  font-size: 12px;
  font-weight: 400;
  line-height: 16.8px;
  letter-spacing: 0.02em;
  color: #111111;
  height: 44px;
  &.actions-row {
    padding: 0 !important;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
