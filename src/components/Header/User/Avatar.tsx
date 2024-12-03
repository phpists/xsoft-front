import styled from "styled-components";
import avatar from "../../../assets/avatar.png";

interface Props {
  firstName: string;
  lastName: string;
  color?: string;
}

export const Avatar = ({ firstName, lastName, color = "#2eb062" }: Props) => (
  <StyledAvatar
    className="flex items-center justify-center gap-[1px]"
    style={{ background: color }}
  >
    {firstName[0]}
    <span>{lastName[0]}</span>
  </StyledAvatar>
);

interface StyledAvatarProps {
  avatar?: string;
}

const StyledAvatar = styled.div<StyledAvatarProps>`
  width: 32px;
  height: 32px;
  border-radius: 100%;
  background: url(${({ avatar }) => avatar}) center/cover no-repeat, #2eb062;
  font-size: 12px;
  font-weight: 600;
  line-height: 14px;
  text-align: left;
  color: #ffffff;
  text-transform: capitalize;
`;
