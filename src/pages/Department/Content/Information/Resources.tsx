import styled from "styled-components";
import { SectionTitle } from "../../../../components/SectionTitle";
import { Select } from "../../../../components/Select/Select";
import { BiDiamond } from "react-icons/bi";
import { AddButton } from "../../../../components/AddButton";

export const Resources = () => (
  <StyledResources>
    <SectionTitle title="Ресурси" />
    <div className="list">
      <Select label="Ресурс" options={[]} Icon={<BiDiamond />} />
      <Select label="Ресурс" options={[]} Icon={<BiDiamond />} />
      <Select label="Ресурс" options={[]} Icon={<BiDiamond />} />
      <Select label="Ресурс" options={[]} Icon={<BiDiamond />} />
    </div>
    <AddButton title="Додати ресурс" />
  </StyledResources>
);

const StyledResources = styled.div`
  .list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 14px;
    margin-bottom: 14px;
  }
`;
