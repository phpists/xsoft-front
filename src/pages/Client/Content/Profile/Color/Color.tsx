import { AddTag } from "../../../../../components/AddTag";
import { ProfileColor } from "./ProfileColor";
import { Tags } from "./Tags";

interface Props {
  value: string;
  onChange: (color: string) => void;
  tags: string[];
  onChangeTags: (val: string[]) => void;
}

export const Color = ({ value, onChange, tags, onChangeTags }: Props) => (
  <div className="flex items-center justify-between gap-3.5">
    <div className="flex items-center justify-between gap-2 py-[9.5px] px-3.5 bg-[#EFEFEF] rounded-[100px] w-full">
      <ProfileColor value={value} onChange={onChange} />
      <Tags tags={tags} onChangeTags={onChangeTags} />
    </div>{" "}
  </div>
);
