import React from 'react';
import HPlatform, { HMap, HMapMarker } from 'react-here-map';

const HereMap = props => {
  return (
    <HPlatform
      app_id={process.env.GEO_APP_ID}
      app_code={process.env.GEO_APP_CODE}
      useCIT
      interactive
      useHTTPS
      includeUI
      includePlaces
      createDefaultLayers
    >
      <HMap
        style={{
          height: '400px',
          width: '80%'
        }}
        mapOptions={{
          center: { lat: -1.613817, lng: -47.482027 },
          zoom: 14
        }}
      >
        <HMapMarker coords={{ lat: -1.613817, lng: -47.482027 }} />
      </HMap>
    </HPlatform>
  );
};
export default HereMap;
