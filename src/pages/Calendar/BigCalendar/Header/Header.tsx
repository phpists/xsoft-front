import styled from "styled-components";
import { User } from "./User/User";
import { TodayButton } from "./TodayButton";
import { DateNavigate } from "./DateNavigate";
import { Price } from "./Price/Price";
import { BasketButton } from "./BasketButton";
import { Button } from "../../../../components/Button";
import { BiPlus } from "react-icons/bi";
import { Zoom } from "./Zoom/Zoom";
import { Filter } from "./Filter/Filter";
import { Setting } from "./Setting/Setting";

export const Header = () => (
  <StyledHeader className="flex items-center justify-between">
    <div className="flex items-center gap-3.5">
      <User />
      <TodayButton />
      <DateNavigate />
    </div>
    <div className="flex items-center gap-6">
      <Price />
      <div className="flex items-center gap-2">
        <BasketButton />
        <Button
          title="Новий запис"
          Icon={<BiPlus />}
          type="blue"
          className="!h-[40px]"
        />
      </div>
      <Zoom />
      <Filter />
      <Setting />
    </div>
  </StyledHeader>
);

const StyledHeader = styled.div`
  position: relative;
  z-index: 5;
`;
