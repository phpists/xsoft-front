import styled from "styled-components";
import { Empty } from "./Empty";
import { User } from "./User";
import { Input } from "../../../../components/Input/Input";
import { BiCreditCard } from "react-icons/bi";
import { Tags } from "./Tags/Tags";
import { Phones } from "../../../../components/Phones/Phones";
import { Media } from "../../../../components/Media/Media";
import { IPhone } from "../../../../components/PhonesInput/PhonesInput";
import { MediaFile } from "../../../../components/Files/Files";
import { useLazyDeleteClientMediaQuery } from "../../../../store/clients/clients.api";
import { useParams } from "react-router-dom";
import { showMessage } from "../../../../helpers";

interface Props {
  files: MediaFile[];
  onChangeFiles: (val: MediaFile[]) => void;
  phones: IPhone[];
  color: string;
  firstName: string;
  lastName: string;
  tags: string[];
  onChangeTags: (val: string[]) => void;
}

export const Info = ({
  files,
  onChangeFiles,
  phones,
  color,
  firstName,
  lastName,
  tags,
  onChangeTags,
}: Props) => {
  const { userId } = useParams();
  const [deleteClientMedia] = useLazyDeleteClientMediaQuery();

  const handleDeleteMedia = (index: number, id?: number) => {
    if (id) {
      deleteClientMedia({ id, user_id: userId }).then((resp) => {
        if (resp.isError) {
          showMessage("error", "Помилка видалення");
        } else {
          onChangeFiles(files?.filter((f) => f.id !== id));
        }
      });
    } else {
      onChangeFiles(files?.filter((f, i) => i !== index));
    }
  };

  return (
    <StyledInfo>
      {firstName?.length === 0 &&
      lastName?.length === 0 &&
      phones?.[0]?.phone?.length === 0 &&
      files?.length === 0 ? (
        <Empty />
      ) : null}
      {firstName?.length > 0 || lastName?.length > 0 ? (
        <User color={color} firstName={firstName} lastName={lastName} />
      ) : null}
      {/* <Input
        label="Баланс"
        Icon={BiCreditCard}
        defaultValue={"00.00 ₴"}
        disabled
        className="balance-input"
      />
      <Tags /> */}
      {tags?.length > 0 ? <Tags tags={tags} onChange={onChangeTags} /> : null}
      {phones?.[0]?.phone?.length > 0 ? <Phones phone={phones?.[0]} /> : null}
      {files?.length > 0 ? (
        <Media files={files} onDelete={handleDeleteMedia} />
      ) : null}
    </StyledInfo>
  );
};

const StyledInfo = styled.div`
  border-right: 1px solid #dbdbdb;
  padding: 14px;
  .balance-input {
    .label {
      left: 52px;
    }
  }
`;
