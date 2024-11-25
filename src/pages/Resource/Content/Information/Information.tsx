import styled from "styled-components";
import { SectionTitle } from "../../../../components/SectionTitle";
import { Input } from "../../../../components/Input/Input";
import { Locations } from "./Locations/Locations";
import { Service } from "./Service/Service";
import { Divider } from "../Divider";
import { Files } from "../../../../components/Files/Files";
import { Additionally } from "./Additionally";
import { Button } from "../../../../components/Button";

export const Information = () => (
  <StyledInformation>
    <SectionTitle title="Основна інформація" />
    <div className="flex items-center gap-3.5 w-max mb-[34px]">
      <Input label="Назва" className="w-[479px]" />
      <Input
        label="Кількість "
        className="w-[92px]"
        labelActive
        number
        value={1}
      />
    </div>
    <Locations />
    <Service />
    <Divider />
    <Files />
    <Divider />
    <Additionally />
    <Button title="Зберегти зміни" className="ml-auto !w-max" />
  </StyledInformation>
);

const StyledInformation = styled.div`
  background: #fff;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 34px;
  border-radius: 0 0 16px 0;
  .vendors-select {
    .value {
      max-width: 300px;
    }
  }
`;
