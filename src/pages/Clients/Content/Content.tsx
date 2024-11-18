import styled from "styled-components";
import { Header } from "./Header/Header";
import { ClientsTable } from "./ClientsTable/ClientsTable";
import { Client } from "../../../types/clients.";
import { useState } from "react";
import { useLazyDeleteClientsQuery } from "../../../store/clients/clients.api";
import { showMessage } from "../../../helpers";
import { Confirm } from "../../../components/Confirm";

interface Props {
  selected: number[];
  onSelect: (id: number) => void;
  onSelectAll: () => void;
  data: Client[];
  onSort: (val: string) => void;
  search: string;
  onSearch: (val: string) => void;
  onDelete: (ids: number[], clearSelected?: boolean) => void;
  loading: boolean;
}

export const Content = ({
  selected,
  onSelect,
  onSelectAll,
  data,
  onSort,
  search,
  onSearch,
  onDelete,
  loading,
}: Props) => {
  const [modal, setModal] = useState(false);
  const [deleteClient] = useLazyDeleteClientsQuery();
  const [selectedClient, setSelectedClient] = useState<number | undefined>(
    undefined
  );

  const getEnding = (ids: number[]) => (ids?.length === 1 ? "а" : "ів");

  const handleDelete = (ids: number[], isSelected?: boolean) => {
    setModal(false);
    deleteClient(ids).then((resp) => {
      if (resp.isError) {
        showMessage("error", `Помилка видалення клієнт${getEnding(ids)}`);
      } else {
        showMessage("success", `Клієнт${getEnding(ids)} успішно видалено`);
        onDelete(ids, isSelected);
      }
    });
  };

  const handleOpenDeleteModal = (id?: number) => {
    setModal(true);
    setSelectedClient(id);
  };

  return (
    <StyledContent>
      {" "}
      {modal && (
        <Confirm
          title={`Видалення клієнт${getEnding(selected)}`}
          subtitle={`Ви впевнені що хочете назавжди \n видалити клієнт${getEnding(
            selected
          )}?`}
          submitText={`Видалити клієнт${getEnding(selected)}`}
          onClose={() => setModal(false)}
          onSubmit={() =>
            handleDelete(selectedClient ? [selectedClient] : selected, true)
          }
        />
      )}
      <Header search={search} onSearch={onSearch} />
      <ClientsTable
        selected={selected}
        onSelect={onSelect}
        onSelectAll={onSelectAll}
        data={data}
        onSort={onSort}
        onDeleteSelected={handleOpenDeleteModal}
        onDelete={(id: number) => handleOpenDeleteModal(id)}
        loading={loading}
      />
    </StyledContent>
  );
};

const StyledContent = styled.div`
  padding: 10px 14px 14px;
`;
