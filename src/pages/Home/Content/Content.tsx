import styled from "styled-components";
import { Header } from "./Header/Header";
import { Empty } from "./Empty/Empty";
import { Companies } from "./Companies/Companies";
import { useAppSelect } from "../../../hooks/redux";
import { Loading } from "./Loading";

export const Content = () => {
  const { companies } = useAppSelect((state) => state.companies);

  return (
    <StyledContent>
      <Header />
      <div className="content-wrapper">
        {!companies ? (
          <Loading />
        ) : companies && companies?.length > 0 ? (
          <Companies data={companies} />
        ) : (
          <Empty />
        )}
      </div>
    </StyledContent>
  );
};

const StyledContent = styled.div`
  padding: 15px 14px;
  .content-wrapper {
    height: calc(100vh - 127px - 26px);
  }
`;
