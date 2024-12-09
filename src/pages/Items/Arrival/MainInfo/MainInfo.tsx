import { BiUser } from "react-icons/bi";
import { Select } from "../../../../components/Select/Select";
import { SectionTitle } from "../SectionTitle";
import { Received } from "./Received";
import { IMovementsInfoResponseData } from "../../../../types/movements";
import { IProductMovement, IProductMovementItem } from "../Arrival";

interface Props {
  info?: IMovementsInfoResponseData;
  data: IProductMovement;
  onChange: (
    field: string,
    value: string | boolean | number | IProductMovementItem[]
  ) => void;
  errors: string[];
}

export const MainInfo = ({ info, data, onChange, errors }: Props) => (
  <div>
    <SectionTitle title="Основна інформація" />
    <Received info={info} data={data} onChange={onChange} errors={errors} />
    <div className="flex items-center gap-3.5">
      <Select
        label="Склад"
        options={
          info?.warehouses.map(({ id, title }) => ({
            title,
            value: id?.toString(),
          })) ?? []
        }
        Icon={<BiUser />}
        value={data.warehouse_id}
        onChange={(val) => onChange("warehouse_id", val)}
        error={!!errors.includes("warehouse_id")}
      />
      <Select
        label="Постачальник"
        options={
          info?.suppliers.map(({ id, first_name, last_name }) => ({
            title: `${first_name} ${last_name}`,
            value: id?.toString(),
          })) ?? []
        }
        Icon={<BiUser />}
        value={data.supplier_id}
        onChange={(val) => onChange("supplier_id", val)}
        error={!!errors.includes("supplier_id")}
      />
    </div>
  </div>
);
