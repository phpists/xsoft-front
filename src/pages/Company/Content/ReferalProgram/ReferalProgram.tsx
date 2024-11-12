import styled from "styled-components";
import { SectionTitle } from "../SectionTitle";
import { Button } from "./Button";

export const ReferalProgram = () => (
  <StyledReferalProgram className="flex items-center justify-between">
    <SectionTitle title="Реферальна програма" className="!mb-0" />
    <Button />
  </StyledReferalProgram>
);

const StyledReferalProgram = styled.div`
  padding: 14px;
  border-radius: 8px;
  border: 1px solid #dbdbdb;
`;
