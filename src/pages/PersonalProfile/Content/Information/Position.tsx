import { SectionTitle } from "../../../../components/SectionTitle";
import { Select } from "../../../../components/Select/Select";

export const Position = () => (
  <div>
    <SectionTitle title="Посада і відділ" />
    <div className="flex items-center gap-3.5">
      <Select label="Оберіть посаду" options={[]} />
      <Select label="Оберіть відділ" options={[]} />
    </div>
  </div>
);
