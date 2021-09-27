import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import stone from '../img/stone.awebp';

const LotteryModal = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return(
    <Modal title="🎉 恭喜中奖！" visible={true}>
      <img src={stone} alt="stone"/>
      <h2>恭喜获得66矿石</h2>
      <p>本次抽中的矿石已累加到你的当前矿石数中</p>
      <Button type="primary">
        再抽一次
      </Button>
    </Modal>
  )
}

export default LotteryModal;
