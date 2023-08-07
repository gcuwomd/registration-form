<template>
  
  
  <form>
    <div class="form-group row">
      <label class="col col-form-label">学号</label>
      <div class="col">
        <el-input v-model="form.id" placeholder="请输入学号"></el-input>
      </div>
    </div>
    <div class="form-group row">
      <label class="col col-form-label">姓名</label>
      <div class="col">
        <el-input v-model="form.name" placeholder="请输入姓名"></el-input>
      </div>
    </div>
    <div class="form-group row">
      <label class="col col-form-label">性别</label>
      <div class="col">
        <el-radio-group v-model="form.sex">
          <el-radio label="男"></el-radio>
          <el-radio label="女"></el-radio>
        </el-radio-group>
      </div>
    </div>
    <div class="form-group row">
      <label class="col col-form-label">学院</label>
      <div class="col">
        <el-select v-model="form.college" placeholder="请选择学院">
          <el-option v-for="option in collegeOptions" :key="option.value" :label="option.label" :value="option.value"></el-option>
        </el-select>
      </div>
    </div>
    <div class="form-group row">
      <label class="col col-form-label">专业</label>
      <div class="col">
        <el-input v-model="form.major" placeholder="请输入专业"></el-input>
      </div>
    </div>
    <div class="form-group row">
      <label class="col col-form-label">第一意向部门</label>
      <div class="col">
        <el-select v-model="form.firstIntention" placeholder="请选择第一意向部门">
          <el-option v-for="option in sectionOptions" :key="option.value" :label="option.label" :value="option.value"></el-option>
        </el-select>
      </div>
    </div>
    <div class="form-group row">
      <label class="col col-form-label">第二意向部门</label>
      <div class="col">
        <el-select v-model="form.secondIntention" placeholder="请选择第二意向部门">
          <el-option v-for="option in sectionOptions" :key="option.value" :label="option.label" :value="option.value"></el-option>
        </el-select>
      </div>
    </div>
    <div class="form-group row">
      <label class="col col-form-label">联系电话</label>
      <div class="col">
        <el-input v-model="form.phone" placeholder="请输入联系电话"></el-input>
      </div>
    </div>
    <div class="form-group row">
      <label class="col col-form-label">是否服从调剂</label>
      <div class="col">
        <el-switch v-model="form.adjust"></el-switch>
      </div>
    </div>
    <div class="form-group row">
      <label class="col col-form-label">自我介绍</label>
      <div class="col">
        <el-input type="textarea" v-model="form.introduction"></el-input>
      </div>
    </div>
    <!-- <div class="form-group row">
      <div class="col-sm-10">
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
      </div>
    </div> -->
  </form>

</template>
<script lang="ts" setup>

import { reactive, } from "vue";
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
  
            
   const  form:IApply=reactive( {
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