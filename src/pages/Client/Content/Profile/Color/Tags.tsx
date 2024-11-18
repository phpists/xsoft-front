import { AddTag } from "../../../../../components/AddTag";
import { Tag } from "../../../../../components/Tag";

interface Props {
  tags: string[];
  onChangeTags: (val: string[]) => void;
}

export const Tags = ({ tags, onChangeTags }: Props) => {
  return (
    <div className="flex items-center">
      <AddTag onAdd={(val) => onChangeTags([...tags, val])} />
      <div className="flex items-center max-w-[350px] flex-wrap gap-2 ml-2">
        {tags?.map((t, i) => (
          <Tag
            key={i}
            title={t}
            onDelete={() => onChangeTags(tags?.filter((t, j) => i !== j))}
            className="light"
          />
        ))}
      </div>
    </div>
  );
};
