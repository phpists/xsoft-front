import styled from "styled-components";

interface Props {
  size?: number;
  className?: string;
}

export const Avatar = ({ size = 24, className }: Props) => (
  <StyledAvatar size={size} className={className}>
    ОМ
  </StyledAvatar>
);

interface StyledAvatarProps {
  size?: number;
}

const StyledAvatar = styled.div<StyledAvatarProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border-radius: 100%;
  font-size: 10px;
  font-weight: 600;
  line-height: 14px;
  text-align: left;
  color: #ffffff;
  background: #2eb062;
  flex-shrink: 0;
`;
