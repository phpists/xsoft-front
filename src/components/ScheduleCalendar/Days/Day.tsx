import styled from "styled-components";

interface Props {
  empty?: boolean;
  date?: string;
  holiday?: boolean;
  onSelect?: () => void;
  selected?: boolean;
}

export const Day = ({ empty, date, holiday, onSelect, selected }: Props) => (
  <StyledDay className="day-wrapper">
    {empty ? null : (
      <div
        className={`day-content ${holiday ? "holiday" : "weekday"} ${
          selected && "selected"
        }`}
        onClick={onSelect}
      >
        <div className="mb-[15px]">{date}</div>
        <div className="day-hours">
          {holiday ? (
            <div>Вихідний</div>
          ) : (
            <>
              <div>08:00 - 18:00</div>
              <div>12:00 -12:40</div>
            </>
          )}
        </div>
      </div>
    )}
  </StyledDay>
);

const StyledDay = styled.div`
  min-height: 97.2px;
  padding: 3px 4px;
  .day-content {
    width: 100%;
    height: 100%;
    border-radius: 4px;
    padding: 10px;
    font-size: 14px;
    font-weight: 400;
    line-height: 19.6px;
    color: #333333;
    cursor: pointer;
    border: 1px solid transparent;
    &.weekday {
      background: #efefef;
    }
    &.holiday {
      background: #ed5e1e33;
      color: #ed5e1e;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding-bottom: 12px;
    }
    &.selected {
      border: 1px solid #000000;
    }
  }
  .day-hours {
    font-size: 10px;
    line-height: 14px;
    letter-spacing: 0.02em;
  }
`;
