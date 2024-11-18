import { BiTrash } from "react-icons/bi";
import styled from "styled-components";

interface Props {
  photo: string;
  onDelete?: () => void;
}

export const Photo = ({ photo, onDelete }: Props) => (
  <StyledPhoto>
    <img src={photo} alt="" />
    {onDelete ? (
      <button onClick={onDelete}>
        <BiTrash />
      </button>
    ) : null}
  </StyledPhoto>
);

const StyledPhoto = styled.div`
  position: relative;
  img {
    width: 88px;
    height: 106px;
    object-fit: cover;
  }
  button {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 44px;
    height: 44px;
    background: #ffffffdf;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: all 0.3s;
  }
  &:hover {
    button {
      opacity: 1;
    }
  }
`;
