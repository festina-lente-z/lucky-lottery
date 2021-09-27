# 模拟掘金抽奖

## 需求

- [ ] 1. 实现抽奖前端页面
- [ ] 2. js模拟抽奖过程
- [ ] 3. 手工设置奖品池、每个奖品中奖概率、起始矿石数和每次抽奖耗费的矿石数
- [ ] 4. 完成抽奖后给出抽奖结果
- [ ] 5. 多次抽奖，显示中奖列表
- [ ] 6. nodejs实现一个简单的抽奖服务，实现需求3在后端配置
- [ ] 7. 实现提供奖池管理和奖品配置的后台，管理员配置总奖品数，单次抽奖中奖概率，控制大奖放出时机

## 思路

- 抽奖停止旋转后弹出弹窗，显示抽奖结果
  - 假设旋转150圈，弹窗应该在150圈结束后弹出
  - currentIndex记录当前处于第几圈，当>=150时会将currentIndex的值重置为0
- 动森主题
  - 背景：动森经典绿色加三角形，三角形浮动变化（类似antd首页浮动svg
  - 主人公狸克，豆狸兄弟
  - 配色可以参考商店，橱窗啊，内饰啊



## 问题

- antd会影响自己定义的样式
  - 核心问题就是 base.less 这个文件对全局样式的侵入
  - ~~决定把之前的css加上前缀来解决这个问题~~ 🙅
  - 把之前写的九宫格用antd重新布局 grid
