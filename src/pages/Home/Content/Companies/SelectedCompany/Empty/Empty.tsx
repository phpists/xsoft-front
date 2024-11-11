import { Description } from "./Description";
import { Title } from "./Title";

export const Empty = () => (
  <div className="flex flex-col items-center justify-center h-full">
    <Title />
    <Description />
  </div>
);
