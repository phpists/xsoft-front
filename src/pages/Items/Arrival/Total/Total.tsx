import styled from "styled-components";
import { SectionTitle } from "../SectionTitle";
import { Select } from "../../../../components/Select/Select";
import { BiCalendar, BiUser } from "react-icons/bi";
import { Input } from "../../../../components/Input/Input";
import { Toggle } from "../../../../components/Toggle";
import { IProductMovement, IProductMovementItem } from "../Arrival";
import { useEffect } from "react";
import { useGetCashesQuery } from "../../../../store/finance/finance.api";

interface Props {
  data: IProductMovement;
  onChange: (
    field: string,
    value: string | boolean | number | IProductMovementItem[] | any
  ) => void;
  errors: string[];
}

export const Total = ({ data, onChange, errors }: Props) => {
  const { data: cashesData } = useGetCashesQuery({});

  const handleCalculateTotal = () => {
    const total = data.items
      .map(
        ({ retail_price, qty }) => Number(qty ?? 0) * Number(retail_price ?? 0)
      )
      .reduce((a, b) => a + b);

    onChange("total_price", total);
  };

  useEffect(() => {
    handleCalculateTotal();
  }, [data.items]);

  return (
    <StyledTotal>
      <div className="flex items-center justify-between mb-3.5">
        <SectionTitle title="Сума приходу" className="!mb-0" />
        <SectionTitle title={`${data.total_price} ₴`} className="!mb-0" />
      </div>
      <div className="flex items-center justify-between mb-3.5">
        <Select
          label="Каса"
          options={
            cashesData?.response?.cashes?.map(({ id, title }) => ({
              title,
              value: id?.toString(),
            })) ?? []
          }
          value={data.cashes.cashes_id}
          onChange={(cashes_id) =>
            onChange("cashes", { ...data.cashes, cashes_id })
          }
          Icon={<BiUser />}
          className="max-w-[479px]"
        />
        <Input
          label="Ціна закупки"
          sign="UAH"
          number
          labelActive
          value={data.cashes.amount}
          onChange={(amount) => onChange("cashes", { ...data.cashes, amount })}
        />
      </div>
      <div className="max-w-max mb-3.5">
        <Toggle
          label="Сплати частково"
          value={data.installment_payment}
          onChange={() =>
            onChange("installment_payment", !data.installment_payment)
          }
        />
      </div>
      <div className="max-w-max mb-3.5">
        <Toggle
          label="Записати в борг"
          value={data.debt}
          onChange={() => onChange("debt", !data.debt)}
        />
      </div>{" "}
      {data.debt ? (
        <Input
          label="Дата"
          labelActive
          calendar
          Icon={BiCalendar}
          className="w-[194px]"
          value={data.box_office_date}
          onChange={(val) => onChange("box_office_date", val)}
          error={!!errors.includes("box_office_date")}
        />
      ) : null}
    </StyledTotal>
  );
};

const StyledTotal = styled.div`
  padding: 14px;
  border-radius: 7px;
  border: 1px solid #dbdbdb;
`;
