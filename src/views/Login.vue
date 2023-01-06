<template>
  <div class="login">
    login
    <button @click="change">加号</button>
  </div>
</template>

<script setup lang="ts">
import { useUserInfoStore } from '@/store/modules/userInfo/index'
const store = useUserInfoStore()
console.log('userStore,', store)
// const change = () => {
//   store.$path({
//     name: 'change'
//   })
// }
</script>

<style lang="scss" scoped>

</style>
