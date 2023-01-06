import { reactive, toRefs } from 'vue'
import { defineStore } from 'pinia'
import { store } from '@/store'
interface IApp {
  token: string
}
export const useAppStore = defineStore('app', () => {
  const state = reactive<IApp>({
    token: 'oagkrghkdhgkyiygegrjbsknafhahfahglahelg'
  })
  return {
    ...toRefs(state)
  }
})

/** 在 setup 外使用 */
export function useAppStoreHook() {
  return useAppStore(store)
}
