import styled from "styled-components";
import { useAppSelect } from "../../hooks/redux";

export const CompanyName = () => {
  const { selectedCompany } = useAppSelect((state) => state.app);
  const { companies } = useAppSelect((state) => state.companies);

  return (
    <StyledCompanyName>
      {selectedCompany
        ? `- ${
            companies?.find((c) => c.id?.toString() === selectedCompany)
              ?.title ?? ""
          }`
        : ""}
    </StyledCompanyName>
  );
};

const StyledCompanyName = styled.div`
  font-size: 16px;
  font-weight: 700;
  line-height: 22.4px;
  max-width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #00000080;
  text-transform: uppercase;
`;
