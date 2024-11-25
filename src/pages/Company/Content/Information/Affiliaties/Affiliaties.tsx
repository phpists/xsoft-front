import styled from "styled-components";
import { Card } from "./Card/Card";
import { AddButton } from "../../../../../components/AddButton";
import { MapModal } from "../../../../../components/MapModal/MapModal";
import { useState } from "react";
import { ICompany } from "../../Content";
import {
  INIT_PHONE,
  IPhone,
} from "../../../../../components/PhonesInput/PhonesInput";

interface Props {
  data: ICompany;
  onChange: (
    field: string,
    value: string | number | string[] | number[] | any
  ) => void;
  errors: string[];
}

export const Affiliaties = ({ data, onChange, errors }: Props) => {
  const [modal, setModal] = useState(false);
  const [editMap, setEditMap] = useState<
    | { title: string; latitude: string; longitude: string; index: number }
    | undefined
  >();

  const handleClose = () => {
    setModal(false);
    setEditMap(undefined);
  };

  const handleSaveMap = (
    val:
      | { title: string; latitude: string; longitude: string; index?: number }
      | undefined
  ) => {
    if (val) {
      if (!!editMap) {
        console.log("saveEdit", val);
        onChange(
          "locations",
          data.locations.map((l, j) =>
            editMap.index === j ? { ...l, ...val } : l
          )
        );
      } else {
        onChange("locations", [
          ...data.locations,
          { name: "", phones: [INIT_PHONE], ...val },
        ]);
      }
    }
  };

  return (
    <StyledAffiliaties>
      {modal || editMap ? (
        <MapModal onClose={handleClose} onAdd={handleSaveMap} data={editMap} />
      ) : null}
      {data.locations.map(({ title, phones, name, latitude, longitude }, i) => (
        <Card
          key={i}
          number={1 + i}
          title={title}
          onDelete={() =>
            onChange(
              "locations",
              data.locations.filter((loc, j) => j !== i)
            )
          }
          name={name}
          onChangeName={(val: string | number) =>
            onChange(
              "locations",
              data.locations.map((l, j) => (i === j ? { ...l, name: val } : l))
            )
          }
          phones={phones}
          onChangePhones={(phones: IPhone[]) =>
            onChange(
              "locations",
              data.locations.map((l, j) => (i === j ? { ...l, phones } : l))
            )
          }
          onEditMap={() =>
            latitude && longitude
              ? setEditMap({ title, latitude, longitude, index: i })
              : null
          }
        />
      ))}
      <AddButton
        title="Додати філію"
        onClick={() => setModal(true)}
        error={!!errors.includes("locations")}
      />
    </StyledAffiliaties>
  );
};

const StyledAffiliaties = styled.div``;
