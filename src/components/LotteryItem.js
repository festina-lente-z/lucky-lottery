import React, { useState, useEffect } from 'react';

const LotteryItem = (props) => {
  const { mask, area, prize } = props;
  return (
    <div className={[mask,area,'item-style'].join(' ')}>奖品{prize}</div>
  )
}

export default LotteryItem;