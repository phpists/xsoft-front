import { AddButton } from "../../../../../components/AddButton";
import { AddTag } from "../../../../../components/AddTag";
import { Tag } from "../../../../../components/Tag";

interface Props {
  value: string[];
  onChange: (val: string[]) => void;
}

export const Tags = ({ value, onChange }: Props) => (
  <div className="flex items-center gap-3.5">
    <AddTag onAdd={(val) => onChange([...value, val])} />
    <div className="flex items-center max-w-[350px] w-max flex-wrap gap-2 ml-2">
      {value?.map((t, i) => (
        <Tag
          key={i}
          title={t}
          onDelete={() => onChange(value?.filter((t, j) => i !== j))}
          className="light"
        />
      ))}
    </div>
  </div>
);
