import { useState } from "react";
import styled from "styled-components";

interface Props {
  icon: string;
}

export const Card = ({ icon }: Props) => {
  const [active, setActive] = useState(false);

  return (
    <StyledCard
      className={`flex items-center justify-center ${active && "active"}`}
      onClick={() => setActive(!active)}
    >
      <img src={icon} alt="" />
    </StyledCard>
  );
};

const StyledCard = styled.button`
  width: 54px;
  height: 54px;
  border-radius: 8px;
  border: 1px solid #dbdbdb;
  transition: all 0.2s;
  img {
    height: 16px;
  }
  &.active {
    border: 1px solid #0095f6;
  }
`;
