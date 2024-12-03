import { BiX } from "react-icons/bi";
import styled from "styled-components";

interface Props {
  value: string;
  onChange: (val: string) => void;
}

export const Search = ({ value, onChange }: Props) => (
  <StyledSearch className="flex items-center mb-1">
    <input
      type="text"
      placeholder="Пошук"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
    <button onClick={() => onChange("")}>
      <BiX size={16} />
    </button>
  </StyledSearch>
);

const StyledSearch = styled.div`
  background: #efefef;
  border-radius: 8px;
  border: 0.5px solid #dbdbdb;
  padding: 12px 8px;
  input {
    width: 100%;
    font-size: 14px;
    font-weight: 400;
    line-height: 19.6px;
    text-align: left;
    background: none;
    &::placeholder {
      color: #737373;
    }
  }
`;
