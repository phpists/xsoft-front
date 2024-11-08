import styled from "styled-components";
import avatar from "../../../assets/avatar.png";

export const Avatar = () => <StyledAvatar avatar={avatar} />;

interface StyledAvatarProps {
  avatar: string;
}

const StyledAvatar = styled.div<StyledAvatarProps>`
  width: 32px;
  height: 32px;
  border-radius: 100%;
  background: url(${({ avatar }) => avatar}) center/cover no-repeat;
`;
