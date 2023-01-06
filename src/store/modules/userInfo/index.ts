import { defineStore } from 'pinia'
export const useUserInfoStore = defineStore('useUserInfoStore', {
  state: () => {
    return {
      counter: 0,
      info: {}
    }
  },
  getters: {},
  actions: {
    increment() {
      this.counter++
    }
  }
})
