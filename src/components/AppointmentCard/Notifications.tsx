import styled from "styled-components";
import { Toggle } from "../Toggle";

export const Notifications = () => (
  <StyledNotifications className="flex items-center gap-3.5 select-none	">
    <span>Сповіщення</span>
    <Toggle />
  </StyledNotifications>
);

const StyledNotifications = styled.div`
  font-size: 12px;
  font-weight: 400;
  line-height: 16.8px;
  letter-spacing: 0.02em;
  text-align: left;
  color: #111111;
`;
