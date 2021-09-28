import React from 'react';
import Lottery from './components/Lottery'  //好像有省略写法
import LotteryModal from './components/LotteryModal';
import LotteryWebsocket from './components/LotteryWebsocket'
import './index.css'

const App = () => {
  return (
    <div>
      {/* <Lottery/> */}
      <LotteryWebsocket/>
    </div>
    
  );
}

export default App;
