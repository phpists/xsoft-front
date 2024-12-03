import styled from "styled-components";
import { Product } from "./Product";
import { Location } from "../../../../components/Location";
import { Empty } from "./Empty";
import { IPerson } from "../Content";
import { MediaFile } from "../../../../components/Files/Files";
import { Media } from "../../../../components/Media/Media";
import { showMessage } from "../../../../helpers";
import { useLazyDeleteStaffMediaQuery } from "../../../../store/personal/personal.api";
import { useParams } from "react-router-dom";
import { Phone } from "../../../../components/PhonesInput/Phone/Phone";
import { PhonesInput } from "../../../../components/PhonesInput/PhonesInput";
import { Phones } from "../../../../components/Phones/Phones";

interface Props {
  data: IPerson;
  files: MediaFile[];
  onChangeFiles: (val: MediaFile[]) => void;
}
export const Info = ({ data, files, onChangeFiles }: Props) => {
  const { id: staffId } = useParams();
  const [deleteProductMedia] = useLazyDeleteStaffMediaQuery();

  const handleDeleteMedia = (index: number, id?: number) => {
    if (id) {
      deleteProductMedia({ id, staff_id: staffId }).then((resp) => {
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
      {data.first_name?.length === 0 && data.last_name.length === 0 ? (
        <Empty />
      ) : null}
      {data.first_name?.length > 0 || data.last_name.length > 0 ? (
        <Product
          firstName={data.first_name}
          lastName={data.last_name}
          color={data.color}
        />
      ) : null}
      {files?.length > 0 ? (
        <Media files={files} onDelete={handleDeleteMedia} />
      ) : null}
      {data?.phone ? (
        <Phones phone={{ phone: data?.phone, type_id: [] }} />
      ) : null}
    </StyledInfo>
  );
};

const StyledInfo = styled.div`
  border-right: 1px solid #dbdbdb;
  padding: 14px;
`;
