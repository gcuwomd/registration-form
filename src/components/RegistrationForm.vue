<template>
  <el-form ref="form" :model="form" label-width="80px">
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
      <el-switch v-model="form.adjust"></el-switch>
    </el-form-item>
    <el-form-item label="自我介绍">
      <el-input type="textarea" v-model="form.introduction"></el-input>
    </el-form-item>
    <!-- <el-form-item>
      <el-button type="primary" @click="onSubmit">立即创建</el-button>
      <el-button>取消</el-button>
    </el-form-item> -->
  </el-form>
</template>
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

