import styled from "styled-components";
import { CurrentDate } from "./CurrentDate";
import { Actions } from "./Actions";
import { Selecting } from "./Selecting/Selecting";

interface Props {
  date: Date;
  onChangeDate: (val: Date) => void;
  selecting: boolean;
  onToggleSelecting: (val: boolean) => void;
  onSelectAction: (action: string) => void;
}

export const Header = ({
  date,
  onChangeDate,
  selecting,
  onToggleSelecting,
  onSelectAction,
}: Props) => {
  return (
    <StyledHeader className="mb-3.5">
      {selecting ? (
        <Selecting
          onClose={() => onToggleSelecting(false)}
          onSelectAction={onSelectAction}
        />
      ) : (
        <div className="flex items-center justify-between">
          <CurrentDate date={date} onChangeDate={onChangeDate} />
          <Actions onSelect={() => onToggleSelecting(true)} />
        </div>
      )}
    </StyledHeader>
  );
};

const StyledHeader = styled.div``;
