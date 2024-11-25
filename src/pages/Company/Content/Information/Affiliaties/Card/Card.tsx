import styled from "styled-components";
import { Header } from "./Header";
import {
  IPhone,
  PhonesInput,
} from "../../../../../../components/PhonesInput/PhonesInput";
import { BiMap } from "react-icons/bi";
import { Input } from "../../../../../../components/Input/Input";

interface Props {
  title: string;
  onDelete: () => void;
  phones: IPhone[];
  onChangePhones: (phones: IPhone[]) => void;
  number: number;
  name: string;
  onChangeName: (val: string | number) => void;
  onEditMap: () => void;
}

export const Card = ({
  title,
  onDelete,
  phones,
  onChangePhones,
  number,
  name,
  onChangeName,
  onEditMap,
}: Props) => (
  <StyledCard>
    <Header onDelete={onDelete} number={number} />
    <Input
      label="Назва"
      value={name}
      onChange={onChangeName}
      className="!max-w-[490px] mb-3.5 bg-white"
    />
    <PhonesInput data={phones} onChange={onChangePhones} />
    <Input
      label="Адреса"
      value={title}
      Icon={BiMap}
      className="!max-w-[490px] mt-3.5 bg-white"
      noCheck
      onFocus={onEditMap}
    />
  </StyledCard>
);

const StyledCard = styled.div`
  padding: 14px;
  background: #f7f7f7;
  border-radius: 8px;
  margin-bottom: 14px;
  .phones-input-wrapper {
    max-width: 428px;
  }
`;
