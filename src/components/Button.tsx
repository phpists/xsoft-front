import { BiLoader } from "react-icons/bi";
import styled from "styled-components";

interface Props {
  title: string;
  className?: string;
  type?: "blue" | "outline" | "dark";
  Icon?: any;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
}

export const Button = ({
  title,
  className,
  type = "blue",
  Icon,
  onClick,
  disabled,
  loading,
}: Props) => (
  <StyledButton
    className={`flex items-center justify-center ${type} ${className}`}
    onClick={onClick}
    disabled={disabled}
  >
    {loading && <BiLoader size={20} className="mr-1 animate-spin" />}
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
  &.dark {
    background: #000000;
    color: #ffffff;
  }
  svg {
    flex-shrink: 0;
    height: 14px;
    width: 14px;
    animation-duration: 3s;
  }
  &:disabled {
    opacity: 0.8;
    cursor: not-allowed;
  }
`;
