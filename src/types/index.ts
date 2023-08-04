 interface IApply {
  id: number | null;
  name: string | null;
  college: string | null;
  firstIntention: string | null;
  secondIntention: string | null;
  phone: number | null;
  introduction: string | null;
  picture?: string | null;
}
 interface IOption {
  value: number;
  label: string;
  disabled?:boolean;
}
const collegeOptions: Array<IOption> = [
  {
      label: "计算机工程学院",
      value: 1,
  },
  {
      label: "电气工程学院",
      value: 2,
  },
  {
      label: "外国语学院",
      value: 3,
  },
  {
      label: "大数据学院",
      value: 4,
  },
  {
      label: "管理学院",
      value: 5,
  },
  {
      label: "通信工程学院",
      value: 6,
  },
  {
      label: "国际商学院",
      value: 7,
  },
  {
      label: "电子信息工程学院",
      value: 8,
  },
  {
      label: "土木工程学院",
      value: 9,
  },
];
const sectionOptions: Array<IOption> = [
  {
      label: "网站运维部",
      value: 11,
  },
  {
      label: "行政秘书部",
      value: 12,
  },
  {
      label: "网络运维部",
      value: 13,
  },
  {
      label: "信息化运维部",
      value: 14,
  },
];