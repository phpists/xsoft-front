import styled from "styled-components";
import { Header } from "./Header/Header";
import { Info } from "./Info/Info";
import { Information } from "./Information/Information";

export const Content = () => {
  return (
    <StyledContent>
      <Header />
      <div className="main-wrapper">
        <Info />
        <div>
          <div className="content-wrapper no-scrollbar">
            <Information />
          </div>
        </div>
      </div>
    </StyledContent>
  );
};

const StyledContent = styled.div`
  padding: 12px 14px 14px;
  .main-wrapper {
    display: grid;
    grid-template-columns: 320px 1fr;
    border-radius: 16px;
    background: #fff;
    height: calc(100vh - 123px);
    overflow: hidden;
  }
  .content-wrapper {
    height: calc(100vh - 122px);
    background: #efefef;
    overflow: auto;
  }
`;
