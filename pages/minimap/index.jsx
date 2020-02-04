import React from 'react';
import Link from 'next/link';
import HereMap from '../../components/HereMap';
import 'isomorphic-fetch';

const MiniMap = ({ repositories }) => (
  <div>
    <Link href="/index">Home</Link>
    <h1>HereMap</h1>
    <HereMap />
  </div>
);

export default MiniMap;
