import styled from "styled-components";
import { Header } from "../../components/Header/Header";
import { Sidebar } from "./Sidebar/Sidebar";
import { useEffect, useState } from "react";
import { Registers } from "./Registers/Registers";
import { Items } from "./Items/Items";
import { Debt } from "./Arrival/Debt";
import { useLocation, useNavigate } from "react-router-dom";

export const Finance = () => {
  const { search } = useLocation();
  const navigate = useNavigate();
  const [selected, setSelected] = useState<number[]>([]);
  const [category, setCategory] = useState(0);

  const handleSelect = (id: number) =>
    setSelected(
      selected.includes(id)
        ? selected?.filter((s) => s !== id)
        : [...selected, id]
    );

  const handleSelectAll = () => setSelected(Array.from(Array(20).keys()));

  const handleChangeCategory = (val: number) => {
    setCategory(val);
    navigate("/finance");
  };

  useEffect(() => {
    if (search.includes("?debt=")) {
      setCategory(3);
    }
  }, [search]);

  return (
    <StyledFinance className="flex">
      <Sidebar category={category} onChangeCategory={handleChangeCategory} />
      <div className="content">
        <Header />{" "}
        {category === 0 ? (
          <Registers />
        ) : category === 1 ? (
          <Items />
        ) : category === 3 ? (
          <Debt onBack={() => handleChangeCategory(0)} />
        ) : null}
      </div>
    </StyledFinance>
  );
};

const StyledFinance = styled.div`
  .content {
    width: 100%;
  }
`;
