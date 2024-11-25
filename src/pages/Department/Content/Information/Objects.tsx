import styled from "styled-components";
import { SectionTitle } from "../../../../components/SectionTitle";
import { Select } from "../../../../components/Select/Select";
import { BiPackage } from "react-icons/bi";
import { AddButton } from "../../../../components/AddButton";

export const Objects = () => (
  <StyledObjects>
    <SectionTitle title="Об'єкти" />
    <div className="list">
      <Select label="Назва об'єкту" options={[]} Icon={<BiPackage />} />
      <Select label="Назва об'єкту" options={[]} Icon={<BiPackage />} />
      <Select label="Назва об'єкту" options={[]} Icon={<BiPackage />} />
      <Select label="Назва об'єкту" options={[]} Icon={<BiPackage />} />
    </div>{" "}
    <AddButton title="Додати об'єкт" />
  </StyledObjects>
);

const StyledObjects = styled.div`
  .list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 14px;
    margin-bottom: 14px;
  }
`;
