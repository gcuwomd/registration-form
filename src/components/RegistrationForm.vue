<template >
  <el-form ref="forms" :model="form"  :rules="rules" label-position="top">
    <el-form-item label="学号" prop="id">
      <el-input v-model="form.id"  placeholder="请输入学号"></el-input>
    </el-form-item>
    <el-form-item label="姓名" prop="username">
      <el-input v-model="form.username" placeholder="请输入姓名"></el-input>
    </el-form-item>
    <el-form-item label="性别" prop="gender">
      <el-radio-group v-model="form.gender">
        <el-radio label="男"></el-radio>
        <el-radio label="女"></el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="学院" prop="college">
      <el-select v-model="form.college" placeholder="请选择学院">
        <el-option v-for="option in collegeOptions" :Key="option.value" :label="option.label"
          :value="option.value"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="专业" prop="major">
      <el-input v-model="form.major" placeholder="请输入专业"></el-input>
    </el-form-item>
    <el-form-item label="第一意向部门" prop="firstIntention">
      <el-select v-model="form.firstIntention" placeholder="请选择第一意向部门">
        <el-option v-for="option in firstSectionOption" :Key="option.value" :label="option.label" :value="option.value"
          :disabled="option.value == form.secondIntention"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="第二意向部门" prop="secondIntention">
      <el-select v-model="form.secondIntention" placeholder="请选择第二意向部门">
        <el-option v-for="option in secondSectionOption" :Key="option.value" :label="option.label" :value="option.value"
          :disabled="option.value == form.firstIntention"></el-option>
      </el-select>
    </el-form-item>

    <el-form-item label="联系电话" prop="phone">
      <el-input v-model="form.phone" placeholder="请输入联系电话"></el-input>
    </el-form-item>
    <el-form-item label="自我介绍" prop="introduction">
      <el-input type="textarea" v-model="form.introduction" minlength="10" placeholder="用不少于10个字符的一段话介绍一下自己吧~"></el-input>
    </el-form-item>
    <el-form-item label="上传你的照片可以加深我们对你的印象哦~" :show-label="false">
      <el-space vertical>
        <el-upload   :max="1" action="http://43.139.117.216:8100/putPhoto"
        class="upload-demo"
        :on-success="success"
        :before-upload="beforeUpload"
        :data="fid"

        >
          <el-button>上传文件</el-button>
        </el-upload>
      </el-space>
    </el-form-item>
    <el-form-item>
      <el-button style="width: 100%" @click="onSubmit(forms)" type="primary" :disabled="btnDisabled">提交</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import { reactive, ref, watch } from "vue";
import type { FormInstance } from "element-plus";
import { IApply } from "../types/index";
import { collegeOptions, sectionOptions } from "../assets/ts/options";
import { rules } from "../assets/ts/rules";
import { baseAxios } from "../const";

import { compileStyle } from "vue/compiler-sfc";
import { id } from "element-plus/es/locale/index.mjs";
const formSize = ref("default");
const forms = ref<FormInstance>();
 let  formid = ref<string | null | number>(null);
const collegeOption = reactive(collegeOptions);
const firstSectionOption = reactive(sectionOptions);
const secondSectionOption = reactive(sectionOptions);
const photoFile = ref(null);

let picture: string = "";
 

const form: IApply = reactive({
  id: '',
  username: null,
  gender: null,
  college: null,
  major: null,
  firstIntention: null,
  secondIntention: null,
  phone: null,
  introduction: null,
});
formid.value = form.id;
 
  const fid={
      id:formid.value
  }
//上传文件之前
function beforeUpload(file){
  if (file.type !== "image/jpeg" && file.type !== "image/png") {
    alert("只支持上传jpg或者png格式的照片哦~");
    return false;

  }
  console.log(fid.id)
  return true;
}

function success(e){
alert(e.message)


}





const onSubmit = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate((valid: any, fields: any) => {
    if (valid) {
      const volunteer = [
        {
          level: "1",
          volunteer: form.firstIntention
        },
        {
          level: "2",
          volunteer: form.secondIntention
        }
      ]
      const formdata = {
        id: form.id,
        username: form.username,
        introduction: form.introduction,
        major: form.major,
        college: form.college,
        phone: form.phone,
        gender: form.gender,
        volunteer: volunteer
      };
      baseAxios.post("/user/register", formdata).then((res: any) => {
        const message = res.data.message;
        alert(message);
      })
      // 校验成功
      // forms.$axios({
      //   method: "post",
      //   url: /user/eegirrst,
      //   formdata: {
      //     gender: form.gender,
      //     phone: form.phone,
      //     college: form.college,
      //     major: form.major,
      //     introduction: form.introduction,
      //     id: form.id,
      //     username: form.username,
      //   },
      // }).then((res : any) => {
      //   alert("报名成功！");
      // })
      console.log("submit!");
    } else {
      // 校验失败
      // console.log("error submit!", fields);
    }
  });
};
//清除校验效果并且清空表单参数的函数
// const resetForm = (formEl: FormInstance | undefined) => {
//   if (!formEl) return;
//   formEl.resetFields();
// };
// const options = Array.from({ length: 10000 }).map((_, idx) => ({
//   value: `${idx + 1}`,
//   label: `${idx + 1}`,
// }));

</script>

<style>
.el-input,
.el-select {
  width: 100%;
}
</style>