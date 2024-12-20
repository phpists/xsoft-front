import styled from "styled-components";
import { Header } from "../../components/Header/Header";
import { Sidebar } from "./Sidebar/Sidebar";
import { useEffect, useState } from "react";
import { Content } from "./Content/Content";
import { Brands } from "./Brands/Brands";
import { Storages } from "./Storages/Storages";
import { Suppliers } from "./Suppliers/Suppliers";
import { Circulation } from "./Circulation/Circulation";
import { Arrival } from "./Arrival/Arrival";
import { useLocation, useNavigate } from "react-router-dom";
import { Selling } from "./Selling/Selling";

export const Items = () => {
  const navigate = useNavigate();

  const location = useLocation();
  const [category, setCategory] = useState(
    Number(localStorage.getItem("items_category")) ?? 0
  );

  const handleChangeCategory = (val: number) => {
    setCategory(val);
    localStorage.setItem("items_category", val.toString());
    if (val === 4) {
      navigate("/items");
    }
  };

  useEffect(() => {
    if (location.search?.includes("?sell=")) {
      setCategory(5);
    } else if (location.search?.includes("?remove=")) {
      setCategory(6);
    } else if (location.search?.includes("?movements=")) {
      setCategory(7);
    }
  }, [location]);

  return (
    <StyledItems className="flex">
      <Sidebar category={category} onChangeCategory={handleChangeCategory} />
      <div className="content">
        <Header />{" "}
        {category === 0 ? (
          <Content />
        ) : category === 1 ? (
          <Brands />
        ) : category === 2 ? (
          <Suppliers />
        ) : category === 3 ? (
          <Storages />
        ) : category === 4 ? (
          <Circulation onChangeCategory={handleChangeCategory} />
        ) : category === 5 ? (
          <Selling onBack={() => handleChangeCategory(4)} />
        ) : category === 6 ? (
          <Selling off onBack={() => handleChangeCategory(4)} />
        ) : category === 7 ? (
          <Arrival onBack={() => handleChangeCategory(4)} />
        ) : null}
      </div>
    </StyledItems>
  );
};

const StyledItems = styled.div`
  .content {
    width: 100%;
  }
`;
