import styled from "styled-components";
import { Header } from "./Header";
import { PhonesInput } from "../../../../../../components/PhonesInput/PhonesInput";
import { Select } from "../../../../../../components/Select/Select";
import { BiMap } from "react-icons/bi";

export const Card = () => (
  <StyledCard>
    <Header />
    {/* <PhonesInput /> */}
    <Select
      label="Адреса"
      value="1"
      options={[
        {
          title: "вул Івана Мазепи, 17, Дрогобич, Львівська область, 82100",
          value: "1",
        },
        {
          title: "вул Івана Мазепи, 18, Дрогобич, Львівська область, 82100",
          value: "2",
        },
      ]}
      hideArrow
      Icon={<BiMap size={20} />}
      className="!max-w-[490px] mt-3.5 bg-white"
      search
    />
  </StyledCard>
);

const StyledCard = styled.div`
  padding: 14px;
  background: #f7f7f7;
  border-radius: 8px;
  margin-bottom: 14px;
  .phones-input-wrapper {
    max-width: 428px;
  }
`;
