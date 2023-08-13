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
        maxlength="255"
        placeholder="用不少于10个字符的一段话介绍一下自己吧~"
      ></el-input>
    </el-form-item>
    <el-form-item
      label="上传你的照片可以加深我们对你的印象哦~"
      :show-label="false"
    >
      <el-space vertical>
        <el-upload
          ref="upload"
          action="http://43.139.117.216:8100/putPhoto"
          :on-exceed="onChange"
          :data="uploadData"
          multiple
          v-model:file-list="fileList"
          :auto-upload="false"
          list-type="picture-card"
          :on-preview="handlePictureCardPreview"
          :on-remove="handleRemove"
          :on-change="fileChange"
          accept=".jpeg,.png,.jpg,.bmp,.gif"
          :max="1"
        >
          <!-- <el-button>上传文件</el-button> -->
          <el-icon><Plus /></el-icon>
        </el-upload>
        <el-dialog v-model="dialogVisible">
          <img w-full :src="dialogImageUrl" alt="Preview Image" />
        </el-dialog>
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

<script lang="ts" setup>
import { reactive, ref, defineProps, watch } from "vue";
import type {
  FormInstance,
  UploadInstance,
  UploadProps,
  UploadRawFile,
  UploadFile,
  UploadUserFile
} from "element-plus";
import { genFileId, ElMessage } from "element-plus";
import { IApply } from "../types/index";
import { collegeOptions, sectionOptions } from "../assets/ts/options";
import { rules } from "../assets/ts/rules";
import { baseAxios } from "../const";
import { Plus } from "@element-plus/icons-vue";

const fileList = ref<UploadUserFile[]>([]);
const dialogImageUrl = ref('');
const dialogVisible = ref(false);
const formSize = ref("default");
const forms = ref<FormInstance>();
const upload = ref<UploadInstance>();
const form = reactive<IApply>({
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
const collegeOption = reactive(collegeOptions);
const firstSectionOption = reactive(sectionOptions);
const secondSectionOption = reactive(sectionOptions);
// 检测文件变动获取文件
function fileChange(file, fileList) {
    upload.fileList = fileList;
  }
// 上传文件
// const onChange: UploadProps["onExceed"] = (files: any) => {
//   upload.value!.clearFiles();
//   for (const i in fileList) {
//     const file = fileList[i] as UploadRawFile;
//     file.uid = genFileId();
//     upload.value!.handleStart(file);
//   }
// };

// 上传时除file外的额外参数
const uploadData = ref({
  id: form.id,
});
// 监听“form”上的更改，发生更改时用新值更新“uploadData.value”对象的“id”属性
watch(form, (newValue) => {
  uploadData.value.id = newValue.id;
});
//点击删除按钮
const handleRemove: UploadProps["onRemove"] = (uploadFile, uploadFiles) => {
  console.log(uploadFile, uploadFiles);
};
// 点击加号上传文件
const handlePictureCardPreview: UploadProps["onPreview"] = (uploadFile) => {
  dialogImageUrl.value = uploadFile.url!;
  dialogVisible.value = true;
};

// 提交
const onSubmit = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate((valid: any, fields: any) => {
    if (valid) {
      // 校验成功
      const volunteer = [
        {
          level: "1",
          volunteer: form.firstIntention,
        },
        {
          level: "2",
          volunteer: form.secondIntention,
        },
      ];
      const formdata = {
        id: form.id,
        username: form.username,
        introduction: form.introduction,
        major: form.major,
        college: form.college,
        phone: form.phone,
        gender: form.gender,
        volunteer: volunteer,
      };
      baseAxios.post("/user/register", formdata).then(() => {
        ElMessage({
          message: "报名成功！",
          type: "success",
        });
      });
      upload.value!.submit();
    } else {
      // 校验失败
      ElMessage.error('报名失败！')
    }
  });
};
</script>

<style>
.el-input,
.el-select {
  width: 100%;
}
</style>