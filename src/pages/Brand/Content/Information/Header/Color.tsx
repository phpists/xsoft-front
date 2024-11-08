import styled from "styled-components";
import { ColorPicker } from "../../../../../components/ColorPicker";

export const Color = () => (
  <StyledColor className="flex items-center gap-3.5">
    <span>Колір аватара</span>
    <ColorPicker />
  </StyledColor>
);

const StyledColor = styled.div`
  font-size: 12px;
  font-weight: 400;
  line-height: 16.8px;
  letter-spacing: 0.02em;
  color: #111111;
`;
