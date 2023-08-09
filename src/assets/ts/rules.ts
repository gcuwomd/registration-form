import { reactive, ref } from "vue";
import type { FormRules } from "element-plus";
import { IApply } from "../../types";
export const rules = reactive<FormRules>({
  id: [
    {
      required: true,
      validator(rule: any, value: string) {
        if (!value) {
          return new Error("请输入学号");
        } else if (value.length !== 12) {
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
      message: "请选择你的第一意向部门",
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

// function onSubmit() {
//   this.$refs.form.validate((valid) => {
//     if (valid) {
//       console.log("submit!");
//     } else {
//       console.log("error submit!");
//     }
//   });
// }
// const onSubmit = async (formEl: FormInstance | undefined) => {
//   if (!formEl) return;
//   await formEl.validate((valid, fields) => {
//     if (valid) {
//       // 校验成功
//       console.log("submit!");
//     } else {
//       // 校验失败
//       console.log("error submit!", fields);
//     }
//   });
// };
//清除校验效果并且清空表单参数的函数
// const resetForm = (formEl: FormInstance | undefined) => {
//   if (!formEl) return;
//   formEl.resetFields();
// };
// const options = Array.from({ length: 10000 }).map((_, idx) => ({
//   value: `${idx + 1}`,
//   label: `${idx + 1}`,
// }));
