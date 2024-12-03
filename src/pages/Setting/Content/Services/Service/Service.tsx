import { AddButton } from "../../../../../components/AddButton";
import { SectionTitle } from "../../../../../components/SectionTitle";
import { Card } from "./Card";
import { Info } from "./Info";

export const Service = () => (
  <div>
    <SectionTitle title="Послуга" />
    <Card />
    <Info />
    <AddButton title="Додати послугу" />
  </div>
);
