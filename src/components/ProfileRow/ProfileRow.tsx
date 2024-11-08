import styled from "styled-components";
import { Avatar } from "../Avatar";
import { Name } from "./Name";
import { Id } from "./Id";

interface Props {
  className?: string;
}

export const ProfileRow = ({ className }: Props) => (
  <StyledProfileRow className={`flex items-center gap-2 ${className}`}>
    <Avatar />
    <Name />
    <Id />
  </StyledProfileRow>
);

const StyledProfileRow = styled.div`
  padding: 8px;
`;
