import { BiTrash } from "react-icons/bi";
import { Actions as ActionsButton } from "../../../../../components/Actions/Actions";
import { DeleteButton } from "./DeleteButton";
import { useAppSelect } from "../../../../../hooks/redux";

export const Actions = () => {
  const { user } = useAppSelect((state) => state.auth);
  return (
    <div className="flex items-center gap-6">
      {user?.role_id === 3 ? <DeleteButton /> : null}
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
};
