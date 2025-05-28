// MapView.js
import { MapContainer, TileLayer, Marker, Polyline, Popup, useMap } from 'react-leaflet';
import { useEffect, useState } from 'react';
import L from 'leaflet';

const westlandsCoords = [-1.2648, 36.8041]; // Westlands, Nairobi

function SetViewOnClick({ coords }) {
  const map = useMap();
  useEffect(() => {
    if (coords) {
      map.setView(coords, 13);
    }
  }, [coords, map]);
  return null;
}

const MapView = () => {
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserLocation([
          position.coords.latitude,
          position.coords.longitude
        ]);
      },
      () => {
        alert('Geolocation not allowed. Showing Westlands only.');
      }
    );
  }, []);

  return (
    <div style={{ height: '500px', width: '100%' }}>
      <MapContainer center={westlandsCoords} zoom={13} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={westlandsCoords}>
          <Popup>Destination: Westlands, Nairobi</Popup>
        </Marker>

        {userLocation && (
          <>
            <Marker position={userLocation}>
              <Popup>Your Location</Popup>
            </Marker>
            <Polyline positions={[userLocation, westlandsCoords]} color="blue" />
            <SetViewOnClick coords={userLocation} />
          </>
        )}
      </MapContainer>
    </div>
  );
};

export default MapView;
