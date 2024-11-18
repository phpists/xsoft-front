import styled from "styled-components";
import { ColorPicker } from "../../../../../components/ColorPicker";

interface Props {
  value: string;
  onChange: (color: string) => void;
}

export const ProfileColor = ({ value, onChange }: Props) => (
  <StyledProfileColor className="flex items-center gap-3.5">
    <span>Колір аватара</span>
    <ColorPicker value={value} onChange={onChange} />
  </StyledProfileColor>
);

const StyledProfileColor = styled.div`
  font-size: 12px;
  font-weight: 400;
  line-height: 16.8px;
  letter-spacing: 0.02em;
  color: #111111;
`;
