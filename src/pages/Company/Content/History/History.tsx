import styled from "styled-components";
import { Actual } from "./Actual";
import { Divider } from "../Divider";
import { Booking } from "./Booking";
import { HistoryTable } from "./HistoryTable/HistoryTable";

export const History = () => (
  <StyledHistory className="flex flex-col gap-[34px]">
    <Actual />
    <Divider />
    <Booking />
    <Divider />
    <HistoryTable />
  </StyledHistory>
);

const StyledHistory = styled.div`
  padding: 24px;
  background: #fff;
  border-bottom-right-radius: 16px;
`;
