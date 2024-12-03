import styled from "styled-components";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Event } from "./Event/Event";

const localizer = momentLocalizer(moment);

export const Content = () => {
  const events = [
    {
      title: "Стрижка",
      start: new Date(),
      end: new Date(new Date().setHours(new Date().getHours() + 1)),
    },
  ];

  return (
    <StyledContent>
      {" "}
      <Calendar
        defaultDate={new Date()}
        defaultView="day"
        localizer={localizer}
        events={events}
        // style={{ height: 500 }}
        formats={{
          timeGutterFormat: "HH:mm", // Формат годин у колонці часу
          eventTimeRangeFormat: ({ start, end }, culture, localizer) =>
            `${localizer?.format(
              start,
              "HH:mm",
              culture
            )} - ${localizer?.format(end, "HH:mm", culture)}`, // Формат діапазону часу подій
        }}
        timeslots={1}
        components={{
          event: Event,
        }}
      />
    </StyledContent>
  );
};

const StyledContent = styled.div`
  background: #ffffff;
  border-radius: 8px;
  background: #fff;
  margin-top: 14px;
  height: calc(100vh - 138px);
  overflow: auto;
  padding: 8px 12px;
  .rbc-toolbar {
    display: none !important;
  }
  .rbc-header,
  .rbc-time-header.rbc-overflowing {
    display: none !important;
  }

  .rbc-time-content {
    font-family: Noto Sans;
    font-size: 12px;
    font-weight: 400;
    line-height: 16.8px;
    letter-spacing: 0.02em;
    color: #737373;
  }

  .rbc-label {
    padding: 11px;
  }

  .rbc-timeslot-group {
    background: #fff;
    border-bottom: 1px solid #dbdbdb;
  }

  .rbc-day-slot .rbc-time-slot {
    border: none;
    overflow: unset !important;
  }

  .rbc-day-slot .rbc-event,
  .rbc-day-slot .rbc-background-event {
    overflow: unset !important;
  }
  .rbc-current-time-indicator {
    background: #d92d20 !important;
    height: 2px !important;
    &::before {
      content: "";
      display: block;
      height: 9px;
      width: 9px;
      border-radius: 100%;
      background: #d92d20;
      top: 50%;
      transform: translateY(-50%);
      flex-shrink: 0;
      left: -5px;
      position: absolute;
    }
  }

  .rbc-time-header {
    display: none !important;
  }
  .rbc-time-content {
    border-top: none !important;
    border-radius: 8px;
  }
  .rbc-time-view {
    border-radius: 8px;
  }
  .rbc-event-label {
    display: none !important;
  }
  .rbc-event {
    background: none !important;
    border: none !important;
    outline: none !important;
  }
  .rbc-event-content {
    min-height: max-content !important;
  }
`;
