import styled from "styled-components";
import { BiSlider } from "react-icons/bi";
import { useState } from "react";
import { FilterModal } from "../../../../../../components/FilterModal/FilterModal";
import { SearchSelect } from "../../../../../../components/SearchSelect/SearchSelect";
import { Toggle } from "../../../../../../components/Toggle";
import { useGetProductInfoQuery } from "../../../../../../store/products/products.api";
import { Input } from "../../../../../../components/Input/Input";

interface Props {
  filter: any;
  onChangeFilter: (field: string, value: string[] | number) => void;
}

export const Filter = ({ filter, onChangeFilter }: Props) => {
  const [filterOpen, setFilterOpen] = useState(false);
  const { data } = useGetProductInfoQuery({});

  return (
    <StyledFilter>
      <BiSlider
        size={20}
        className="cursor-pointer"
        onClick={() => setFilterOpen(true)}
      />
      <FilterModal open={filterOpen} onClose={() => setFilterOpen(false)}>
        <div className="flex flex-col gap-3.5">
          <SearchSelect
            label="Категорія товарів"
            options={
              data?.categories.map(({ title, id }) => ({
                title,
                value: id?.toString(),
              })) ?? []
            }
            value={filter.categories}
            onChange={(val) => onChangeFilter("categories", val)}
          />
          {/* <SearchSelect
            label="Склад"
            options={[
              { title: "Склад 1", value: "Склад 1" },
              { title: "Склад 2", value: "Склад 12" },
            ]}
          /> */}
          <SearchSelect
            label="Одиниця виміру"
            options={
              data?.measurements.map(({ title, id }) => ({
                title,
                value: id?.toString(),
              })) ?? []
            }
            value={filter.measurements}
            onChange={(val) => onChangeFilter("measurements", val)}
          />{" "}
          <div className="flex flex-col gap-2">
            <div>
              <div className="filter-title">Ціна</div>
              <div className="flex items-center gap-3 5">
                <Input
                  label="Від"
                  defaultValue="50"
                  sign="UAH"
                  labelActive
                  number
                  value={filter.min_price}
                  onChange={(val) => onChangeFilter("min_price", Number(val))}
                />
                <Input
                  label="До"
                  defaultValue="50"
                  sign="UAH"
                  labelActive
                  number
                  value={filter.max_price}
                  onChange={(val) => onChangeFilter("max_price", Number(val))}
                />
              </div>{" "}
            </div>
            {/* <Toggle label="Показувати колонку" /> */}
          </div>
        </div>
      </FilterModal>
    </StyledFilter>
  );
};

const StyledFilter = styled.div``;
