import { BiMap, BiTrash } from "react-icons/bi";
import { Input } from "../../../../../components/Input/Input";
import { Select } from "../../../../../components/Select/Select";
import { useAppSelect } from "../../../../../hooks/redux";
import styled from "styled-components";

interface Props {
  value: number[];
  onChange: (val: number[]) => void;
}

export const Card = ({ value, onChange }: Props) => {
  const { selectedCompany } = useAppSelect((state) => state.app);
  const { companies } = useAppSelect((state) => state.companies);

  return (
    <StyledCard className="flex items-center gap-3.5 mb-[22px]">
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
        multiselect
        multiselectValue={value}
        onChangeMultiselect={(val) => onChange(val.map((v) => Number(v)))}
      />
    </StyledCard>
  );
};

const StyledCard = styled.div`
  .dropdown {
    width: 100%;
  }
`;
