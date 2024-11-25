import { SectionTitle } from "../../pages/Client/Content/SectionTitle";
import { AddButton } from "../../pages/Client/Content/Profile/AddButton";
import { Dropzone } from "./Dropzone";
import styled from "styled-components";

export interface MediaFile {
  file?: File | undefined;
  url: string;
  id?: number;
}
interface Props {
  onAdd?: (data: MediaFile[]) => void;
  value?: MediaFile[];
}

export const Files = ({ onAdd, value }: Props) => {
  // url: URL.createObjectURL(photos[i])

  const handleAddFile = (files: FileList | null | File[]) => {
    let filesList: MediaFile[] = [];

    if (files && value && onAdd) {
      for (let i = 0; i < files.length; i++) {
        const ACCEPTED_TYPES = ["image"];
        if (ACCEPTED_TYPES.includes(files[i]?.type?.split("/")?.[0])) {
          filesList.push({
            file: files[i],
            url: URL.createObjectURL(files[i]),
          });
        }
      }
      onAdd([...value, ...filesList]);
    }
  };

  return (
    <StyledFiles>
      <div className="flex items-center justify-between mb-[22px]">
        <SectionTitle title="Медіа матеріали:" />
        <div className="add-button">
          <AddButton title="Додати файл" />
          <input
            type="file"
            accept=".jpg,.png"
            onChange={(e) => handleAddFile(e.target.files)}
          />
        </div>
      </div>
      <Dropzone onAdd={handleAddFile} />
    </StyledFiles>
  );
};

const StyledFiles = styled.div`
  .add-button {
    position: relative;
    cursor: pointer;
    input {
      position: absolute;
      opacity: 0;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      cursor: pointer;
    }
  }
`;
