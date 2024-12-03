import styled from "styled-components";
import { Header } from "./Header";
import { useState } from "react";
import { Content } from "./Content";

export const Event = ({ event, title }: any) => {
  const [open, setOpen] = useState(true);

  return (
    <StyledEvent className={`${open && "open"}`}>
      <div onClick={() => setOpen(!open)}>
        <Header start={event?.start} end={event?.end} />
      </div>
      {open ? <Content title={title} /> : null}
    </StyledEvent>
  );
};

const StyledEvent = styled.div`
  background: #d5efe0;
  border-radius: 4px;
  overflow: hidden;
  &.open {
    min-height: max-content;
    overflow: unset !important;
  }
`;
