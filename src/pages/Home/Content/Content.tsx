import styled from "styled-components";
import { Header } from "./Header/Header";
import { Empty } from "./Empty/Empty";
import { Companies } from "./Companies/Companies";

export const Content = () => (
  <StyledContent>
    <Header />
    <div className="content-wrapper">
      {/* <Empty /> */}
      <Companies />
    </div>
  </StyledContent>
);

const StyledContent = styled.div`
  padding: 15px 14px;
  .content-wrapper {
    height: calc(100vh - 127px);
  }
`;
