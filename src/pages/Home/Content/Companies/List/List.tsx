import styled from "styled-components";
import { Card } from "./Card/Card";
import { CompanyResponse } from "../../../../../types/companies";
import { useGetProductInfoQuery } from "../../../../../store/products/products.api";
import { useGetCompanyCategoriesQuery } from "../../../../../store/companies/companies.api";

interface Props {
  selected: undefined | string;
  onSelect: (id: undefined | string) => void;
  data: CompanyResponse[];
}

export const List = ({ selected, onSelect, data }: Props) => {
  const { data: companyCategories } = useGetCompanyCategoriesQuery({});

  return (
    <StyledList className="gap-3.5">
      <div className="company-list-wrapper mb-2">
        <div className="company-list-title">Мої компанії</div>
        <div className="company-list">
          {data
            ?.filter((c) => c.type_id === 1)
            ?.map(({ id, title, category_id, color, branches }) => (
              <Card
                key={id}
                selected={selected === id?.toString()}
                onSelect={() => onSelect(id?.toString())}
                title={title}
                color={color}
                category={
                  companyCategories?.find((c) => c.value === category_id)?.title
                }
                locations={branches.map(({ location }) => location)}
                id={id}
              />
            ))}
        </div>
      </div>
      {data?.filter((c) => c.type_id === 2)?.length > 0 ? (
        <div className="company-list-wrapper">
          <div className="company-list-title">Назначені компанії</div>
          <div className="company-list">
            {data
              ?.filter((c) => c.type_id === 2)
              ?.map(({ id, title, category_id, color, branches }) => (
                <Card
                  key={id}
                  selected={selected === id?.toString()}
                  onSelect={() => onSelect(id?.toString())}
                  title={title}
                  color={color}
                  category={
                    companyCategories?.find((c) => c.value === category_id)
                      ?.title
                  }
                  locations={branches.map(({ location }) => location)}
                  id={id}
                />
              ))}
          </div>
        </div>
      ) : null}
    </StyledList>
  );
};

const StyledList = styled.div`
  border-radius: 16px;
  padding: 14px;
  background: #fff;
  /* height: 275px; */
  overflow: auto;

  .company-list-title {
    font-size: 18px;
    font-weight: 600;
    line-height: 25.2px;
    letter-spacing: 0.02em;
    color: #111111;
    margin-bottom: 10px;
  }
  .company-list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
  }
`;
