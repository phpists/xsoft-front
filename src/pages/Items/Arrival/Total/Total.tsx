import styled from "styled-components";
import { SectionTitle } from "../SectionTitle";
import { Select } from "../../../../components/Select/Select";
import { BiCalendar, BiUser } from "react-icons/bi";
import { Input } from "../../../../components/Input/Input";
import { Toggle } from "../../../../components/Toggle";
import { IProductMovement, IProductMovementItem } from "../Arrival";
import { useEffect } from "react";

interface Props {
  data: IProductMovement;
  onChange: (
    field: string,
    value: string | boolean | number | IProductMovementItem[]
  ) => void;
  errors: string[];
}

export const Total = ({ data, onChange, errors }: Props) => {
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
          options={[]}
          Icon={<BiUser />}
          className="max-w-[479px]"
        />
        <Input
          label="Ціна закупки"
          sign="UAH"
          number
          labelActive
          value={data.total_price}
          onChange={(val) => onChange("total_price", val)}
          error={!!errors.includes("total_price")}
        />
      </div>
      <div className="max-w-max mb-3.5">
        <Toggle
          label="Дозволити борг"
          value={data.debt}
          onChange={() => onChange("debt", !data.debt)}
        />
      </div>{" "}
      <div className="max-w-max mb-3.5">
        <Toggle
          label="Сплати частково"
          value={data.installment_payment}
          onChange={() =>
            onChange("installment_payment", !data.installment_payment)
          }
        />
      </div>
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
    </StyledTotal>
  );
};

const StyledTotal = styled.div`
  padding: 14px;
  border-radius: 7px;
  border: 1px solid #dbdbdb;
`;
