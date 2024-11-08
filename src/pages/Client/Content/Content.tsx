import styled from "styled-components";
import { Header } from "./Header/Header";
import { Info } from "./Info/Info";
import { Tabs } from "../../../components/Tabs/Tabs";
import { BiHappy, BiPaperPlane, BiWallet, BiArchive } from "react-icons/bi";
import { useState } from "react";
import { Profile } from "./Profile/Profile";
import { Loyalty } from "./Loyalty/Loyalty";
import { History } from "./History/History";

const TABS = [
  { title: "Профіль", Icon: BiHappy },
  { title: "Комунікація", Icon: BiPaperPlane },
  { title: "Лояльність", Icon: BiWallet },
  { title: "Історія", Icon: BiArchive },
];

export const Content = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleChangeTab = (tab: number) => setActiveTab(tab);

  return (
    <StyledContent>
      <Header />
      <div className="main-wrapper">
        <Info />
        <div>
          <div className="py-3.5 px-4 border-b-[1px] border-[#DBDBDB]">
            <Tabs tabs={TABS} active={activeTab} onChange={handleChangeTab} />
          </div>
          <div className="content-wrapper no-scrollbar">
            {activeTab === 0 ? (
              <Profile />
            ) : activeTab === 2 ? (
              <Loyalty />
            ) : activeTab === 3 ? (
              <History />
            ) : null}
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
    height: calc(100vh - 184px);
    background: #efefef;
    overflow: auto;
  }
`;
