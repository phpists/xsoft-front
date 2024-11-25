import styled from "styled-components";
import { BiSlider } from "react-icons/bi";
import { useState } from "react";
import { FilterModal } from "../../../../../../components/FilterModal/FilterModal";
import { SearchSelect } from "../../../../../../components/SearchSelect/SearchSelect";
import { Toggle } from "../../../../../../components/Toggle";
import { Input } from "../../../../../../components/Input/Input";

export const Filter = () => {
  const [filterOpen, setFilterOpen] = useState(false);
  return (
    <StyledFilter>
      <BiSlider
        size={20}
        className="cursor-pointer"
        onClick={() => setFilterOpen(true)}
      />
      <FilterModal open={filterOpen} onClose={() => setFilterOpen(false)}>
        <div className="flex flex-col gap-3.5">
          <div className="flex flex-col gap-2">
            <SearchSelect
              label="Категорія товарів"
              options={[
                { title: "Стайлінг", value: "Стайлінг" },
                { title: "Догляд", value: "Догляд" },
                { title: "Інструменти", value: "Інструменти" },
              ]}
            />
            <Toggle label="Показувати колонку" />
          </div>
          <div className="divider"></div>
          <div className="flex flex-col gap-2">
            <div>
              {" "}
              <div className="filter-title">Склад</div>
              <SearchSelect
                label="Склад"
                options={[
                  { title: "Склад 1", value: "Склад 1" },
                  { title: "Склад 2", value: "Склад 12" },
                ]}
              />
            </div>
            <Toggle label="Показувати колонку" />
          </div>{" "}
          <div className="divider"></div>
          <div className="flex flex-col gap-2">
            <div>
              <div className="filter-title">Кількість</div>
              <div className="flex items-center gap-3 5">
                <Input
                  label="Кількість"
                  number
                  valueLabel="від"
                  defaultValue="0"
                />
                <Input
                  label="Кількість"
                  number
                  valueLabel="до"
                  defaultValue="10"
                />
              </div>{" "}
            </div>
            <Toggle label="Показувати колонку" />
          </div>
          <div className="divider"></div>
          <div className="flex flex-col gap-2">
            <div>
              <div className="filter-title">Одиниця виміру</div>
              <div className="flex items-center gap-3 5">
                <Input
                  label="Одиниця"
                  className="w-[130px]"
                  defaultValue="ml"
                  options={[
                    { title: "ml", value: "ml" },
                    { title: "kg", value: "kg" },
                  ]}
                />
              </div>
            </div>
            <Toggle label="Показувати колонку" />
          </div>
          <div className="divider"></div>
          <div className="flex flex-col gap-2">
            <div>
              <div className="filter-title">Націнка</div>
              <div className="flex items-center gap-3 5">
                <Input
                  label="Націнка"
                  valueLabel="від"
                  defaultValue="50"
                  sign="UAH"
                />
                <Input
                  label="Націнка"
                  valueLabel="до"
                  defaultValue="50"
                  sign="UAH"
                />
              </div>{" "}
            </div>
            <Toggle label="Показувати колонку" />
          </div>
          <div className="divider"></div>
          <div className="flex flex-col gap-2">
            <div>
              <div className="filter-title">Вартість</div>
              <div className="flex items-center gap-3 5">
                <Input
                  label="Вартість"
                  valueLabel="від"
                  defaultValue="50"
                  sign="UAH"
                />
                <Input
                  label="Вартість"
                  valueLabel="до"
                  defaultValue="50"
                  sign="UAH"
                />
              </div>{" "}
            </div>
            <Toggle label="Показувати колонку" />
          </div>
          <div className="divider"></div>
          <Toggle label="Потребують закупівлі" />
        </div>
      </FilterModal>
    </StyledFilter>
  );
};

const StyledFilter = styled.div``;
