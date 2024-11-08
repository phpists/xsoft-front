import styled from "styled-components";

interface Props {
  Icon: any;
}

export const IconCard = ({ Icon }: Props) => (
  <StyledIconCard className="flex items-center justify-center">
    <Icon />
  </StyledIconCard>
);

const StyledIconCard = styled.div`
  width: 54px;
  height: 54px;
  border-right: 1px solid #dbdbdb;
  background: #cdd4db80;
  border-radius: 8px 0 0 8px;
  svg {
    width: 20px;
  }
`;
