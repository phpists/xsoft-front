import { BiLockAlt } from "react-icons/bi";
import { SectionTitle } from "../../../../components/SectionTitle";
import { Select } from "../../../../components/Select/Select";
import {
  useGetRolesQuery,
  useGetStaffInfoQuery,
} from "../../../../store/personal/personal.api";
import { IPerson } from "../Content";

interface Props {
  data: IPerson;
  onChange: (
    field: string,
    value: string | boolean | number | string[]
  ) => void;
  errors: string[];
}

export const Position = ({ data, onChange, errors }: Props) => {
  const { data: info } = useGetStaffInfoQuery({});
  const { data: roles } = useGetRolesQuery({});

  return (
    <div>
      <SectionTitle title="Роль і відділ" />
      <div className="flex items-center gap-3.5">
        <Select
          label="Оберіть роль"
          options={roles?.map(({ id, title }) => ({ title, value: id })) ?? []}
          Icon={<BiLockAlt size={20} className="dark-icon" />}
          className="max-w-[475px] "
          value={data.role_id}
          onChange={(val) => onChange("role_id", val)}
          error={!!errors.includes("role_id")}
        />
        <Select
          label="Оберіть відділ"
          options={
            info?.response.departments.map(({ id, title }) => ({
              title,
              value: id,
            })) ?? []
          }
          value={data.department_id}
          onChange={(val) => onChange("department_id", val)}
          error={!!errors.includes("department_id")}
        />
      </div>
    </div>
  );
};
