import { useAppSelect } from "../../../../hooks/redux";
import { AddButton } from "./AddButton";
import { Title } from "./Title";

export const Empty = () => {
  const { user } = useAppSelect((state) => state.auth);

  return (
    <div className="flex items-center justify-center flex-col h-full">
      <Title />
      {user?.role_id === 3 ? <AddButton /> : null}
    </div>
  );
};
