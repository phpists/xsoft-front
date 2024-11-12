import styled from "styled-components";
import icon from "../../../../../../../assets/company.jpg";

export const Avatar = () => <StyledAvatar icon={icon} />;

interface StyledAvatarProps {
  icon: string;
}

const StyledAvatar = styled.div<StyledAvatarProps>`
  height: 64px;
  width: 64px;
  border-radius: 100%;
  background: url(${({ icon }) => icon}) center/cover no-repeat;
`;
