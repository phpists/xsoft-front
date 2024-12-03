import styled from "styled-components";
import { BiSlider } from "react-icons/bi";
import { useState } from "react";
import { FilterModal } from "../../../../../../components/FilterModal/FilterModal";
import { SearchSelect } from "../../../../../../components/SearchSelect/SearchSelect";
import { Toggle } from "../../../../../../components/Toggle";
import { useGetProductInfoQuery } from "../../../../../../store/products/products.api";

export const Filter = () => {
  const [filterOpen, setFilterOpen] = useState(false);
  const { data, refetch } = useGetProductInfoQuery({});

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
            options={[
              { title: "Стайлінг", value: "Стайлінг" },
              { title: "Догляд", value: "Догляд" },
              { title: "Інструменти", value: "Інструменти" },
            ]}
          />
          <SearchSelect
            label="Склад"
            options={[
              { title: "Склад 1", value: "Склад 1" },
              { title: "Склад 2", value: "Склад 12" },
            ]}
          />
          <SearchSelect
            label="Одиниця виміру"
            options={[
              { title: "шт", value: "Склад 1" },
              { title: "мл", value: "Склад 12" },
            ]}
          />{" "}
          <SearchSelect
            label="Ціна"
            options={[
              { title: "шт", value: "Склад 1" },
              { title: "мл", value: "Склад 12" },
            ]}
          />
          <Toggle label="Потребують закупівлі" />
        </div>
      </FilterModal>
    </StyledFilter>
  );
};

const StyledFilter = styled.div``;
