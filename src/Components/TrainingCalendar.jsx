import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

// Import Leaflet map components
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

// Fix icon issues in Leaflet
import L from "leaflet";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

// This fix ensures marker icons show up correctly
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const TrainingCalendar = () => {
  return (
    <>
      <div className="bg-[#21272e] w-185 h-123 rounded-4xl">
        <MapContainer
          center={[51.505, -0.09]} // Example: London
          zoom={13}
          style={{ height: "100%", width: "100%", borderRadius: "inherit" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={[51.505, -0.09]}>
            <Popup>Training location here!</Popup>
          </Marker>
        </MapContainer>
      </div>
    </>
  );
};

export default TrainingCalendar;
