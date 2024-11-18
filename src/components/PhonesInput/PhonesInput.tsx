import styled from "styled-components";
import { Phone } from "./Phone/Phone";

export interface IPhone {
  type_id: number[];
  phone: string;
}

export const INIT_PHONE: IPhone = {
  type_id: [],
  phone: "",
};

interface Props {
  data: IPhone[];
  onChange: (data: IPhone[]) => void;
  error?: boolean;
}

export const PhonesInput = ({ data, onChange, error }: Props) => {
  const handleChangePhone = (index: number, val: IPhone) =>
    onChange(data?.map((p, i) => (i === index ? { ...p, ...val } : p)));

  const handleAddPhone = () => onChange([...data, INIT_PHONE]);
  const handleRemove = (index: number) =>
    onChange(data?.filter((p, i) => i !== index));

  return (
    <StyledPhonesInput className="flex flex-col gap-3.5">
      {data?.map((phone: IPhone, i) => (
        <Phone
          key={i}
          phone={phone}
          onChange={(val: IPhone) => handleChangePhone(i, val)}
          onAdd={handleAddPhone}
          onRemove={() => handleRemove(i)}
          isRemove={i !== 0}
          error={error}
        />
      ))}
    </StyledPhonesInput>
  );
};

const StyledPhonesInput = styled.div``;
