import { AddButton } from "../../../../components/AddButton";
import { IMovementsInfoResponseData } from "../../../../types/movements";
import { INIT_ITEM, IProductMovement, IProductMovementItem } from "../Arrival";
import { SectionTitle } from "../SectionTitle";
import { Card } from "./Card";

interface Props {
  info?: IMovementsInfoResponseData;
  data: IProductMovement;
  onChange: (
    field: string,
    value: string | boolean | number | IProductMovementItem[]
  ) => void;
  errors: string[];
}

export const Items = ({ info, data, onChange, errors }: Props) => {
  const handleChangeItem = (
    index: number,
    field: string,
    value: any,
    isObject?: boolean
  ) =>
    onChange(
      "items",
      data.items.map((item, i) =>
        i === index
          ? isObject
            ? { ...item, ...value }
            : { ...item, [field]: value }
          : item
      )
    );

  const handleDeleteItem = (index: number) =>
    onChange(
      "items",
      data.items.filter((item, i) => i !== index)
    );

  return (
    <div className="mb-[34px]">
      <SectionTitle title="Товар" />
      {data.items.map((item, i) => (
        <Card
          key={i}
          hideDelete={i === 0}
          {...item}
          measurementOptions={
            info?.measurements.map(({ title, id }) => ({
              title,
              value: id,
            })) ?? []
          }
          onChange={(field, value, isObject) =>
            handleChangeItem(i, field, value, isObject)
          }
          onDelete={() => handleDeleteItem(i)}
          error={errors.includes("items")}
        />
      ))}
      <AddButton
        title="Додати товар"
        onClick={() => onChange("items", [...data.items, INIT_ITEM])}
      />
    </div>
  );
};
