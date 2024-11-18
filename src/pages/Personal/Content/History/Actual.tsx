import { AppointmentCard } from "../../../../components/AppointmentCard/AppointmentCard";
import { SectionTitle } from "../SectionTitle";

export const Actual = () => (
  <div>
    <SectionTitle title="Актуальні записи" />{" "}
    <div className="flex flex-col gap-2">
      <AppointmentCard />
      <AppointmentCard />
    </div>
  </div>
);
