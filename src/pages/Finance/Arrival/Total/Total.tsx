import styled from "styled-components";
import { SectionTitle } from "../SectionTitle";
import { Select } from "../../../../components/Select/Select";
import { BiCalendar, BiPlus, BiTrash, BiUser } from "react-icons/bi";
import { Input } from "../../../../components/Input/Input";
import { Toggle } from "../../../../components/Toggle";
import { IProductMovement, IProductMovementItem } from "../Debt";
import { useEffect } from "react";
import { useGetCashesQuery } from "../../../../store/finance/finance.api";
import { AddButton } from "../../../../components/AddButton";

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

  const handleChangeCash = (
    index: number,
    field: string,
    value: number | string
  ) => {
    onChange(
      "cashes",
      data.cashes.map((c, i) => (i === index ? { ...c, [field]: value } : c))
    );
  };

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
          value={data.cashes?.[0]?.cashes_id}
          onChange={(cashes_id) => handleChangeCash(0, "cashes_id", cashes_id)}
          Icon={<BiUser />}
          className="max-w-[479px]"
          disabled
        />
        <Input
          label="Ціна закупки"
          sign="UAH"
          number
          labelActive
          value={data.cashes?.[0]?.amount}
          onChange={(amount) => handleChangeCash(0, "amount", amount)}
          disabled
        />
      </div>
      <div className="max-w-max">
        <Toggle
          label="Сплати частково"
          value={data.installment_payment}
          onChange={() => null}
        />
      </div>
      {data.installment_payment ? (
        <div>
          {data.cashes?.slice(1)?.map(({ cashes_id, amount }, i) => (
            <div className="flex items-center justify-between mt-3.5 mb-1">
              <Select
                label={`Каса ${2 + i}`}
                options={
                  cashesData?.response?.cashes?.map(({ id, title }) => ({
                    title,
                    value: id?.toString(),
                  })) ?? []
                }
                value={cashes_id}
                onChange={(cashes_id) =>
                  handleChangeCash(1 + i, "cashes_id", cashes_id)
                }
                Icon={<BiUser />}
                className="max-w-[479px]"
                disabled
              />
              <div className="flex items-center gap-2">
                <Input
                  label="Ціна закупки"
                  sign="UAH"
                  number
                  labelActive
                  value={amount}
                  onChange={(amount) =>
                    handleChangeCash(1 + i, "amount", amount)
                  }
                  disabled
                />
              </div>
            </div>
          ))}
        </div>
      ) : null}
      <div className="max-w-max mb-3.5 mt-3.5">
        <Toggle
          label="Записати в борг"
          value={data.debt}
          onChange={() => null}
        />
      </div>{" "}
      {data.debt ? (
        <div>
          <div className="flex items-center justify-between mb-3.5">
            <Select
              label="Каса"
              options={
                cashesData?.response?.cashes?.map(({ id, title }) => ({
                  title,
                  value: id?.toString(),
                })) ?? []
              }
              value={data.debt_data?.cashes_id}
              onChange={(cashes_id) =>
                onChange("debt_data", { ...data.debt_data, cashes_id })
              }
              Icon={<BiUser />}
              className="max-w-[479px]"
            />
            <Input
              label="Ціна закупки"
              sign="UAH"
              number
              labelActive
              value={data.debt_data?.amount}
              onChange={(amount) => null}
            />
          </div>{" "}
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
        </div>
      ) : null}
    </StyledTotal>
  );
};

const StyledTotal = styled.div`
  padding: 14px;
  border-radius: 7px;
  border: 1px solid #dbdbdb;
`;
