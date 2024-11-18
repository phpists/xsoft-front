import styled from "styled-components";
import { Download } from "./Download";

interface Props {
  size?: number;
  className?: string;
  download?: boolean;
  firstName?: string;
  lastName?: string;
  color?: string;
}

export const Avatar = ({
  size = 24,
  className,
  download,
  firstName = "О",
  lastName = "М",
  color = "#2eb062",
}: Props) => (
  <StyledAvatar
    size={size}
    className={`${className}`}
    style={{ background: color }}
  >
    {firstName[0]}
    {lastName[0]}
    {download && <Download />}
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
  position: relative;
  text-transform: uppercase;
`;
