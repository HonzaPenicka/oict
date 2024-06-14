import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const icon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const greenIcon = new L.Icon({
  iconUrl:
    "https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|00FF00",
  iconSize: [21, 34],
  iconAnchor: [10, 34],
  popupAnchor: [0, -34],
});

interface Geometry {
  coordinates: [number, number];
}

interface Properties {
  id: string;
  name: string;
  description: string;
  address: string;
}

interface Feature {
  geometry: Geometry;
  properties: Properties;
}

interface MapProps {
  points: Feature[];
}

const Map = ({ points }: MapProps) => {
  useEffect(() => {
    L.Icon.Default.mergeOptions({
      iconRetinaUrl:
        "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
      iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
      shadowUrl:
        "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
    });
  }, []);

  return (
    <MapContainer
      center={[50.0755, 14.4378]}
      zoom={13}
      className="w-full h-full"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {points.map((point) => (
        <Marker
          key={point.properties.id}
          position={[
            point.geometry.coordinates[1],
            point.geometry.coordinates[0],
          ]}
          icon={greenIcon}
        >
          <Popup>
            <div>
              <h2>{point.properties.name}</h2>
              <p>{point.properties.description}</p>
              <p>{point.properties.address}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
