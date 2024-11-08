import styled from "styled-components";
import { useDropzone } from "react-dropzone";
import { BiDownload } from "react-icons/bi";
export const Dropzone = () => {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  return (
    <StyledDropzone>
      {" "}
      <div {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} />
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
    path {
      fill: #dbdbdb;
    }
  }
`;
