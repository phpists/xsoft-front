import { AddButton } from "../../../../components/AddButton";
import { IMovementsInfoResponseData } from "../../../../types/movements";
import { INIT_ITEM, IProductMovement, IProductMovementItem } from "../Debt";
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
          error={errors.includes("items")}
        />
      ))}
    </div>
  );
};