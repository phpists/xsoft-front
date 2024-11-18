import styled from "styled-components";
import { SectionTitle } from "../../SectionTitle";
import { Input } from "../../../../../components/Input/Input";
import { BiRefresh } from "react-icons/bi";
import { Select } from "../../../../../components/Select/Select";

export const MainInfo = () => (
  <StyledMainInfo>
    <SectionTitle title="Основна інформація" />
    <Input label="Назва" required className="max-w-[345px] mb-2" />
    <Select
      label="Категорія"
      options={[
        { title: "Барбершоп", value: "1" },
        { title: "Магазин", value: "2" },
      ]}
      className="max-w-[345px]"
      value="1"
    />
  </StyledMainInfo>
);

const StyledMainInfo = styled.div``;
