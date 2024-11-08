import styled from "styled-components";

interface Props {
  title: string;
  type?: "blue" | "outline";
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
}

export const Button = ({
  title,
  type = "blue",
  disabled,
  className,
  onClick,
}: Props) => (
  <StyledButton
    className={`flex items-center justify-center ${type} ${className}`}
    disabled={disabled}
    onClick={onClick}
  >
    {title}
  </StyledButton>
);

const StyledButton = styled.button`
  height: 44px;
  font-size: 14px;
  font-weight: 600;
  line-height: 19.6px;
  border-radius: 4px;
  width: 100%;
  transition: all 0.3s;
  &.blue {
    background: #0095f6;
    color: #ffffff;
    &:hover {
      background: #006fc9;
    }
  }
  &.outline {
    outline: 1px solid #000000;
    color: #000000;
    &:hover {
      color: #ffffff;
      background: #000000;
    }
  }
`;
