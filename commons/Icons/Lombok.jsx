import React from 'react';

function Lombok({ height = 60, width = 60 }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} version="1" viewBox="0 0 225 225">
      <path
        d="M995 2240c-249-28-491-146-665-324l-54-56h849l850 1-80 77c-151 147-333 242-543 287-86 18-267 26-357 15zM50 1450c-35-122-43-185-43-325s8-203 43-325l19-65h2112l19 65c35 122 43 185 43 325s-8 203-43 325l-19 65H69l-19-65zM340 324c36-36 109-95 162-130 378-253 868-253 1246 0 53 35 126 94 162 130l64 66H276l64-66z"
        transform="matrix(.1 0 0 -.1 0 225)"
      />
    </svg>
  );
}

export default Lombok;
