import { BiMailSend } from "react-icons/bi";
import { Option, Select } from "../../../../components/Select/Select";
import { useLazySearchStaffQuery } from "../../../../store/personal/personal.api";
import { useEffect, useState } from "react";
import { ISearchStaffItemResponse } from "../../../../types/personal";

interface Props {
  value: ISearchStaffItemResponse | undefined;
  onChange: (val: ISearchStaffItemResponse | undefined) => void;
}

export const Search = ({ value, onChange }: Props) => {
  const [searchStaff] = useLazySearchStaffQuery();
  const [searchValue, setSearchValue] = useState("");
  const [options, setOptions] = useState<ISearchStaffItemResponse[]>([]);

  useEffect(() => {
    if (searchValue.includes("@")) {
      searchStaff(searchValue).then((resp) =>
        setOptions(resp?.data?.response?.staff ?? [])
      );
    }
  }, [searchValue]);

  const handleSelect = (id: string) => {
    onChange(options.find((o) => o.id.toString() === id));
  };

  return (
    <>
      {" "}
      <Select
        label="Пошук користувача по Email"
        options={
          options?.map(({ email, id }) => ({ title: email, value: id })) ?? []
        }
        search
        Icon={<BiMailSend size={20} />}
        onSeach={(val) => setSearchValue(val)}
        value={value?.id?.toString()}
        onChange={(val) => handleSelect(val.toString())}
      ></Select>
    </>
  );
};
