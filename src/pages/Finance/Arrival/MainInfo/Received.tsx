import { BiCalendar, BiUser } from "react-icons/bi";
import { Select } from "../../../../components/Select/Select";
import { Input } from "../../../../components/Input/Input";
import { IMovementsInfoResponseData } from "../../../../types/movements";
import { IProductMovement, IProductMovementItem } from "../Debt";

interface Props {
  info?: IMovementsInfoResponseData;
  data: IProductMovement;
  onChange: (
    field: string,
    value: string | boolean | number | IProductMovementItem[]
  ) => void;
  errors: string[];
}

export const Received = ({ info, data, onChange, errors }: Props) => (
  <div className="flex items-center justify-between mb-3.5">
    <Select
      label="Прийняв"
      options={
        info?.staffs.map(({ id, first_name, last_name }) => ({
          title: `${first_name} ${last_name}`,
          value: id?.toString(),
        })) ?? []
      }
      Icon={<BiUser />}
      className="max-w-[479px]"
      value={data.staff_id}
      onChange={(val) => onChange("staff_id", val)}
      error={!!errors.includes("staff_id")}
      disabled
    />
    <div className="flex items-center gap-2">
      <Input
        label="Дата"
        calendar
        Icon={BiCalendar}
        value={data.date_create}
        onChange={(val) => onChange("date_create", val)}
        error={!!errors.includes("date_create")}
        disabled
      />
      <Input
        label="Час"
        time
        labelActive
        value={data.time_create}
        onChange={(val) => onChange("time_create", val)}
        error={!!errors.includes("time_create")}
        disabled
      />
    </div>
  </div>
);
