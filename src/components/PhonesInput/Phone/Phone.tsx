import styled from "styled-components";
import { Input } from "./Input/Input";
import { AddButton } from "./AddButton";
import { Socmedia } from "./Socmedia/Socmedia";
import { IPhone } from "../PhonesInput";

interface Props {
  phone: IPhone;
  onChange: (val: IPhone) => void;
  onAdd: () => void;
  onRemove: () => void;
  isRemove?: boolean;
  error?: boolean;
  noAdding?: boolean;
  noSocmedia?: boolean;
}

export const Phone = ({
  phone,
  onChange,
  onAdd,
  onRemove,
  isRemove,
  error,
  noAdding,
  noSocmedia,
}: Props) => (
  <StyledPhone className="flex items-center gap-3.5">
    <Input
      value={phone?.phone}
      onChange={(val: string) => onChange({ ...phone, phone: val })}
      error={error}
    />
    {noAdding ? null : (
      <AddButton onClick={isRemove ? onRemove : onAdd} isRemove={isRemove} />
    )}
    {noSocmedia ? null : (
      <Socmedia
        value={phone.type_id}
        onChange={(val: number[]) => onChange({ ...phone, type_id: val })}
      />
    )}
  </StyledPhone>
);

const StyledPhone = styled.div``;
