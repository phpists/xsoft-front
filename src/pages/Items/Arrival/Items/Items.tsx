import { AddButton } from "../../../../components/AddButton";
import { SectionTitle } from "../SectionTitle";
import { Card } from "./Card";

export const Items = () => (
  <div className="mb-[34px]">
    <SectionTitle title="Товар" />
    <Card />
    <Card />
    <Card />
    <AddButton title="Додати товар" />
  </div>
);
