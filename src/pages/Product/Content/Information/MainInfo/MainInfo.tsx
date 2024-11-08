import styled from "styled-components";
import { SectionTitle } from "../../SectionTitle";
import { Input } from "../../../../../components/Input/Input";
import { BiRefresh } from "react-icons/bi";

export const MainInfo = () => (
  <StyledMainInfo>
    <SectionTitle title="Основна інформація" />
    <div className="flex items-center justify-between">
      <Input label="Назва" required className="max-w-[479px]" />
      <div className="flex items-center gap-3 5">
        <Input
          label="Артікул"
          required
          className="w-[200px]"
          RightIcon={<BiRefresh size={20} className="m-2.5 shrink-0" />}
        />
        <Input
          label="Одиниця виміру"
          required
          className="w-[160px]"
          defaultValue="ml"
          options={[
            { title: "ml", value: "ml" },
            { title: "kg", value: "kg" },
          ]}
        />
      </div>
    </div>
  </StyledMainInfo>
);

const StyledMainInfo = styled.div``;
