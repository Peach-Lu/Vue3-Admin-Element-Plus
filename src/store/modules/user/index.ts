import { reactive, toRefs, ref } from 'vue'
import { defineStore } from 'pinia'
import { store } from '@/store'
import { useAppStoreHook } from '@/store/modules/app'
interface IUser {
  counter: number
}
// 写法一
export const useUserStore = defineStore('useUserInfoStore', () => {
  const state = ref({
    counter: 0
  })
  const increment = () => {
    debugger
    console.log('increment')
    state.value.counter++
    useAppStoreHook().token += state.value.counter
  }
  // return { ...toRefs(state), increment }
  return { state, increment }
})
// 写法二
// export const useUserStore2 = defineStore('useUserInfoStore', {
//   state: () => {
//     return {
//       counter: 12
//     }
//   },
//   actions: {
//     increment() {
//       console.log('pinia', this.counter)
//       this.counter++
//       useAppStoreHook().token += this.counter
//     }
//   }
// })

/** 在 setup 外使用 */
export function useUserStoreHook() {
  return useUserStore(store)
}
