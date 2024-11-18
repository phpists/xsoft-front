import styled from "styled-components";

interface Props {
  icon: string;
  active: boolean;
  onClick: () => void;
}

export const Card = ({ icon, active, onClick }: Props) => (
  <StyledCard
    className={`flex items-center justify-center ${active && "active"}`}
    onClick={onClick}
  >
    <img src={icon} alt="" />
  </StyledCard>
);

const StyledCard = styled.button`
  width: 54px;
  height: 54px;
  border-radius: 8px;
  border: 1px solid #dbdbdb;
  transition: all 0.2s;
  background: #fff;
  img {
    height: 16px;
  }
  &.active {
    border: 1px solid #0095f6;
  }
`;
