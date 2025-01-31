import React, { useState, useEffect } from 'react';
import DonatedList from '../components/DonatedList.jsx';
import DataVis from '../components/DataVis.jsx';
import Tabs from '../components/Tabs.jsx';
const Donations = ({ isCharity, setIsCharity, username, changeToSearch, changeToDonation }) => {
  return (
    <div>
      <Tabs changeToSearch={changeToSearch} changeToDonation={changeToDonation}/>
      <DonatedList username={username} isCharity={isCharity} setIsCharity={setIsCharity} />
      <DataVis isCharity={isCharity} />
    </div>
  )
}
export default Donations;