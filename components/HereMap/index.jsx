import React from 'react';
import HPlatform, { HMap, HMapMarker } from 'react-here-map';
import { Box, Link } from '@material-ui/core';

const HereMap = props => {
  const estab = prop => {
    console.log(prop);

    if (
      /* if we're on iOS, open in Apple Maps */
      navigator.platform.indexOf('iPhone') !== -1 ||
      navigator.platform.indexOf('iPad') !== -1 ||
      navigator.platform.indexOf('iPod') !== -1
    )
      window.open(`maps://maps.google.com/maps?daddr=${props.casa.latitude},${props.casa.longitude}`);
    /* else use Google */ else
      window.open(`https://maps.google.com/maps?daddr=${props.casa.latitude},${props.casa.longitude}`);
  };
  return (
    <Box>
      {Boolean(props) && (
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
              zoom: 16
            }}
            useEvents
            //mapEvents={{ pointerdown: e => console.log('Map Pointer Down', e) }}
          >
            {props.pins.map(pin => (
              <HMapMarker coords={{ lat: pin.latitude, lng: pin.longitude }} />
            ))}
            <HMapMarker
              coords={{ lat: props.casa.latitude, lng: props.casa.longitude }}
              objectEvents={{ pointerdown: e => estab(props.casa) }}
            />
          </HMap>
        </HPlatform>
      )}
      <Box mt={5}>
        <Link onClick={() => estab(props.casa)}>{props.casa.nome}</Link>
      </Box>
    </Box>
  );
};

export default HereMap;
