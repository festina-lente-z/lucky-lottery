import { Row, Col } from 'antd';

const style = { background: '#0092ff', padding: '8px 0' };

const Dashboard = () => {
  return (
    <section>
      <Row gutter={16}>
        <Col span={8}>
          <div style={style}>1</div>
        </Col>
        <Col span={8}>
        <div style={style}>2</div>
        </Col>
        <Col span={8}>
        <div style={style}>3</div>
        </Col>
      </Row>
      <Row>
        <Col span={8}>8</Col>
        <Col span={8}>开始</Col>
        <Col span={8}>4</Col>
      </Row>
      <Row>
        <Col span={8}>7</Col>
        <Col span={8}>6</Col>
        <Col span={8}>5</Col>
      </Row>
    </section>
  )
}
export default Dashboard;