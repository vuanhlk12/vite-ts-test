function slugify(string: string) {
  const a =
    "àáäâãåăæąçćčđďèéěėëêęğǵḧìíïîįłḿǹńňñòóöôœøṕŕřßşśšșťțùúüûǘůűūųẃẍÿýźžż·/_,:;";
  const b =
    "aaaaaaaaacccddeeeeeeegghiiiiilmnnnnooooooprrsssssttuuuuuuuuuwxyyzzz------";
  const p = new RegExp(a.split("").join("|"), "g");
  return string
    .toString()
    .toLowerCase()
    .replace(/á|à|ả|ạ|ã|ă|ắ|ằ|ẳ|ẵ|ặ|â|ấ|ầ|ẩ|ẫ|ậ/gi, "a")
    .replace(/é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ/gi, "e")
    .replace(/i|í|ì|ỉ|ĩ|ị/gi, "i")
    .replace(/ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|ỗ|ộ|ơ|ớ|ờ|ở|ỡ|ợ/gi, "o")
    .replace(/ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự/gi, "u")
    .replace(/ý|ỳ|ỷ|ỹ|ỵ/gi, "y")
    .replace(/đ/gi, "d")
    .replace(/\s+/g, "-")
    .replace(p, (c) => b.charAt(a.indexOf(c)))
    .replace(/&/g, "-and-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
}

const options = [
  "mã tạo đỉnh 52 tuần",
  "mã tạo đáy 52 tuần",
  "mã có giá trên MA 200",
  "mã có giá trên MA 100",
  "mã có giá trên MA 50",
  "mã có giá trên MA 20",
  "mã phân kỳ dương 20 phiên",
  "mã phân kỳ dương 100 phiên",
  "mã phân kỳ âm 20 phiên",
  "mã phân kỳ âm 100 phiên",
];

export const selectOptions = options.map((name) => ({
  name,
  value: slugify(name),
}));

// select option
const selectOptions1 = [
  {
    name: "mã tạo đỉnh 52 tuần",
    value: "ma-tao-dinh-52-tuan",
  },
  {
    name: "mã tạo đáy 52 tuần",
    value: "ma-tao-day-52-tuan",
  },
  {
    name: "mã có giá trên MA 200",
    value: "ma-co-gia-tren-ma-200",
  },
  {
    name: "mã có giá trên MA 100",
    value: "ma-co-gia-tren-ma-100",
  },
  {
    name: "mã có giá trên MA 50",
    value: "ma-co-gia-tren-ma-50",
  },
  {
    name: "mã có giá trên MA 20",
    value: "ma-co-gia-tren-ma-20",
  },
  {
    name: "mã phân kỳ dương 20 phiên",
    value: "ma-phan-ky-duong-20-phien",
  },
  {
    name: "mã phân kỳ dương 100 phiên",
    value: "ma-phan-ky-duong-100-phien",
  },
  {
    name: "mã phân kỳ âm 20 phiên",
    value: "ma-phan-ky-am-20-phien",
  },
  {
    name: "mã phân kỳ âm 100 phiên",
    value: "ma-phan-ky-am-100-phien",
  },
];

// mock data
const mock = {
  dateList: ["yyyy-mm-dd", "yyyy-mm-dd", "yyyy-mm-dd", "yyyy-mm-dd"],
  chartData: [
    {
      name: "Số mã tạo đỉnh 52 tuần",
      type: "column", // fix cứng
      data: [148.905767271, 157.061043789, 48.372928004, 35.406959558],
      yAxis: 0, // fix cứng
      valueSuffix: "%", // fix cứng
      color: "#52C41A", // fix cứng
    },
    {
      name: "VNINDEX", // fix cứng
      type: "line", // fix cứng
      data: [
        9.000281518526464, 10.958611850356636, 9.55936265515931,
        8.680972893679535,
      ],
      yAxis: 1, // fix cứng
      valueSuffix: "", // fix cứng
      color: "#FE952B", // fix cứng
    },
  ],
  tableData: [
    { stockName: "SJC", rs: 48.23, TpScore: 7.9 },
    { stockName: "SJC", rs: 48.23, TpScore: 7.9 },
    { stockName: "SJC", rs: 48.23, TpScore: 7.9 },
  ],
};
