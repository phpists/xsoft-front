import styled from "styled-components";

interface Props {
  color: "green" | "purple";
  title: string;
}

export const ColorTag = ({ color, title }: Props) => (
  <StyledColorTag className={color}>{title}</StyledColorTag>
);

const StyledColorTag = styled.div`
  padding: 4px;
  font-size: 10px;
  font-weight: 700;
  line-height: 14px;
  letter-spacing: 0.02em;
  border-radius: 4px;
  &.green {
    background: #2eb06233;
    color: #2eb062;
  }
  &.purple {
    background: #6362ff33;
    color: #6362ff;
  }
  &.red {
    background: #ed5e1e33;
    color: #ed5e1e;
  }
`;
