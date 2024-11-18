import { BiStar, BiTransfer, BiTrash } from "react-icons/bi";
import { Actions as ActionsButton } from "../../../../../components/Actions/Actions";
export const Actions = () => (
  <div className="flex items-center gap-6">
    <button className="p-0.5">
      <BiTransfer size={20} />
    </button>
    <button className="p-0.5">
      <BiTrash size={20} />
    </button>
    <ActionsButton
      options={[
        { title: "Додати в чорний список", onClick: () => null },
        { title: "Заборонити онлайн запис", onClick: () => null },
        { title: "Дозволити борг", onClick: () => null },
      ]}
      className="!w-6 !h-6"
    />
  </div>
);
