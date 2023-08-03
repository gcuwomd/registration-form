<template>
  <el-form ref="form" :model="form" label-width="80px">
    <el-form-item label="学号">
      <el-input v-model="form.number" placeholder="请输入学号"></el-input>
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
    <!-- <el-form-item label="学院">
      <el-input v-model="form.name" placeholder="请输入姓名"></el-input>
    </el-form-item> -->
    <el-form-item label="专业">
      <el-input v-model="form.name" placeholder="请输入专业"></el-input>
    </el-form-item>
    <!-- <el-form-item label="第一意向部门">
      <el-input v-model="form.name" placeholder="请输入姓名"></el-input>
    </el-form-item>
    <el-form-item label="第二意向部门">
      <el-input v-model="form.name" placeholder="请输入姓名"></el-input>
    </el-form-item> -->
    <el-form-item label="联系电话">
      <el-input v-model="form.name" placeholder="请输入联系电话"></el-input>
    </el-form-item>

    <el-form-item label="活动区域">
      <el-select v-model="form.region" placeholder="请选择活动区域">
        <el-option label="区域一" value="shanghai"></el-option>
        <el-option label="区域二" value="beijing"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="活动时间">
      <el-col :span="11">
        <el-date-picker
          type="date"
          placeholder="选择日期"
          v-model="form.date1"
          style="width: 100%"
        ></el-date-picker>
      </el-col>
      <el-col class="line" :span="2">-</el-col>
      <el-col :span="11">
        <el-time-picker
          type="fixed-time"
          placeholder="选择时间"
          v-model="form.date2"
          style="width: 100%"
        ></el-time-picker>
      </el-col>
    </el-form-item>
    <el-form-item label="即时配送">
      <el-switch v-model="form.delivery"></el-switch>
    </el-form-item>
    <el-form-item label="活动性质">
      <el-checkbox-group v-model="form.type">
        <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
        <el-checkbox label="地推活动" name="type"></el-checkbox>
        <el-checkbox label="线下主题活动" name="type"></el-checkbox>
        <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
      </el-checkbox-group>
    </el-form-item>
    
    <el-form-item label="活动形式">
      <el-input type="textarea" v-model="form.desc"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">立即创建</el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  data() {
    return {
      form: {
        number: "",
        name: "",
        sex: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        desc: "",
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

