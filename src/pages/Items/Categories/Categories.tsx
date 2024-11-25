import { useState } from "react";
import { CategoryCard } from "../../../components/CategoryCard/CategoryCard";
import { Title } from "../Title";
import { BiIdCard } from "react-icons/bi";
import { CategoryModal } from "../../../components/CategoryModal/CategoryModal";
import { Button } from "../../../components/Button";
import styled from "styled-components";
import {
  useGetProductInfoQuery,
  useLazyDeleteCategoryQuery,
} from "../../../store/products/products.api";
import { Confirm } from "../../../components/Confirm";
import { showMessage } from "../../../helpers";

interface Props {
  selected?: number;
  onSelect: (val?: number) => void;
}

export const Categories = ({ selected, onSelect }: Props) => {
  const [modal, setModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const { data, refetch } = useGetProductInfoQuery({});
  const [selectedCategory, setSelectedCategory] = useState<
    { title: string; id: number } | undefined
  >(undefined);
  const [deleteCategory] = useLazyDeleteCategoryQuery();

  const handleSelectCategory = (category: { title: string; id: number }) => {
    setSelectedCategory(category);
    setModal(true);
  };

  const handleClose = () => {
    setSelectedCategory(undefined);
    setModal(false);
    setDeleteModal(false);
  };

  const handleOpenDeleteModal = (category: { title: string; id: number }) => {
    setSelectedCategory(category);
    setDeleteModal(true);
  };

  const handleDelete = () => {
    if (selectedCategory) {
      deleteCategory(selectedCategory.id).then((resp) => {
        if (resp.isError) {
          showMessage("error", "Помилка видалення категорії");
        } else {
          showMessage("success", "Категорію успішно видалено");
          refetch();
        }
      });
      handleClose();
    }
  };

  return (
    <StyledCategories>
      {deleteModal ? (
        <Confirm
          title="Видалення категорії"
          subtitle={`Ви впевнені що хочете назавжди \n видалити категорію?`}
          submitText="Видалити категорію"
          onClose={handleClose}
          onSubmit={handleDelete}
        />
      ) : null}
      {modal && (
        <CategoryModal
          onClose={handleClose}
          onSucess={() => refetch()}
          category={selectedCategory}
        />
      )}
      <Title title="Категорії товару" />
      <div className="categories-wrapper">
        {!data?.categories || data?.categories?.length === 0 ? (
          <div className="empty">Пусто</div>
        ) : (
          data?.categories?.map(({ id, title }) => (
            <CategoryCard
              key={id}
              title={title}
              Icon={<BiIdCard size={20} />}
              className="mb-3.5"
              editable
              onClick={() => onSelect(selected === id ? undefined : id)}
              onDelete={() => handleOpenDeleteModal({ id, title })}
              onEdit={() => handleSelectCategory({ id, title })}
              active={selected === id}
            />
          ))
        )}
      </div>
      <Button
        title="Додати категорію"
        type="dark"
        onClick={() => setModal(true)}
      />
    </StyledCategories>
  );
};

const StyledCategories = styled.div`
  box-shadow: 0px 6px 14px 0px #1e1e1e1a;
  border-radius: 8px;
  background: #ffffff;
  width: 300px;
  padding: 20px 8px 40px;
  flex-shrink: 0;
  .empty {
    padding: 40px 20px;
    text-align: center;
  }
  .categories-wrapper {
    max-height: calc(100vh - 260px);
    overflow: auto;
    margin-bottom: 10px;
  }
`;
