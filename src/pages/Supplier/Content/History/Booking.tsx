import { AppointmentCard } from "../../../../components/AppointmentCard/AppointmentCard";
import { SectionTitle } from "../SectionTitle";

export const Booking = () => (
  <div>
    <SectionTitle title="Бронювання товарів (Покупки)" />{" "}
    <div className="flex flex-col gap-2">
      <AppointmentCard type="test" />
    </div>
  </div>
);
