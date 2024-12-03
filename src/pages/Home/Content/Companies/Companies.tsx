import styled from "styled-components";
import { List } from "./List/List";
import { SelectedCompany } from "./SelectedCompany/SelectedCompany";
import { useActions } from "../../../../hooks/actions";
import { useAppSelect } from "../../../../hooks/redux";
import { CompanyResponse } from "../../../../types/companies";
import { useLazySetCompanyQuery } from "../../../../store/companies/companies.api";
import { showMessage } from "../../../../helpers";

interface Props {
  data: CompanyResponse[];
}

export const Companies = ({ data }: Props) => {
  const { selectedCompany } = useAppSelect((state) => state.app);
  const { onSelectCompany } = useActions();
  const [setCompany] = useLazySetCompanyQuery();

  const handleSelect = (id: string | undefined) => {
    setCompany(id).then((resp) => {
      if (resp.isError) {
        showMessage("error", "Помилка встановлення компанії");
      } else {
        onSelectCompany(id);
      }
    });
  };

  return (
    <StyledCompanies>
      {/* <SelectedCompany selected={selectedCompany} /> */}
      <List selected={selectedCompany} onSelect={handleSelect} data={data} />
    </StyledCompanies>
  );
};

const StyledCompanies = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  gap: 14px;
`;
