import styled from "styled-components";
import { Color } from "./Color/Color";
import { PersonalData } from "./PersonalData/PersonalData";
import { Divider } from "../Divider";
import { Category } from "./Category";
import { Additional } from "./Additional/Additional";
import { Files, MediaFile } from "../../../../components/Files/Files";
import { Button } from "../../../../components/Button";
import { IClient } from "../Content";
import { IPhone } from "../../../../components/PhonesInput/PhonesInput";

interface Props {
  data: IClient;
  onChange: (
    field: string,
    value: string | boolean | number | IPhone[] | MediaFile[] | string[]
  ) => void;
  onSave: () => void;
  loading: boolean;
  errors: string[];
}

export const Profile = ({ data, onChange, onSave, loading, errors }: Props) => (
  <StyledProfile>
    <Color
      value={data?.color}
      onChange={(val) => onChange("color", val)}
      tags={data?.tags}
      onChangeTags={(val: string[]) => onChange("tags", val)}
      onSave={onSave}
      loading={loading}
    />
    <PersonalData data={data} onChange={onChange} errors={errors} />
    <Divider />
    <Category
      value={data.category_id?.toString()}
      onChange={(val: string | number) => onChange("category_id", Number(val))}
      error={!!errors?.includes("category_id")}
      onAddTag={(val: string) => onChange("tags", [...data.tags, val])}
    />
    <Divider />
    <Additional data={data} onChange={onChange} errors={errors} />
    <Divider />
    <Files
      onAdd={(val: MediaFile[]) => onChange("media", val)}
      value={data?.media}
    />
  </StyledProfile>
);

const StyledProfile = styled.div`
  background: #fff;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 34px;
  .input-icon-card-wrapper {
    flex-shrink: 0;
  }
`;
