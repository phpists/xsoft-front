import styled from "styled-components";
import { useDropzone } from "react-dropzone";
import { BiDownload } from "react-icons/bi";

interface Props {
  onAdd: (files: FileList | null | File[]) => void;
}

export const Dropzone = ({ onAdd }: Props) => {
  const onDrop = (acceptedFiles: File[]) => {
    onAdd(acceptedFiles);
  };
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
  });

  return (
    <StyledDropzone>
      {" "}
      <div {...getRootProps({ className: "dropzone", accept: ".jpg,.png" })}>
        <input {...getInputProps()} accept=".jpg,.png" />
        <BiDownload size={24} />
        <p>
          Завантажте сюди файли. 100 MB максимальний розмір файлу в форматі JPG
          або PNG
        </p>
      </div>
    </StyledDropzone>
  );
};

const StyledDropzone = styled.div`
  .dropzone {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 14px;
    border-radius: 8px;
    border: 1px dashed #dbdbdb;
    padding: 24px;
    font-size: 12px;
    font-weight: 400;
    line-height: 16.8px;
    letter-spacing: 0.02em;
    text-align: center;
    color: #111111;
    cursor: pointer;
    path {
      fill: #dbdbdb;
    }
  }
`;
