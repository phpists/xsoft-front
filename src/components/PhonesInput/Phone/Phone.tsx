import styled from "styled-components";
import { Input } from "./Input/Input";
import { AddButton } from "./AddButton";
import { Socmedia } from "./Socmedia/Socmedia";

export const Phone = () => (
  <StyledPhone className="flex items-center gap-3.5">
    <Input />
    <AddButton />
    <Socmedia />
  </StyledPhone>
);

const StyledPhone = styled.div``;
