/**
 * 奖品设置
 * type: 唯一标识，0是默认特别奖的占位符，其它奖品不可使用
 * count: 奖品数量
 * title: 奖品描述
 * text: 奖品标题
 * img: 图片地址
 */
const prizes = [
  {
    type: 0,
    count: 1000,
    title: "",
    text: "特别奖"
  },
  {
    type: 1,
    count: 1,
    text: "特等奖",
    title: "笔记本电脑",
    img: "../img/gift.jpg"
  },
  {
    type: 2,
    count: 1,
    text: "一等奖",
    title: "PS5",
    img: "../img/gift.jpg"
  },
  {
    type: 3,
    count: 2,
    text: "二等奖",
    title: "iPad",
    img: "../img/gift.jpg"
  },
  {
    type: 4,
    count: 3,
    text: "三等奖",
    title: "Nintendo Switch",
    img: "../img/gift.jpg"
  },
  {
    type: 5,
    count: 5,
    text: "四等奖",
    title: "键盘",
    img: "../img/gift.jpg"
  },
  {
    type: 6,
    count: 10,
    text: "五等奖",
    title: "鼠标",
    img: "../img/gift.jpg"
  },
  {
    type: 7,
    count: 10,
    text: "六等奖",
    title: "Kakao充电宝",
    img: "../img/gift.jpg"
  },
];

/**
 * 一次抽取的奖品个数与prizes对应
 */
const EACH_COUNT = [1, 1, 1, 1, 1, 1, 1, 1];

/**
 * 卡片公司名称标识
 */
const COMPANY = "NGLE";

module.exports = {
  prizes,
  EACH_COUNT,
  COMPANY
};
