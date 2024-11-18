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
import { Company } from "./pages/Company/Company";
import { Personal } from "./pages/Personal/Personal";
import { useAppSelect } from "./hooks/redux";
import { useLazyGetUserQuery } from "./store/auth/auth.api";
import { useEffect } from "react";
import { useActions } from "./hooks/actions";
import { Items } from "./pages/Items/Items";

function App() {
  const { user } = useAppSelect((state) => state.auth);
  const [getUser] = useLazyGetUserQuery();
  const { loginUser } = useActions();

  useEffect(() => {
    if (!user && localStorage.getItem("token")) {
      getUser({}).then((resp) =>
        resp.isError
          ? localStorage.removeItem("token")
          : loginUser(resp?.data.response)
      );
    }
  }, []);

  if (!localStorage.getItem("token") && !user) {
    return <Auth />;
  }

  return (
    <StyledApp>
      <Sidebar />
      <div>
        <Routes>
          <Route path="/clients" element={<Clients />} />
          <Route path="/client" element={<Client />} />
          <Route path="/client/:id" element={<Client />} />
          <Route path="/items" element={<Items />} />{" "}
          <Route path="/product" element={<Product />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/brand" element={<Brand />} />
          <Route path="/storage" element={<Storage />} />
          <Route path="/" element={<Home />} />
          <Route path="/company" element={<Company />} />
          <Route path="/pesonal" element={<Personal />} />
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
