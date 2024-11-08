import styled from "styled-components";
import showIcon from "../../../assets/show-eye.svg";
import hideIcon from "../../../assets/hide-eye.svg";

interface Props {
  show: boolean;
  onToggle: () => void;
}

export const TogglePassword = ({ show, onToggle }: Props) => (
  <StyledTogglePassword onClick={onToggle}>
    <img src={show ? hideIcon : showIcon} alt="" />
  </StyledTogglePassword>
);

const StyledTogglePassword = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 0px;
  padding: 10px;
  cursor: pointer;
`;
