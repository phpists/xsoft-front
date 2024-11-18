import icon1 from "../../../../assets/tg.svg";
import icon2 from "../../../../assets/viber.png";
import icon3 from "../../../../assets/watsup.svg";
import { Card } from "./Card";

const DATA = [
  { id: "1", icon: icon1 },
  { id: "2", icon: icon2 },
  { id: "3", icon: icon3 },
];

interface Props {
  value: number[];
  onChange: (val: number[]) => void;
}

export const Socmedia = ({ value, onChange }: Props) => {
    
  const handleClick = (index: number) => {
    if (value) {
      onChange(
        value?.includes(index)
          ? value.filter((v) => v !== index)
          : [...value, index]
      );
    }
  };

  return (
    <div className="flex items-center gap-2">
      {DATA?.map(({ icon }, i) => (
        <Card
          key={i}
          icon={icon}
          active={value?.includes(1 + i)}
          onClick={() => handleClick(1 + i)}
        />
      ))}
    </div>
  );
};
