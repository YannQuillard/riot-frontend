import React from 'react';
import '../App.css';
import PickLaneHeader from '../components/PicklaneHeader/PicklaneHeader';
import PicklaneTabs from '../components/PicklaneTabs/PicklaneTabs';

const PickLane = () => {
  return (
    <div className="wrap">
      <PickLaneHeader />
      <PicklaneTabs />
    </div>
    

  );
}

export default PickLane;
