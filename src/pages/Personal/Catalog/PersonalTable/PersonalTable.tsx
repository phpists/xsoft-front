import { useState } from "react";
import { Table } from "../../../../components/Table/Table";
import { Row } from "./Row";
import { useLazyDeleteClientsQuery } from "../../../../store/clients/clients.api";
import { showMessage } from "../../../../helpers";
import { Confirm } from "../../../../components/Confirm";
import { IPersonaResponse } from "../../../../types/personal";
import {
  useGetRolesQuery,
  useLazyDeleteStaffQuery,
} from "../../../../store/personal/personal.api";

interface Props {
  selected: number[];
  onSelect: (id: number) => void;
  onSelectAll: () => void;
  data: IPersonaResponse[];
  onSort: (val: string) => void;
  onDelete: (ids: number[], clearSelected?: boolean) => void;
  loading: boolean;
}

export const PersonalTable = ({
  selected,
  onSelect,
  onSelectAll,
  data,
  onSort,
  onDelete,
  loading,
}: Props) => {
  const COLUMNS = [
    { title: "Ім’я", sortable: true, onClick: () => onSort("first_name") },
    { title: "Роль", sortable: true, onClick: () => onSort("role_id") },
    { title: "Телефон", sortable: false, onClick: () => onSort("XXX") },
    { title: "Коментар", sortable: true, onClick: () => onSort("comment") },
    // { title: "Ставка", sortable: true, onClick: () => onSort("XXX") },
    { title: "Локація", sortable: false, onClick: () => onSort("XXX") },
  ];
  const [modal, setModal] = useState(false);
  const [deleteStaff] = useLazyDeleteStaffQuery();
  const [selectedClient, setSelectedClient] = useState<number | undefined>(
    undefined
  );
  const { data: roles } = useGetRolesQuery({});

  const getEnding = (ids: number[]) => (ids?.length === 1 ? "а" : "ів");

  const handleDelete = (ids: number[], isSelected?: boolean) => {
    setModal(false);
    deleteStaff(ids).then((resp) => {
      if (resp.isError) {
        showMessage("error", `Помилка видалення працівник${getEnding(ids)}`);
      } else {
        showMessage("success", `Працівник${getEnding(ids)} успішно видалено`);
        onDelete(ids, isSelected);
      }
    });
  };

  const handleOpenDeleteModal = (id?: number) => {
    setModal(true);
    setSelectedClient(id);
  };

  return (
    <>
      {modal && (
        <Confirm
          title={`Видалення працівник${getEnding(selected)}`}
          subtitle={`Ви впевнені що хочете назавжди \n видалити працівник${getEnding(
            selected
          )}?`}
          submitText={`Видалити працівник${getEnding(selected)}`}
          onClose={() => setModal(false)}
          onSubmit={() =>
            handleDelete(selectedClient ? [selectedClient] : selected, true)
          }
        />
      )}
      <Table
        columns={COLUMNS}
        selected={selected?.length}
        onSelectAll={onSelectAll}
        allCount={data.length}
        loading={loading}
        onDeleteSelected={handleOpenDeleteModal}
      >
        {data?.map(
          (
            {
              id,
              first_name,
              last_name,
              color,
              email,
              role_id,
              comment,
              phones,
            },
            i
          ) => (
            <Row
              key={id}
              selected={selected.includes(id)}
              onSelect={() => onSelect(id)}
              className={i % 2 === 1 ? "grey" : ""}
              firstName={first_name}
              lastName={last_name}
              color={color}
              id={id}
              role={roles?.find((r) => r.id === role_id)?.title}
              comment={comment}
              onDelete={() => handleOpenDeleteModal(id)}
              phone={phones?.[0]?.phone ?? ""}
            />
          )
        )}
      </Table>
    </>
  );
};
