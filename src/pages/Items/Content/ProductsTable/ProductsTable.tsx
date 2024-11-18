import { useState } from "react";
import { Table } from "../../../../components/Table/Table";
import { showMessage } from "../../../../helpers";
import {
  useGetProductInfoQuery,
  useLazyDeleteProductsQuery,
} from "../../../../store/products/products.api";
import { IProductResponse } from "../../../../types/products";
import { Row } from "./Row";
import { Confirm } from "../../../../components/Confirm";

interface Props {
  selected: number[];
  onSelect: (id: number) => void;
  onSelectAll: () => void;
  data: IProductResponse[];
  loading: boolean;
  onSort: (val: string) => void;
  onDelete: (ids: number[], clearSelected?: boolean) => void;
}

export const ProductsTable = ({
  selected,
  onSelect,
  onSelectAll,
  data,
  loading,
  onSort,
  onDelete,
}: Props) => {
  const { data: productInfo } = useGetProductInfoQuery({});
  const [modal, setModal] = useState(false);
  const [deleteProduct] = useLazyDeleteProductsQuery();
  const [selectedProduct, setSelectedProduct] = useState<number | undefined>(
    undefined
  );

  const COLUMNS = [
    { title: "Назва", sortable: true, onClick: () => onSort("title") },
    { title: "#", sortable: true, onClick: () => onSort("article") },
    {
      title: "Категорія",
      sortable: true,
      onClick: () => onSort("category_id"),
    },
    { title: "Склад", sortable: true, onClick: () => onSort("vendors") },
    { title: "Наявність", sortable: true, onClick: () => onSort("balance") },
    {
      title: "Одиниця \n виміру",
      sortable: true,
      onClick: () => onSort("product_measure_id"),
    },
    { title: "Ціна ", sortable: true, onClick: () => onSort("retail_price") },
  ];

  const getEnding = (ids: number[]) => (ids?.length === 1 ? "" : "и");

  const handleDelete = (ids: number[], isSelected?: boolean) => {
    setModal(false);
    deleteProduct(ids).then((resp) => {
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
    setSelectedProduct(id);
  };

  return (
    <>
      {" "}
      {modal && (
        <Confirm
          title={`Видалення продукт${getEnding(selected)}`}
          subtitle={`Ви впевнені що хочете назавжди \n видалити продукт${getEnding(
            selected
          )}?`}
          submitText={`Видалити продукт${getEnding(selected)}`}
          onClose={() => setModal(false)}
          onSubmit={() =>
            handleDelete(selectedProduct ? [selectedProduct] : selected, true)
          }
        />
      )}
      <Table
        columns={COLUMNS}
        selected={selected?.length}
        onSelectAll={onSelectAll}
        allCount={data?.length}
        className="w-full"
        loading={loading}
        onDeleteSelected={handleOpenDeleteModal}
      >
        {data?.map(
          (
            {
              id,
              category_id,
              title,
              color,
              article,
              vendors,
              product_measure_id,
              retail_price,
              balance,
            },
            i
          ) => (
            <Row
              key={i}
              selected={selected.includes(id)}
              onSelect={() => onSelect(id)}
              className={i % 2 === 1 ? "grey" : ""}
              title={title}
              color={color}
              article={article}
              category={
                productInfo?.categories?.find((c) => c.id === category_id)
                  ?.title
              }
              vendors={
                productInfo?.vendors
                  ?.filter((v) => vendors.includes(v.id))
                  ?.map((v) => v.title)
                  ?.join(",") ?? ""
              }
              measure={
                productInfo?.measurements?.find(
                  (m) => m.id === product_measure_id
                )?.title
              }
              price={retail_price}
              balance={balance}
              onDelete={() => handleOpenDeleteModal(id)}
              id={id}
            />
          )
        )}
      </Table>
    </>
  );
};
