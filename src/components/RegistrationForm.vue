<template>
  
  <el-form ref="form" :model="form" label-width="80px">
    <el-form-item label="学号"  id="zi">
      <el-input v-model="form.id" placeholder="请输入学号"></el-input>
    </el-form-item>
    <el-form-item label="姓名" >
      <el-input v-model="form.name" placeholder="请输入姓名"></el-input>
    </el-form-item>
    <el-form-item label="性别" >
      <el-radio-group v-model="form.sex">
        <el-radio label="男"></el-radio>
        <el-radio label="女"></el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="学院" >
      <el-select v-model="form.college" placeholder="请选择学院" >
        <el-option v-for="option in collegeOptions" :Key="option.value"  :label="option.label" :value="option.value"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="专业" >
      <el-input v-model="form.major" placeholder="请输入专业" ></el-input>
    </el-form-item>
    <el-form-item label="第一意向部门" >
      <el-select v-model="form.firstIntention" placeholder="请选择第一意向部门"  >
<el-option v-for="option in sectionOptions " :Key="option.value"  :label="option.label" :value="option.value"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="第二意向部门">
      <el-select v-model="form.secondIntention" placeholder="请选择第二意向部门">
        <el-option v-for="option in sectionOptions " :Key="option.value"  :label="option.label" :value="option.value"></el-option>
      </el-select>
    </el-form-item>

    <el-form-item label="联系电话" >
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
<script lang="ts" setup>
import { reactive, ref } from "vue";
import { IApply, IOption } from "../types/index.ts";


 const collegeOptions:IOption[] =[
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
  const sectionOptions:IOption[] =[
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
  
    
   const   form:IApply=reactive( {
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
      })

</script>

<style scoped>
 

</style>