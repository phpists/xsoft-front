import { BiLockAlt } from "react-icons/bi";
import { SectionTitle } from "../../../../components/SectionTitle";
import { Select } from "../../../../components/Select/Select";
import { IPerson } from "../Content";
import { useGetRolesQuery } from "../../../../store/personal/personal.api";

interface Props {
  data: IPerson;
  onChange: (
    field: string,
    value: string | boolean | number | string[]
  ) => void;
  errors: string[];
}

export const Access = ({ data, onChange, errors }: Props) => {
  const { data: roles } = useGetRolesQuery({});

  return (
    <div>
      <SectionTitle title="Права доступу" />
      <Select
        label="Оберіть роль"
        options={roles?.map(({ id, title }) => ({ title, value: id })) ?? []}
        Icon={<BiLockAlt size={20} className="dark-icon" />}
        className="max-w-[475px] mb-2"
        value={data.role_id}
        onChange={(val) => onChange("role_id", val)}
        error={!!errors.includes("role_id")}
      />
      <div className="text-[10px] text-[#737373]">
        Визначте можливості в системі для кожного співробітника
      </div>
    </div>
  );
};
