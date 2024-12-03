import styled from "styled-components";

interface Props {
  date: string;
  empty?: boolean;
  selected: boolean;
  onSelect: () => void;
}

export const Day = ({ date, empty, selected, onSelect }: Props) => (
  <StyledDay
    className={`${!empty && "active"} ${selected && "selected"}`}
    onClick={onSelect}
  >
    <div className="date-wrapper">
      <div className="date">
        {date} {empty ? null : <div className="event" />}
      </div>
    </div>
  </StyledDay>
);

const StyledDay = styled.div`
  padding: 3px;
  cursor: pointer;
  .date-wrapper {
    border: 0.7px solid transparent;
    border-radius: 4px;
    padding: 1.5px;
  }
  .date {
    width: 29px;
    height: 29px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-family: Noto Sans;
    font-size: 12px;
    font-weight: 500;
    line-height: 16.8px;
    letter-spacing: 0.02em;
    text-align: center;
    color: #737373;
    border-radius: 4px;
  }
  &.active {
    .date {
      background: #efefef;
      color: #111111;
    }
  }
  &.selected {
    .date-wrapper {
      border: 0.7px solid #111111;
    }
    .date {
      background: #0095f640;
      color: #0095f6;
    }
  }
  .event {
    width: 3px;
    height: 3px;
    border-radius: 100%;
    background: #3b82f6;
  }
`;
