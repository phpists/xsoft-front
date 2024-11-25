import styled from "styled-components";
import { Card } from "./Card/Card";
import { CompanyResponse } from "../../../../../types/companies";
import { useGetProductInfoQuery } from "../../../../../store/products/products.api";

interface Props {
  selected: undefined | string;
  onSelect: (id: undefined | string) => void;
  data: CompanyResponse[];
}

export const List = ({ selected, onSelect, data }: Props) => {
  const { data: productInfo } = useGetProductInfoQuery({});

  return (
    <StyledList className="gap-3.5">
      {data?.map(({ id, title, category_id, color, branches }) => (
        <Card
          key={id}
          selected={selected === id?.toString()}
          onSelect={() => onSelect(id?.toString())}
          title={title}
          color={color}
          category={
            productInfo?.categories?.find((c) => c.id === category_id)?.title
          }
          locations={branches.map(({ location }) => location)}
          id={id}
        />
      ))}
    </StyledList>
  );
};

const StyledList = styled.div`
  border-radius: 16px;
  padding: 14px;
  background: #fff;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  height: 245px;
  overflow: auto;
`;
