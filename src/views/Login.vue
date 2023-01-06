<template>
  <div class="login">
    login
    <button @click="change">加号</button>
    {{ userStore.state.counter }}
    {{ appstore.token }}
  </div>
</template>

<script setup lang="ts">
import { useUserStore, useUserStore2 } from '@/store/modules/user/index'
import { useAppStore } from '@/store/modules/app'
const userStore = useUserStore()
const appstore = useAppStore()
const change = () => {
  userStore.increment()
  // appstore.token += userStore.counter
}
</script>

<style lang="scss" scoped>

</style>
