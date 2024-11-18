import styled from "styled-components";
import { Banner } from "./Banner/Banner";
import { SectionTitle } from "../SectionTitle";
import { Divider } from "../Divider";
import { ReferalProgram } from "../ReferalProgram/ReferalProgram";

export const Loyalty = () => (
  <StyledLoyalty className="flex flex-col gap-6">
    <Banner />
    <SectionTitle title="Дисконтна програма" className="!mb-0" />
    <Divider />
    <SectionTitle title="Персональні акції" className="!mb-0" />
    <Divider />
    <SectionTitle title="Сертифікати" className="!mb-0" />
    <ReferalProgram />
  </StyledLoyalty>
);

const StyledLoyalty = styled.div`
  padding: 24px;
  background: #fff;
  border-bottom-right-radius: 16px;
`;
