<script setup lang="ts">
import RegistrationForm from "./components/RegistrationForm.vue"
</script>

<template>
  <div class="container">
    <h2>
      <span>网信委招新报名系统</span>
      <img src="./assets/logo.png" alt="">
    </h2>

<RegistrationForm></RegistrationForm>

    
  </div>

</template>

<style scoped>
.container {
  padding: 10px 20px;
}
h2 {
    display: flex;
    align-items: center;
    
}
img {
  width: 40px;
  height: 40px;
  display: inline;
}
</style>
