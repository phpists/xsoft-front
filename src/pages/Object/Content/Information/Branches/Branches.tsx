import styled from "styled-components";
import { SectionTitle } from "../../../../../components/SectionTitle";
import { Card } from "./Card";
import { AddButton } from "../../../../../components/AddButton";
import { useNavigate } from "react-router-dom";
import { useAppSelect } from "../../../../../hooks/redux";

export const Branches = () => {
  const navigate = useNavigate();
  const { selectedCompany } = useAppSelect((state) => state.app);

  return (
    <StyledBranches>
      <SectionTitle title="Філія / Локація" />
      <Card />
      <AddButton
        title="Додати філію"
        onClick={() => navigate(`/company/${selectedCompany}`)}
      />
    </StyledBranches>
  );
};

const StyledBranches = styled.div`
  padding: 14px;
  border-radius: 8px;
  background: #f7f7f7;
`;
