import styled from "styled-components";
import { Title } from "../../Title";
import { Actions } from "./Actions/Actions";

interface Props {
  search: string;
  onSearch: (val: string) => void;
}

export const Header = ({ search, onSearch }: Props) => {
  return (
    <StyledHeader className="flex items-center justify-between">
      <Title title="Постачальники" />
      <Actions search={search} onSearch={onSearch} />
    </StyledHeader>
  );
};

const StyledHeader = styled.div`
  margin-bottom: 18px;
`;
