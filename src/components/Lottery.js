import React, { useState, useEffect } from 'react';
import LotteryItem from './LotteryItem';

const getStorageMask = () => {
  let mask = 'no-mask';
  if (localStorage.getItem('mask')) {
    mask = localStorage.getItem('mask');
  }
  return mask
}
const Lottery = () => {
  const numbers = [0,1,2,3,4,5,6,7];
  const [ mask, setMask ] = useState('no-mask');
  const handleLotteryStart = () => {
    mask === 'no-mask' ? setMask('is-mask') : setMask('no-mask')
  }
  return (
    <div className='wrapper'>
      {numbers.map((item,index)=>{
        return <LotteryItem mask={mask} key={index} area={'item'+item} prize={item}/>
      })}
      <button className='btn-child item8' onClick={handleLotteryStart}>抽奖</button>
    </div>
    
  )
}

export default Lottery;