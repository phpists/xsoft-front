import { AddButton } from "../../../../../components/AddButton";
import { SectionTitle } from "../../../../../components/SectionTitle";
import { Card } from "./Card";

export const Personal = () => (
  <div>
    <SectionTitle title="Персонал" />
    <Card />
    <Card />
    <Card />
    <AddButton title="Додати спеціаліста" />
  </div>
);
