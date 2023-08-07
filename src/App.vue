<script setup lang="ts">
import RegistrationForm from "./components/RegistrationForm.vue"


</script>

<template>
   
   <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no">
    
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
  
  border-radius: 12px;
    background-color: rgba(255,255,255,.2);
    backdrop-filter: blur(15px);
    box-shadow: 0 0 10px #333;
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
