 export interface IApply {
  id: number |null,
  name:string |null,
  sex: string |null,
  college: string |null,
  major:boolean |null,
  firstIntention: string |null,
  secondIntention: string |null,
  phone: number|null,
  adjust: boolean,
  introduction: string |null
}
 export interface IOption {
  value: number;
  label: string;
  disabled?:boolean;
}
