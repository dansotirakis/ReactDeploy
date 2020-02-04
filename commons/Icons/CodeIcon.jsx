import React from 'react';

const CodeIcon = ({ height = 60, width = 60 }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} data-name="Layer 1" viewBox="0 0 64 64">
      <path fill="#4370ff" d="M58 47V17L33 2h-2L6 17v30l25 15h2z"></path>
      <path d="M18.26 39.07L11.19 32l7.07-7.07 2.83 2.83L16.85 32l4.24 4.24zM45.74 39.07l-2.83-2.83L47.15 32l-4.24-4.24 2.83-2.83L52.81 32z"></path>
      <path d="M22.57 30h18.86v4H22.57z" transform="rotate(-45 31.999 32.002)"></path>
      <path d="M51.44 15.39L56 18.13v27.74L32.45 60h-.9L8 45.87V18.13L31.55 4h.9l15.45 9.27 2.91-2.91L33.55 0h-3.1L4 15.87v32.26L30.45 64h3.1L60 48.13V15.87l-5.65-3.39z"></path>
    </svg>
  );
};

export default CodeIcon;
