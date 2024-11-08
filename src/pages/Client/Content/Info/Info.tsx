import styled from "styled-components";
import { Empty } from "./Empty";
import { User } from "./User";
import { Input } from "../../../../components/Input/Input";
import { BiCreditCard } from "react-icons/bi";
import { Tags } from "./Tags/Tags";
import { Phones } from "../../../../components/Phones/Phones";
import { Media } from "../../../../components/Media/Media";

export const Info = () => {
  return (
    <StyledInfo>
      {/* <Empty /> */}
      <User />
      <Input
        label="Баланс"
        Icon={BiCreditCard}
        defaultValue={"00.00 ₴"}
        disabled
      />
      <Tags />
      <Phones />
      <Media />
    </StyledInfo>
  );
};

const StyledInfo = styled.div`
  border-right: 1px solid #dbdbdb;
  padding: 14px;
`;
