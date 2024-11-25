import styled from "styled-components";

interface Props {
  Icon: any;
  onClick: () => void;
}

export const ActionButton = ({ Icon, onClick }: Props) => (
  <StyledActionButton
    className="flex items-center justify-center"
    onClick={onClick}
  >
    {Icon}
  </StyledActionButton>
);

const StyledActionButton = styled.button`
  width: 40px;
  height: 34px;
  padding: 7px 10px;
  background: #ffffff;
  border-radius: 4px;
  path {
    fill: #737373;
  }
`;
