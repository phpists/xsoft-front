import { Auth } from "./pages/Auth/Auth";
import styled from "styled-components";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Header } from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import { Clients } from "./pages/Clients/Clients";
import { Client } from "./pages/Client/Client";
import { Product } from "./pages/Product/Product";
import { Brand } from "./pages/Brand/Brand";
import { Storage } from "./pages/Storage/Storage";
import { Home } from "./pages/Home/Home";
import { Products } from "./pages/Products/Products";

function App() {
  if (!localStorage.getItem("token")) {
    return <Auth />;
  }

  return (
    <StyledApp>
      <Sidebar />
      <div>
        <Routes>
          <Route path="/clients" element={<Clients />} />
          <Route path="/client" element={<Client />} />
          <Route path="/items" element={<Products />} />{" "}
          <Route path="/product" element={<Product />} />
          <Route path="/brand" element={<Brand />} />
          <Route path="/storage" element={<Storage />} />
          {/* <Route path="/" element={<Home />} /> */}
          <Route
            path="/*"
            element={
              <>
                <Header />
              </>
            }
          />
        </Routes>
      </div>
    </StyledApp>
  );
}

const StyledApp = styled.div`
  display: grid;
  grid-template-columns: max-content 1fr;
  height: 100vh;
  background: #efefef;
  opacity: auto;
`;
export default App;
