import styled from "styled-components";
import { BiBell } from "react-icons/bi";

export const Notifications = () => (
  <StyledNotifications className="flex items-center justify-center">
    <BiBell />
  </StyledNotifications>
);

const StyledNotifications = styled.button`
  padding: 6px;
  cursor: pointer;
  width: 32px;
  height: 32px;
  margin-right: 24px;
  svg {
    height: 20px;
    width: 20px;
  }
`;
