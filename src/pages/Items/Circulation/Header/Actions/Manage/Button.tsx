import styled from "styled-components";

interface Props {
  title: string;
  Icon: any;
  color?: "blue";
}

export const Button = ({ title, Icon, color }: Props) => (
  <StyledButton className={`flex items-center gap-1 ${color}`}>
    <Icon />
    {title}
  </StyledButton>
);

const StyledButton = styled.button`
  font-size: 12px;
  font-weight: 700;
  line-height: 16.8px;
  letter-spacing: 0.02em;
  background: #ffffff;
  border-radius: 4px;
  transition: all 0.3s;
  padding: 8.5px 14px;
  path: {
    fill: #000000;
  }
  &:hover {
    background: #000;
    color: #fff;
    path: {
      fill: #fff;
    }
  }
  &.blue {
    background: #0095f6;
    color: #fff;
    &:hover {
      background: #1a77f2 !important;
    }
    path: {
      fill: #fff !important;
    }
  }
`;
