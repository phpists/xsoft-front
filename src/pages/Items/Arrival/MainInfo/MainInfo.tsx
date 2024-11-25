import { BiUser } from "react-icons/bi";
import { Select } from "../../../../components/Select/Select";
import { SectionTitle } from "../SectionTitle";
import { Received } from "./Received";

export const MainInfo = () => (
  <div>
    <SectionTitle title="Основна інформація" />
    <Received />
    <div className="flex items-center gap-3.5">
      <Select label="Склад" options={[]} Icon={<BiUser />} />
      <Select label="Постачальник" options={[]} Icon={<BiUser />} />
    </div>
  </div>
);
