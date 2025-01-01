import styled from "styled-components";
import { Card } from "./Card/Card";
import { AddCard } from "./AddCard";
import { useEffect, useState } from "react";
import {
  useGetCashesQuery,
  useLazyDeleteCashQuery,
} from "../../../../store/finance/finance.api";
import { showMessage } from "../../../../helpers";
import { Confirm } from "../../../../components/Confirm";

interface Props {
  selected: number | undefined;
  onSelect: (val: number) => void;
}

export const List = ({ selected, onSelect }: Props) => {
  const { data, refetch } = useGetCashesQuery(
    {},
    {
      refetchOnMountOrArgChange: true,
    }
  );
  const [modal, setModal] = useState<number | undefined>(undefined);
  const [deleteCash] = useLazyDeleteCashQuery();

  const handleDelete = () => {
    setModal(undefined);
    deleteCash(modal).then((resp) => {
      if (resp.isError) {
        showMessage("error", "Помилка видалення");
      } else {
        showMessage("success", "Успішно видалено");
        refetch();
      }
    });
  };

  useEffect(() => {
    if (data?.response.cashes?.[0]) {
      onSelect(data?.response.cashes?.[0]?.id);
    }
  }, [data]);

  return (
    <>
      {" "}
      {modal && (
        <Confirm
          title="Видалення касси"
          subtitle={`Ви впевнені що хочете назавжди \n видалити кассу?`}
          submitText="Видалити кассу"
          onClose={() => setModal(undefined)}
          onSubmit={handleDelete}
        />
      )}
      <StyledList>
        <Card
          title="Всі каси"
          total={`${data?.response.cashes
            ?.map(({ total }) => total)
            ?.reduce((a, b) => a + b)} ₴`}
        />
        <div className="cards">
          <div className="cards-wrapper">
            {data?.response.cashes?.map(({ id, title, total }) => (
              <Card
                key={id}
                id={id}
                title={title}
                total={`${total} ₴`}
                actions
                selected={selected === id}
                onSelect={() => onSelect(id)}
                onDelete={() => setModal(id)}
              />
            ))}
          </div>
          <AddCard />
        </div>
      </StyledList>
    </>
  );
};

const StyledList = styled.div`
  display: grid;
  grid-template-columns: 442px 1fr;
  gap: 40px;
  grid-template-rows: 172px;
  margin-bottom: 22px;
  .cards {
    display: grid;
    grid-template-columns: 1fr 260px;
    gap: 10px;
  }
  .cards-wrapper {
    display: flex;
    align-items: center;
    gap: 10px;
    overflow: auto;
    overflow-y: hidden;
  }
`;
