import { useEffect, useRef, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import districtsData from '../../data/warehouses.json';

// Component to move map view
const FlyToLocation = ({ position }) => {
  const map = useMap();
  useEffect(() => {
    if (position) {
      map.flyTo(position, 10); // Zoom level can be adjusted
    }
  }, [position, map]);
  return null;
};

const BangladeshMap = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPosition, setSelectedPosition] = useState(null);

  const handleSearch = () => {
    const foundDistrict = districtsData.find(
      (d) => d.district.toLowerCase() === searchTerm.toLowerCase()
    );
    if (foundDistrict) {
      setSelectedPosition([foundDistrict.latitude, foundDistrict.longitude]);
    } else {
      alert("District not found!");
    }
  };

  return (
    <div className="py-12 px-4 max-w-7xl mx-auto">
      <div className="mb-4 flex gap-2 items-center">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search District"
          className="px-4 py-2 border rounded w-64"
        />
        <button
          onClick={handleSearch}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Search
        </button>
      </div>

      <MapContainer
        center={[23.685, 90.3563]}
        zoom={7}
        scrollWheelZoom={true}
        className="h-[500px] w-full rounded-lg shadow"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'
        />

        {selectedPosition && <FlyToLocation position={selectedPosition} />}

        {districtsData.map(({ district, latitude, longitude, covered_area, flowchart }) => (
          <Marker key={district} position={[latitude, longitude]}>
            <Popup>
              <div>
                <h3 className="font-bold">{district}</h3>
                <p>
                  <strong>Covered Areas:</strong> {covered_area.join(", ")}
                </p>
                <p>
                  <a
                    href={flowchart}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                  >
                    View Flowchart
                  </a>
                </p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default BangladeshMap;
