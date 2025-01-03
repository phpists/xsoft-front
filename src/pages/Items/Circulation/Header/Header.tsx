import styled from "styled-components";
import { Title } from "../../Title";
import { Actions } from "./Actions/Actions";
import { AddButton } from "./AddButton";
import { BiCartAlt, BiMinus, BiPlus } from "react-icons/bi";
import { Button } from "./Button";

interface Props {
  onChangeCategory: (val: number) => void;
  search: string;
  onSearch: (val: string) => void;
}

export const Header = ({ onChangeCategory, search, onSearch }: Props) => {
  return (
    <StyledHeader>
      <div className="flex items-center justify-between mb-1">
        <Title title="Обіг товарів" />
        <Actions search={search} onSearch={onSearch} />
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3.5">
          {/* <CalendarFilter /> */}
          {/* <Select
            label="Тип операцій"
            options={[
              { title: "Списання", value: "Списання" },
              { title: "Прихід", value: "Прихід" },
              { title: "Продаж", value: "Продаж" },
            ]}
            className="type-select"
          /> */}
        </div>
        <div className="flex items-center gap-3.5">
          {" "}
          <AddButton onClick={() => onChangeCategory(5)} />
          <Button
            title="Прихід"
            Icon={BiPlus}
            color="blue"
            onClick={() => onChangeCategory(7)}
          />
          <Button
            title="Списаня"
            Icon={BiMinus}
            onClick={() => onChangeCategory(6)}
          />
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
