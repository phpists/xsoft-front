// @ts-nocheck
import { MapContainer, Marker, TileLayer, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import styled from "styled-components";
import { useEffect, useState } from "react";
import L from "leaflet";

import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import axios from "axios";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

const API_KEY = "AIzaSyB-Pl13k-vv6MPhsCu3lsdHNOiA4bScxnw";

interface Props {
  onChangeLocation: (
    val: { title: string; latitude: string; longitude: string } | undefined
  ) => void;
  location: { title: string; latitude: string; longitude: string } | undefined;
}

export const MapComponent = ({ onChangeLocation, location }: Props) => {
  const [position, setPosition] = useState<undefined | number[]>(
    location?.latitude ? [location?.latitude, location?.longitude] : undefined
  );

  function MyComponent() {
    const map = useMapEvents({
      click: (e: any) => {
        const { lat, lng }: { lat: number; lng: number } = e.latlng;
        setPosition([lat, lng]);
      },
    });
    return null;
  }

  useEffect(() => {
    if (position?.[0] !== location?.latitude) {
      axios
        .get(
          `https://maps.googleapis.com/maps/api/geocode/json?latlng=${position?.[0]},${position?.[1]}&key=${API_KEY}`
        )
        .then((resp) =>
          onChangeLocation({
            title: resp?.data?.results?.[1]?.formatted_address,
            latitude: position[0],
            longitude: position[1],
          })
        );
    }
  }, [position]);

  useEffect(() => {
    location?.latitude &&
      setPosition([location?.latitude, location?.longitude]);
  }, [location]);

  return (
    <StyledMapComponent>
      <MapContainer
        center={[48.383022, 31.1828699]}
        zoom={7}
        style={{ width: "100%", height: "100%" }}
      >
        <TileLayer
          // url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}"
          url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png"
        />
        {position ? <Marker position={position} /> : null}
        <MyComponent />
      </MapContainer>
    </StyledMapComponent>
  );
};

const StyledMapComponent = styled.div`
  width: 100vw;
  max-width: 100%;
  height: 400px;
  .leaflet-draw-edit-edit {
    display: none !important;
  }
`;
