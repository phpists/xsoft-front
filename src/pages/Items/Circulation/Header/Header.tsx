import styled from "styled-components";
import { Title } from "../../Title";
import { Actions } from "./Actions/Actions";
import { Select } from "../../../../components/Select/Select";
import { CalendarFilter } from "./CalendarFilter";
import { AddButton } from "./AddButton";
import { ActionButton } from "./ActionButton";
import { BiCartAlt, BiStoreAlt } from "react-icons/bi";

export const Header = () => {
  return (
    <StyledHeader>
      <div className="flex items-center justify-between mb-1">
        <Title title="Обіг товарів" />
        <Actions />
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3.5">
          <CalendarFilter />
          <Select
            label="Тип операцій"
            options={[
              { title: "Списання", value: "Списання" },
              { title: "Прихід", value: "Прихід" },
              { title: "Продаж", value: "Продаж" },
            ]}
            className="type-select"
          />
        </div>
        <div className="flex items-center gap-3.5">
          <ActionButton onClick={() => null} Icon={<BiStoreAlt size={20} />} />{" "}
          <ActionButton onClick={() => null} Icon={<BiCartAlt size={20} />} />
          <AddButton />
        </div>
      </div>
    </StyledHeader>
  );
};

const StyledHeader = styled.div`
  margin-bottom: 18px;
  .type-select {
    background: #fff;
    height: 34px;
    gap: 8px;
    border-radius: 4px;
    font-size: 12px;
    font-weight: 500;
    line-height: 16.8px;
    letter-spacing: 0.02em;
  }
`;
