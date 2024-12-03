import styled from "styled-components";
import { Title } from "./Title";
import { Actions } from "./Actions/Actions";

interface Props {
  search: string;
  onSearch: (val: string) => void;
  filter: any;
  onChangeFilter: (field: string, value: string[] | number) => void;
}

export const Header = ({ search, onSearch, filter, onChangeFilter }: Props) => {
  return (
    <StyledHeader className="flex items-center justify-between">
      <Title />
      <Actions
        search={search}
        onSearch={onSearch}
        filter={filter}
        onChangeFilter={onChangeFilter}
      />
    </StyledHeader>
  );
};

const StyledHeader = styled.div`
  margin-bottom: 18px;
`;
