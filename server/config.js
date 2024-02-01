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
    title: "Iroom吸尘器",
    img: "../img/iroom.webp"
  },
  {
    type: 2,
    count: 1,
    text: "一等奖",
    title: "拖地清扫机",
    img: "../img/tuodi.jpg"
  },
  {
    type: 3,
    count: 1,
    text: "二等奖",
    title: "咖啡机",
    img: "../img/kafeiji.jpg"
  },
  {
    type: 4,
    count: 1,
    text: "三等奖",
    title: "脉鲜卡式炉",
    img: "../img/maixian.jpg"
  },
  {
    type: 5,
    count: 1,
    text: "四等奖",
    title: "多功能烹饪锅",
    img: "../img/duogongneng.jpg"
  },
  {
    type: 6,
    count: 1,
    text: "五等奖",
    title: "蔬菜水果搅拌机",
    img: "../img/shucai.jpg"
  },
  {
    type: 7,
    count: 6,
    text: "六等奖",
    title: "红外线烤肉机",
    img: "../img/hongwaixian.jpg"
  },
  {
    type: 8,
    count: 3,
    text: "七等奖",
    title: "炒锅礼盒",
    img: "../img/chaojianguo.jpg"
  },
];

/**
 * 一次抽取的奖品个数与prizes对应
 */
const EACH_COUNT = [1, 1, 1, 1, 1, 1, 1, 1, 1];

/**
 * 卡片公司名称标识
 */
const COMPANY = "RWS";

module.exports = {
  prizes,
  EACH_COUNT,
  COMPANY
};
