import React from 'react';
import Lottery from './components/Lottery'  //好像有省略写法
import LotteryModal from './components/LotteryModal';
import LotteryWebsocket from './components/LotteryWebsocket'
import Dashboard from './pages/Dashboard';
import './index.css'


const App = () => {
  return (
    <div>
      {/* <Lottery/> */}
      {/* <LotteryWebsocket/> */}
      <Dashboard/>
    </div>
    
  );
}

export default App;
