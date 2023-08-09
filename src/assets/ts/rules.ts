import { reactive, ref } from "vue";
import type { FormRules } from "element-plus";
import { IApply } from "../../types";
export const rules = reactive<FormRules>({
  id: [
    {
      required: true,
      validator(rules: any, value: string) {
        const accountRegex = /^\d{12}$/;
        if (!value) {
          return new Error("请输入学号");
        }else if (!accountRegex.test(value)) {
          return new Error("请输入正确的学号");
        }
        return true;
      },
      trigger: "blur",
    },
  ],
  username: [
    {
      required: true,
      message: "请输入姓名",
      trigger: "blur",
    },
  ],
  gender: [
    {
      required: true,
      message: "请选择性别",
      trigger: "blur",
    },
  ],
  college: [
    {
      required: true,
      type: "string",
      message: "请选择你的学院",
      trigger: ["blur", "change"],
    },
  ],
  major: [
    {
      required: true,
      message: "请输入你的专业",
      trigger: "blur",
    },
  ],
  firstIntention: [
    {
      type: "string",
      required: true,
      trigger: ["blur", "change"],
    },
  ],
  secondIntention: [
    {
      type: "string",
      required: true,
      trigger: ["blur", "change"],
     
    },
  ],
  phone: [
    {
      required: true,
      validator(rules: any, value: string) {
        const phone_grep = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;
        if (!value) {
          return new Error("请输入手机号码");
        }
        if (!phone_grep.test(value)) {
          return new Error("请输入正确的手机号码");
        }
        return true;
      },
      trigger: ["blur", "input"],
    },
  ],
  introduction: [
    {
      required: true,
      validator(rules: any, value: string) {
        if (!value) {
          return new Error("简单地自我介绍一下吧~");
        } else if (value.length < 10) {
          return new Error("自我介绍不能少于十个字符");
        }
        return true;
      },
      trigger: ["input", "blur"],
    },
  ],
});