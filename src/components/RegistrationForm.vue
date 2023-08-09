<script lang="ts" setup>
import { reactive, ref } from "vue";
import { IApply } from "../types/index";
import { collegeOptions, sectionOptions } from "../assets/ts/options";
import { rules } from "../assets/ts/rules";
const collegeOption = reactive(collegeOptions);
const firstSectionOption = reactive(sectionOptions);
const secondSectionOption = reactive(sectionOptions);
const photoFile = ref(null);
const onChange = (file: any) => {
  photoFile.value = file.raw;
};

const form: IApply = reactive({
  id: null,
  username: null,
  gender: null,
  college: null,
  major: null,
  firstIntention: null,
  secondIntention: null,
  phone: null,
  introduction: null,
});
</script>
<template >
  <el-form ref="forms" :model="form" :rules="rules" label-position="top">
    <el-form-item label="学号" prop="id">
      <el-input v-model="form.id" placeholder="请输入学号"></el-input>
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
        <el-option
          v-for="option in collegeOptions"
          :Key="option.value"
          :label="option.label"
          :value="option.value"
        ></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="专业" prop="major">
      <el-input v-model="form.major" placeholder="请输入专业"></el-input>
    </el-form-item>
    <el-form-item label="第一意向部门" prop="firstIntention">
      <el-select v-model="form.firstIntention" placeholder="请选择第一意向部门">
        <el-option
          v-for="option in firstSectionOption"
          :Key="option.value"
          :label="option.label"
          :value="option.value"
          :disabled="option.value == form.secondIntention"
        ></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="第二意向部门" prop="secondIntention">
      <el-select
        v-model="form.secondIntention"
        placeholder="请选择第二意向部门"
      >
        <el-option
          v-for="option in secondSectionOption"
          :Key="option.value"
          :label="option.label"
          :value="option.value"
          :disabled="option.value == form.firstIntention"
        ></el-option>
      </el-select>
    </el-form-item>

    <el-form-item label="联系电话" prop="phone">
      <el-input v-model="form.phone" placeholder="请输入联系电话"></el-input>
    </el-form-item>
    <el-form-item label="自我介绍" prop="introduction">
      <el-input
        type="textarea"
        v-model="form.introduction"
        minlength="10"
        placeholder="用不少于10个字符的一段话介绍一下自己吧~"
      ></el-input>
    </el-form-item>
    <el-form-item
      label="上传你的照片可以加深我们对你的印象哦~"
      :show-label="false"
    >
      <el-space vertical>
        <el-upload @change="onChange" @before-upload="checkFileType" :max="1">
          <el-button>上传文件</el-button>
        </el-upload>
        <a v-if="photoFile" :href="URL.createObjectURL(photoFile)">{{
          photoFile.name
        }}</a>
      </el-space>
    </el-form-item>
    <el-form-item>
      <el-button
        style="width: 100%"
        @click="onSubmit(forms)"
        type="primary"
        :disabled="btnDisabled"
        >提交</el-button
      >
    </el-form-item>
  </el-form>
</template>

<style>
.el-input,
.el-select {
  width: 100%;
}
</style>