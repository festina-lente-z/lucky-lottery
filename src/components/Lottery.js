import React, { useState, useEffect } from 'react';
import LotteryItem from './LotteryItem';

const getStorageMask = () => {
  let mask = 'no-mask';
  if (localStorage.getItem('mask')) {
    mask = localStorage.getItem('mask');
  }
  return mask
}

const mockData = [
  {
    mask: "no-mask",
    id: 0
  },
  {
    mask: "no-mask",
    id: 1
  },
  {
    mask: "no-mask",
    id: 2
  },
  {
    mask: "no-mask",
    id: 3
  }, 
  {
    mask: "no-mask",
    id: 4
  },
  {
    mask: "no-mask",
    id: 5
  },
  {
    mask: "no-mask",
    id: 6
  },
  {
    mask: "no-mask",
    id: 7
  }
];

const Lottery = () => {
  // 当前转动的次数
  let currentIndex = 0;
  let count = 0;
  let speed = 50;
  const [ mask, setMask ] = useState({mask:'no-mask',id:0});
  const handleLotteryStart = () => {
    // mask === 'no-mask' ? setMask('is-mask') : setMask('no-mask')
    const currentItem = currentIndex % 8;
    currentIndex += 1;
    mockData.forEach(item => {
      const {id, mask} = item;
      mask = id == currentItem ? 'is-mask' : 'no-mask'
    });

  }
  return (
    <div className='wrapper'>
      {mockData.map((item,index)=>{
        const {mask, id} = item
        return <LotteryItem mask={mask} key={index} area={'item'+id} prize={id}/>
      })}
      <button className='btn-child item8' onClick={handleLotteryStart}>抽奖</button>
    </div>
    
  )
}

export default Lottery;