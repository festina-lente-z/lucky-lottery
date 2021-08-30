import React, { useState, useEffect } from 'react';

const getStorageMask = () => {
  let mask = 'no-mask';
  if (localStorage.getItem('mask')) {
    mask = localStorage.getItem('mask');
  }
  return mask
}

const LotteryBtn = () => {
  const [ mask, setMask ] = useState(getStorageMask());
  const handleStart = () => {
    mask === 'no-mask' ? setMask('is-mask') : setMask('no-mask')
  }
  useEffect(() => {
    document.documentElement.className = mask;
    localStorage.setItem('mask', mask);
  }, [mask])
  return (
    <div className='btn-parent'>
      <button className='btn-child' onClick={handleStart}>抽奖</button>
    </div>
  )
}

export default LotteryBtn;