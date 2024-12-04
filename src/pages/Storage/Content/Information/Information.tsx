import styled from "styled-components";
import { MainInfo } from "./MainInfo/MainInfo";
import { Button } from "../../../../components/Button";
import { IStorage } from "../Content";

interface Props {
  data: IStorage;
  onChange: (field: string, val: string) => void;
  errors: string[];
  onSave: () => void;
  loading: boolean;
}

export const Information = ({
  data,
  onChange,
  errors,
  onSave,
  loading,
}: Props) => (
  <StyledInformation>
    {/* <Header /> */}
    <MainInfo data={data} onChange={onChange} errors={errors} />
    <Button
      title="Зберегти зміни"
      className="!w-[155px] !ml-auto"
      onClick={onSave}
      disabled={loading}
      loading={loading}
    />
  </StyledInformation>
);

const StyledInformation = styled.div`
  background: #fff;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 34px;
`;
