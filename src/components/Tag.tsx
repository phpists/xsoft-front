import { BiTrash } from "react-icons/bi";
import styled from "styled-components";

interface Props {
  title: string;
  className?: string;
  onDelete?: () => void;
}

export const Tag = ({ title, className, onDelete }: Props) => (
  <StyledTag
    className={`flex items-center ${className} truncate`}
    title={title}
  >
    <span>{title}</span>{" "}
    <button onClick={onDelete}>
      <BiTrash />
    </button>
  </StyledTag>
);

const StyledTag = styled.div`
  padding: 4px 6px;
  background: #efefef;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 500;
  line-height: 16.8px;
  letter-spacing: 0.02em;
  color: #737373;
  span {
    max-width: 150px;
  }
  button {
    width: 0;
    overflow: hidden;
    transition: all 0.3s;
    &:hover {
      path {
        fill: #d92d20;
      }
    }
  }
  &:hover {
    button {
      width: 12px;
      margin-left: 2px;
    }
  }
  &.light {
    background: #dbdbdb;
  }
`;
