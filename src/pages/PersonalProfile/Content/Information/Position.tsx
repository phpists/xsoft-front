import { SectionTitle } from "../../../../components/SectionTitle";
import { Select } from "../../../../components/Select/Select";
import { useGetStaffInfoQuery } from "../../../../store/personal/personal.api";

export const Position = () => {
  const { data: info } = useGetStaffInfoQuery({});

  return (
    <div>
      <SectionTitle title="Посада і відділ" />
      <div className="flex items-center gap-3.5">
        <Select
          label="Оберіть посаду"
          options={
            info?.response.positions.map(({ id, title }) => ({
              title,
              value: id,
            })) ?? []
          }
        />
        <Select
          label="Оберіть відділ"
          options={
            info?.response.departments.map(({ id, title }) => ({
              title,
              value: id,
            })) ?? []
          }
        />
      </div>
    </div>
  );
};
