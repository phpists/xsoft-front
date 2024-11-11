import { Actions } from "./Actions";
import { AddButton } from "./AddButton";
import { Setting } from "./Setting";
import { Title } from "./Title";

export const Header = () => (
  <div className="flex items-center justify-between">
    <Title />
    <div className="flex items-center gap-6">
      <AddButton />
      <Setting />
      <Actions />
    </div>
  </div>
);
