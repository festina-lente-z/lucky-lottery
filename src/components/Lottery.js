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
    id: 0,
    rate: 0.1
  },
  {
    mask: "no-mask",
    id: 1,
    rate: 0.2
  },
  {
    mask: "no-mask",
    id: 2,
    rate: 0.1
  },
  {
    mask: "no-mask",
    id: 3,
    rate: 0.2
  }, 
  {
    mask: "no-mask",
    id: 4,
    rate: 0.1
  },
  {
    mask: "no-mask",
    id: 5,
    rate: 0.1
  },
  {
    mask: "no-mask",
    id: 6,
    rate: 0.1
  },
  {
    mask: "no-mask",
    id: 7,
    rate: 0.1
  }
];

const Lottery = () => {
  // 当前转动的次数
  // let currentIndex = 0;
  let count = 0;
  let speed = 50;
  // 遮罩
  const [ mask, setMask ] = useState(mockData);
  // 当前转动次数
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleLotteryStart = () => {
    // mask === 'no-mask' ? setMask('is-mask') : setMask('no-mask')
    const currentItem = currentIndex % 8;
    setMask(preItem => preItem.map(item => {
      if (item.id === currentItem) {
        item.mask = 'is-mask';
      } else {
        item.mask = 'no-mask';
      }
      return item
    }));
    // 控制旋转次数
    currentIndex<150 ? setCurrentIndex(currentIndex+1) : setCurrentIndex(0);
  };
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (currentIndex) {
        handleLotteryStart();
      }
    }, speed)
    return () => clearTimeout(timeout)
  },[currentIndex]);
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