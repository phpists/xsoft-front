import { NavLink } from "react-router-dom";
import styled from "styled-components";

interface Props {
  label?: string;
  error?: string;
  labelLink?: boolean;
  link?: string;
}

export const Label = ({ labelLink, label, link, error }: Props) => (
  <StyledLabel>
    {labelLink && link ? (
      <NavLink className="label link" to={link}>
        {label}
      </NavLink>
    ) : label ? (
      <div className="label">{error ?? label}</div>
    ) : null}
  </StyledLabel>
);

const StyledLabel = styled.div`
  .label {
    font-size: 12px;
    font-weight: 400;
    line-height: 16.8px;
    letter-spacing: 0.02em;
    text-align: left;
    color: #989898;
    margin-top: 6px;
    &.link {
      &:hover {
        color: #0095f6;
      }
    }
  }
`;
