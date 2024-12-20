import styled from "styled-components";
import { Title } from "../../Title";
import { Actions } from "./Actions/Actions";

interface Props {
  onRefetchData: () => void;
}

export const Header = ({ onRefetchData }: Props) => {
  return (
    <StyledHeader className="flex items-center justify-between">
      <div className="flex items-center">
        <Title title="Статті платежів" />
      </div>
      <Actions onRefetchData={onRefetchData} />
    </StyledHeader>
  );
};

const StyledHeader = styled.div`
  margin-bottom: 18px;
`;
