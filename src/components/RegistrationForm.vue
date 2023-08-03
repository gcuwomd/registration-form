<template>
  <el-form ref="form" :model="form" label-position="top">
    <el-form-item label="学号">
      <el-input v-model="form.id" placeholder="请输入学号"></el-input>
    </el-form-item>
    <el-form-item label="姓名">
      <el-input v-model="form.name" placeholder="请输入姓名"></el-input>
    </el-form-item>
    <el-form-item label="性别">
      <el-radio-group v-model="form.sex">
        <el-radio label="男"></el-radio>
        <el-radio label="女"></el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="学院">
      <el-select v-model="form.college" placeholder="请选择学院">
        <el-option label="区域一" value="shanghai"></el-option>
        <el-option label="区域二" value="beijing"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="专业">
      <el-input v-model="form.major" placeholder="请输入专业"></el-input>
    </el-form-item>
    <el-form-item label="第一意向部门">
      <el-select v-model="form.firstIntention" placeholder="请选择第一意向部门">
        <el-option label="区域一" value="shanghai"></el-option>
        <el-option label="区域二" value="beijing"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="第二意向部门">
      <el-select
        v-model="form.secondIntention"
        placeholder="请选择第二意向部门"
      >
        <el-option label="区域一" value="shanghai"></el-option>
        <el-option label="区域二" value="beijing"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="联系电话">
      <el-input v-model="form.phone" placeholder="请输入联系电话"></el-input>
    </el-form-item>
    <el-form-item label="是否服从调剂">
      <el-space>
        <el-switch v-model="form.adjust"></el-switch>
        <span>服从部门调剂被录取的概率更大哦~</span>
      </el-space>
    </el-form-item>
    <el-form-item label="自我介绍">
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
      </el-space>
    </el-form-item>
    <el-form-item>
      <el-button
        style="width: 100%"
        @click="onSubmit"
        type="primary"
        :disabled="btnDisabled"
        >提交</el-button
      >
    </el-form-item>
  </el-form>
</template>

<style scoped>
.el-select,
.el-input_inner {
  width: 100%;
}
</style>

<script>
export default {
  data() {
    return {
      form: {
        id: null,
        name: null,
        sex: null,
        college: null,
        major: null,
        firstIntention: null,
        secondIntention: null,
        phone: null,
        adjust: false,
        introduction: null,
      },
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
  },
};
</script>

