import styled from "styled-components";
import { Header } from "./Header/Header";
import { MainInfo } from "./MainInfo/MainInfo";
import { Branches } from "./Branches/Branches";
import { Position } from "./Position";
import { Divider } from "../Divider";
import { Access } from "./Access";
import { Additional } from "./Additional";
import { Files, MediaFile } from "../../../../components/Files/Files";
import { IPerson } from "../Content";
import { IPhone } from "../../../../components/PhonesInput/PhonesInput";
import { Select } from "../../../../components/Select/Select";
import { BiMailSend } from "react-icons/bi";
import { Search } from "./Search";
import { ISearchStaffItemResponse } from "../../../../types/personal";

interface Props {
  data: IPerson;
  onChange: (
    field: string,
    value: string | boolean | number | string[] | IPhone[] | number[]
  ) => void;
  onSave: () => void;
  errors: string[];
  loading: boolean;
  files: MediaFile[];
  onChangeFiles: (val: MediaFile[]) => void;
  selectedUser: ISearchStaffItemResponse | undefined;
  onChangeSelectedUser: (val: ISearchStaffItemResponse | undefined) => void;
}

export const Information = ({
  data,
  onChange,
  onSave,
  errors,
  loading,
  files,
  onChangeFiles,
  selectedUser,
  onChangeSelectedUser,
}: Props) => (
  <StyledInformation>
    {selectedUser ? (
      <>
        {" "}
        <Header
          color={data.color}
          onChangeColor={(val) => onChange("color", val)}
          onSave={onSave}
          loading={loading}
        />
        <MainInfo data={data} onChange={onChange} errors={errors} />
        <Branches
          value={data.branches}
          onChange={(val) => onChange("branches", val)}
        />
        <Position data={data} onChange={onChange} errors={errors} />
        <Divider />
        <Additional data={data} onChange={onChange} errors={errors} />
        <Divider />
        <Files value={files} onAdd={onChangeFiles} />
      </>
    ) : (
      <Search value={selectedUser} onChange={onChangeSelectedUser} />
    )}
  </StyledInformation>
);

const StyledInformation = styled.div`
  background: #fff;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 34px;
`;
