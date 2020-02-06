import React from 'react';
import HPlatform, { HMap, HMapMarker } from 'react-here-map';
import { Box, Dialog, Link } from '@material-ui/core';
import { useState } from 'react';
import { render } from '@testing-library/react';

const icon =
  '<svg width="24" height="24" ' +
  'xmlns="http://www.w3.org/2000/svg">' +
  '<rect stroke="white" fill="#1b468d" x="1" y="1" width="22" ' +
  'height="22" /><text x="12" y="18" font-size="12pt" ' +
  'font-family="Arial" font-weight="bold" text-anchor="middle" ' +
  'fill="white">H</text></svg>';

const HereMap = props => {
  const estab = prop => {
    console.log(prop);
    window.open(`http://maps.google.com/maps?daddr=${props.casa.latitude},${props.casa.longitude}`);
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
              icon={icon}
              objectEvents={{ pointerdown: e => estab(props.casa.nome) }}
            />
          </HMap>
        </HPlatform>
      )}
      <Link onClick={() => estab(props.casa)}>{props.casa.nome}</Link>
    </Box>
  );
};

export default HereMap;
