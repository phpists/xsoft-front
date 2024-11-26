import { BiMap, BiTrash } from "react-icons/bi";
import { Input } from "../../../../../components/Input/Input";
import { Select } from "../../../../../components/Select/Select";
import { useAppSelect } from "../../../../../hooks/redux";

export const Card = () => {
  const { selectedCompany } = useAppSelect((state) => state.app);
  const { companies } = useAppSelect((state) => state.companies);

  return (
    <div className="flex items-center gap-3.5 mb-[22px]">
      <Select
        label="Локація"
        options={
          companies
            ?.find((c) => c.id?.toString() === selectedCompany)
            ?.branches?.map(({ location, id }) => ({
              title: location,
              value: id,
            })) ?? []
        }
        Icon={<BiMap size={20} />}
        className="bg-white"
        hideArrow
      />
    </div>
  );
};
