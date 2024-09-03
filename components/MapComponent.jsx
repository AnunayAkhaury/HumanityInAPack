import React from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';

const MapComponent = () => {
  const [selectedPlace, setSelectedPlace] = React.useState(null);

  const mapStyles = {
    height: '400px',
    width: '100%',
  };

  const defaultCenter = {
    lat: 37.7749, // Replace with your latitude
    lng: -122.4194, // Replace with your longitude
  };

  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={14}
        center={defaultCenter}
      >
        <Marker
          position={defaultCenter}
          onClick={() => setSelectedPlace({ name: 'BizBud', position: defaultCenter })}
        />
        {selectedPlace && (
          <InfoWindow
            position={selectedPlace.position}
            onCloseClick={() => setSelectedPlace(null)}
          >
            <div>
              <h4>{selectedPlace.name}</h4>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;
