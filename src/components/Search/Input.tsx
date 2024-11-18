import styled from "styled-components";

interface Props {
  value?: string;
  onChange?: (val: string) => void;
}

export const Input = ({ value, onChange }: Props) => (
  <StyledInput
    placeholder="Пошук"
    value={value}
    onChange={(e) => onChange && onChange(e.target.value)}
  />
);

const StyledInput = styled.input`
  font-family: Noto Sans;
  font-size: 14px;
  font-weight: 400;
  line-height: 19.6px;
  color: #000;
  width: 155px;
  &::placeholder {
    color: #737373;
  }
`;
