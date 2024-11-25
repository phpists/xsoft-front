import styled from "styled-components";
import { Empty } from "./Empty";
import { Company } from "./Company";
import { Media } from "../../../../components/Media/Media";
import { Locations } from "./Locations/Locations";
import { useGetProductInfoQuery } from "../../../../store/products/products.api";
import { ILocation } from "../Content";

interface Props {
  title: string;
  categoryId?: number;
  color: string;
  locations: ILocation[];
}

export const Info = ({ title, categoryId, color, locations }: Props) => {
  const { data: productInfo } = useGetProductInfoQuery({});

  return (
    <StyledInfo>
      {/* <Empty /> */}
      {title?.length === 0 && locations?.length === 0 && <Empty />}
      {title?.length > 0 ? (
        <Company
          title={title}
          color={color}
          category={
            productInfo?.categories?.find((c) => c.id === categoryId)?.title
          }
        />
      ) : null}
      {locations?.length > 0 ? <Locations locations={locations} /> : null}
      {/* <Media /> */}
    </StyledInfo>
  );
};

const StyledInfo = styled.div`
  border-right: 1px solid #dbdbdb;
  padding: 14px;
`;
