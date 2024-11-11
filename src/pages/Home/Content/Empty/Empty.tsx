import { AddButton } from "./AddButton";
import { Title } from "./Title";

export const Empty = () => (
  <div className="flex items-center justify-center flex-col h-full">
    <Title />
    <AddButton />
  </div>
);
