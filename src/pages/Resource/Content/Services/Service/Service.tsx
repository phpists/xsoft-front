import { AddButton } from "../../../../../components/AddButton";
import { SectionTitle } from "../../../../../components/SectionTitle";
import { Card } from "./Card";

export const Service = () => (
  <div>
    <SectionTitle title="Послуга" />
    <Card />
    <Card />
    <Card />
    <AddButton title="Додати послугу" />
  </div>
);
