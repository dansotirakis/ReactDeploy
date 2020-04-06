import React from 'react';

function Commitizen({ height = 60, width = 60 }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill="none" viewBox="0 0 450 450">
      <path fill="#5A86CB" d="M300 0v300H150V0h150zM150 150v300H0V150h150z" />
      <path fill="#5A86CB" d="M450 150H150V0h300v150zM300 300H0V150h300v150z" />
      <path fill="url(#paint0_linear)" d="M300 150H450V300H300z" transform="rotate(90 300 150)" />
      <path fill="url(#paint1_linear)" d="M150 300H300V450H150z" transform="rotate(90 150 300)" />
      <defs>
        <linearGradient id="paint0_linear" x1="300" x2="360" y1="150" y2="180" gradientUnits="userSpaceOnUse">
          <stop stopOpacity="0.35" />
          <stop offset="1" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="paint1_linear" x1="150" x2="210" y1="300" y2="330" gradientUnits="userSpaceOnUse">
          <stop stopOpacity="0.35" />
          <stop offset="1" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default Commitizen;
