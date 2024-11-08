import icon1 from "../../../../assets/tg.svg";
import icon2 from "../../../../assets/viber.png";
import icon3 from "../../../../assets/watsup.svg";
import { Card } from "./Card";

const DATA = [
  { id: "1", icon: icon1 },
  { id: "2", icon: icon2 },
  { id: "3", icon: icon3 },
];

export const Socmedia = () => (
  <div className="flex items-center gap-2">
    {DATA?.map(({ icon }, i) => (
      <Card key={i} icon={icon} />
    ))}
  </div>
);
