import styled from "styled-components";
import { Type } from "./Type";
import { Info } from "./Info";
import { Divider } from "./Divider";
import { Notifications } from "./Notifications";

interface Props {
  type?: string;
}

export const AppointmentCard = ({ type }: Props) => (
  <StyledAppointmentCard className="flex items-center justify-between">
    <div className="flex items-center gap-2">
      <Type type={type} />
      <Info title="Стрижка" subtitle={type ? "Товар" : "Послуга"} />
      {type ? null : (
        <Info title="Олександр Степанов" subtitle="Майстер" avatar="true" />
      )}
      <Divider />
      <Info title="16.04.2024 18:00" subtitle="Дата  і час візиту" />
      <Divider />
      <Info title="00.00 ₴" subtitle="Передплата" />
    </div>
    <Notifications />
  </StyledAppointmentCard>
);

const StyledAppointmentCard = styled.div`
  padding: 14px;
  border-radius: 8px;
  background: #efefef;
`;
