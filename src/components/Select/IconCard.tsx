import styled from "styled-components";

interface Props {
  Icon: any;
  rightIcon?: boolean;
}

export const IconCard = ({ Icon, rightIcon }: Props) => (
  <StyledIconCard
    className={`flex items-center justify-center ${rightIcon && "fullIcon"}`}
  >
    {Icon}
  </StyledIconCard>
);

const StyledIconCard = styled.div`
  width: 36px;
  height: 36px;
  background: #efefef;
  border-radius: 4px;
  flex-shrink: 0;
  path {
    fill: #737373;
  }
  &.fullIcon {
    height: 52px;
    width: 52px;
    margin-left: -10px;
    path {
      fill: #111;
    }
  }
`;
