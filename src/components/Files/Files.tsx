import { SectionTitle } from "../../pages/Client/Content/SectionTitle";
import { AddButton } from "../../pages/Client/Content/Profile/AddButton";
import { Dropzone } from "./Dropzone";

export const Files = () => (
  <div>
    <div className="flex items-center justify-between mb-[22px]">
      <SectionTitle title="Медіа матеріали:" />
      <AddButton title="Додати файл" />
    </div>
    <Dropzone />
  </div>
);
