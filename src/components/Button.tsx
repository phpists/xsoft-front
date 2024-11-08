import styled from "styled-components";

interface Props {
  title: string;
  className?: string;
  type?: "blue" | "outline";
  Icon?: any;
  onClick?: () => void;
}

export const Button = ({
  title,
  className,
  type = "blue",
  Icon,
  onClick,
}: Props) => (
  <StyledButton
    className={`flex items-center justify-center ${type} ${className}`}
    onClick={onClick}
  >
    {Icon}
    {title}
  </StyledButton>
);

const StyledButton = styled.button`
  width: 100%;
  border-radius: 8px;
  padding: 12px 12px;
  font-size: 14px;
  font-weight: 700;
  line-height: 19.6px;
  text-align: left;
  transition: all 0.3s;
  height: 44px;
  gap: 4px;
  white-space: nowrap;
  &.blue {
    color: #ffffff;
    background: #0095f6;
    &:hover {
      background: #1a77f2;
    }
  }
  &.outline {
    outline: 1px solid #000000;
    color: #111111;
    font-size: 12px;
    &:hover {
      background: #000000;
      color: #ffffff;
    }
  }
  svg {
    flex-shrink: 0;
    height: 14px;
    width: 14px;
  }
`;
