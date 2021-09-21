import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import DoctorInfo  from './DoctorInfo';

const containerStyle = {
  width: '1000px',
  height: '1000px'
};

const center = {
  lat: 20.635769,
  lng: -103.260210 
};

function Map({ doctors, setDoctors}) {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyBX9VmPNBha2CdfgB0hyajF56XndUSK0fs"
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        { doctors.map((doctor) => 
            <DoctorInfo doctor={doctor}/>
        )}
      </GoogleMap>
  ) : <></>
}

export default React.memo(Map)