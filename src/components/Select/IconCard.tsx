import styled from "styled-components";

interface Props {
  Icon: any;
}

export const IconCard = ({ Icon }: Props) => (
  <StyledIconCard className="flex items-center justify-center">
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
`;
