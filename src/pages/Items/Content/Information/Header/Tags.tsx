import { AddButton } from "../../../../../components/AddButton";
import { Tag } from "../../../../../components/Tag";

export const Tags = () => (
  <div className="flex items-center gap-3.5">
    <AddButton title="Додати тег" />
    <div className="flex items-center gap-1">
      <Tag title="Барбер" className="!bg-[#DBDBDB]" />{" "}
      <Tag title="ТОП" className="!bg-[#DBDBDB]" />
    </div>
  </div>
);
