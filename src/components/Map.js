import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useState } from "react";

function Map({ data }) {
  const latitude = [data.location.lng];
  const longitude = [data.location.lat];
  console.log("helloooo");
  console.log(data.location.lng);
  console.log(data.location.lat);

  return (
    <div>
      <MapContainer
        center={[data.location.lat, data.location.lng]}
        zoom={13}
        style={{ height: 260, width: 370 }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[data.location.lat, data.location.lng]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
export default Map;
