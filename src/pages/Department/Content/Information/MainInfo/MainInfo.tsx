import { Input } from "../../../../../components/Input/Input";
import { SectionTitle } from "../../../../../components/SectionTitle";
import { Branches } from "./Branches/Branches";

export const MainInfo = () => (
  <div>
    <SectionTitle title="Основна інформація" />
    <Input label="Назва" className="max-w-[479px] mb-[34px]" required />
    <Branches />
  </div>
);
