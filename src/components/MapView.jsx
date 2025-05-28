// MapView.js
import { MapContainer, TileLayer, Marker, Polyline, Popup, useMap } from 'react-leaflet';
import { useEffect, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Coordinates for Westlands, Nairobi
const westlandsCoords = [-1.2648, 36.8041];

// Custom Icons
const userIcon = new L.Icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
  iconSize: [30, 30],
  iconAnchor: [15, 30],
  popupAnchor: [0, -30],
});

const destinationIcon = new L.Icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/684/684908.png',
  iconSize: [30, 30],
  iconAnchor: [15, 30],
  popupAnchor: [0, -30],
});

// Component to reset view when user location is found
function SetViewOnClick({ coords }) {
  const map = useMap();
  useEffect(() => {
    if (coords) {
      map.setView(coords, 13);
    }
  }, [coords, map]);
  return null;
}

// Function to calculate distance in kilometers using Haversine formula
function getDistanceKm(lat1, lon1, lat2, lon2) {
  const R = 6371;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return (R * c).toFixed(2);
}

const MapView = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [geoDenied, setGeoDenied] = useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserLocation([position.coords.latitude, position.coords.longitude]);
      },
      () => {
        setGeoDenied(true);
      }
    );
  }, []);

  return (
    <div style={{ height: '500px', width: '100%', borderRadius: '10px', overflow: 'hidden' }}>
      <MapContainer center={westlandsCoords} zoom={13} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Destination Marker */}
        <Marker position={westlandsCoords} icon={destinationIcon}>
          <Popup>Destination: Westlands, Nairobi</Popup>
        </Marker>

        {/* User Marker, Polyline & View Adjustment */}
        {userLocation && (
          <>
            <Marker position={userLocation} icon={userIcon}>
              <Popup>
                Your Location<br />
                You are {getDistanceKm(
                  userLocation[0], userLocation[1],
                  westlandsCoords[0], westlandsCoords[1]
                )} km from Westlands
              </Popup>
            </Marker>

            <Polyline
              positions={[userLocation, westlandsCoords]}
              pathOptions={{ color: 'blue', dashArray: '10, 10' }}
            />
            <SetViewOnClick coords={userLocation} />
          </>
        )}

        {/* Optional fallback message */}
        {!userLocation && geoDenied && (
          <Popup position={westlandsCoords}>
            <div>Geolocation disabled. Showing Westlands only.</div>
          </Popup>
        )}
      </MapContainer>
    </div>
  );
};

export default MapView;
