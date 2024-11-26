import styled from "styled-components";
import { Modal } from "../Modal/Modal";
import { MapComponent } from "./MapComponent";
import { useEffect, useState } from "react";
import { Button } from "../Button";
import { Location } from "./Location";

interface Props {
  onClose: () => void;
  onAdd: (data: { title: string; latitude: string; longitude: string }) => void;
  data?: { title: string; latitude: string; longitude: string };
}

export const MapModal = ({ onClose, onAdd, data }: Props) => {
  const [location, setLocation] = useState<
    { title: string; latitude: string; longitude: string } | undefined
  >(undefined);

  const handleAdd = () => {
    location && onAdd(location);
    onClose();
  };

  useEffect(() => {
    data && setLocation(data);
  }, [data]);

  return (
    <StyledMapModal>
      <Modal onClose={onClose}>
        <div>
          <MapComponent
            onChangeLocation={(val) => setLocation(val)}
            location={location}
          />
          {location ? (
            <Location
              location={location?.title}
              onChange={(title) => setLocation({ ...location, title })}
            />
          ) : null}
          <Button
            title="Зберегти"
            className="mt-2"
            disabled={!location}
            onClick={handleAdd}
          />
        </div>
      </Modal>
    </StyledMapModal>
  );
};

const StyledMapModal = styled.div`
  .modal-content {
    width: 700px;
    padding-top: 33px;
  }
`;
