import styled from "styled-components";
import { Empty } from "./Empty";
import { Product } from "./Product";
import { Media } from "../../../../components/Media/Media";
import { Location } from "../../../../components/Location";
import { IProduct } from "../../../../types/products";
import { IMedia } from "../../../../types/global";
import { MediaFile } from "../../../../components/Files/Files";
import { useParams } from "react-router-dom";
import { useLazyDeleteProductMediaQuery } from "../../../../store/products/products.api";
import { showMessage } from "../../../../helpers";

interface Props {
  title: string;
  color: string;
  category?: string;
  files: MediaFile[];
  onChangeFiles: (val: MediaFile[]) => void;
}

export const Info = ({
  title,
  color,
  category,
  files,
  onChangeFiles,
}: Props) => {
  const { id: productId } = useParams();
  const [deleteProductMedia] = useLazyDeleteProductMediaQuery();

  const handleDeleteMedia = (index: number, id?: number) => {
    if (id) {
      deleteProductMedia({ id, product_id: productId }).then((resp) => {
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
      {/* <Empty /> */}
      {title?.length === 0 && files?.length === 0 ? <Empty /> : null}
      {title?.length > 0 ? (
        <Product title={title} color={color} category={category} />
      ) : null}
      {/* <Location location="Львів, Дрогобич" className="mt-2.5 mb-6" /> */}
      {files?.length > 0 ? (
        <Media files={files} onDelete={handleDeleteMedia} />
      ) : null}
    </StyledInfo>
  );
};

const StyledInfo = styled.div`
  border-right: 1px solid #dbdbdb;
  padding: 14px;
`;
