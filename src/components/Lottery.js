import React, { useState, useEffect } from 'react';

const getStorageMask = () => {
  let mask = 'no-mask';
  if (localStorage.getItem('mask')) {
    mask = localStorage.getItem('mask');
  }
  return mask
}
const Lottery = () => {
  const [ mask, setMask ] = useState('no-mask');
  const handleLotteryStart = () => {
    mask === 'no-mask' ? setMask('is-mask') : setMask('no-mask')
  }
  return (
    <div className='wrapper'>
      <div className={[mask,'item-style'].join(' ')}>奖品</div>
      <div className={[mask,'item-style'].join(' ')}>奖品</div>
      <div className={[mask,'item-style'].join(' ')}>奖品</div>
      <div className={[mask,'item-style'].join(' ')}>奖品</div>
      <button className='btn-child' onClick={handleLotteryStart}>抽奖</button>
      <div className={[mask,'item-style'].join(' ')}>奖品</div>
      <div className={[mask,'item-style'].join(' ')}>奖品</div>
      <div className={[mask,'item-style'].join(' ')}>奖品</div>
      <div className={[mask,'item-style'].join(' ')}>奖品</div>
    </div>
    
  )
}

export default Lottery;