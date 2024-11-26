import styled from "styled-components";
import { Input } from "../Input/Input";

interface Props {
  location: string;
  onChange: (val: string) => void;
}

export const Location = ({ location, onChange }: Props) => (
  <StyledLocation>
    <Input
      value={location}
      onChange={(val) => onChange(val.toString())}
      className="input-wrapper"
    />
  </StyledLocation>
);

const StyledLocation = styled.div`
  margin: 20px 0;
  .input-wrapper {
    border: none !important;
    svg {
      display: none;
    }
  }
  input {
    font-size: 20px;
    font-weight: 700;
    line-height: 22.4px;
    color: #111111;
    text-align: center;
    border: none;
    white-space: normal;
  }
`;
