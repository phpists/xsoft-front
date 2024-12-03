import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import styled from "styled-components";

export const DateNavigate = () => (
  <StyledDateNavigate className="flex items-center gap-2">
    <button>
      <BiChevronLeft size={16} />
    </button>{" "}
    <span>Вівторок, 25 бер</span>
    <button className="next">
      <BiChevronRight size={16} />
    </button>
  </StyledDateNavigate>
);

const StyledDateNavigate = styled.div`
  font-size: 16px;
  font-weight: 500;
  line-height: 22.4px;
  color: #111111;
  button {
    padding: 12px;
    background: #dbdbdb;
    &:nth-child(1) {
      border-radius: 8px 0 0 8px;
    }
    &.next {
      border-radius: 0 8px 8px 0;
    }
    &:hover {
      background: #d3d2d2;
    }
  }
`;
