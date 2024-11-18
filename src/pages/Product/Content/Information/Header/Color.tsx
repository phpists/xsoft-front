import styled from "styled-components";
import { ColorPicker } from "../../../../../components/ColorPicker";

interface Props {
  value: string;
  onChange: (val: string) => void;
}

export const Color = ({ value, onChange }: Props) => (
  <StyledColor className="flex items-center gap-3.5">
    <span>Колір аватара</span>
    <ColorPicker value={value} onChange={onChange} />
  </StyledColor>
);

const StyledColor = styled.div`
  font-size: 12px;
  font-weight: 400;
  line-height: 16.8px;
  letter-spacing: 0.02em;
  color: #111111;
`;
