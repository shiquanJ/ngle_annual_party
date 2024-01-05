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
    title: "MatePad Pro",
    img: "../img/1.png"
  },
  {
    type: 2,
    count: 1,
    text: "一等奖",
    title: "华为手表",
    img: "../img/2.png"
  },
  {
    type: 3,
    count: 10,
    text: "二等奖",
    title: "户外烧烤套件",
    img: "../img/3.png"
  },
  {
    type: 4,
    count: 3,
    text: "三等奖",
    title: "保健品一套（3盒）",
    img: "../img/4.png"
  },
  {
    type: 5,
    count: 4,
    text: "四等奖",
    title: "VICTOR 全面型球拍",
    img: "../img/5.png"
  },
  {
    type: 6,
    count: 5,
    text: "五等奖",
    title: "司澜 ® 头皮修护 滋养精华液",
    img: "../img/6.png"
  },
  {
    type: 7,
    count: 6,
    text: "六等奖",
    title: "理芙丽佳 · 理肤丽佳抗初老冻干安瓶精华",
    img: "../img/7.png"
  },
];

/**
 * 一次抽取的奖品个数与prizes对应
 */
const EACH_COUNT = [1, 1, 1, 1, 1, 1, 1, 1];

/**
 * 卡片公司名称标识
 */
const COMPANY = "延边一中";

module.exports = {
  prizes,
  EACH_COUNT,
  COMPANY
};
