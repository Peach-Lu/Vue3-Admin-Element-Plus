import router from './index'
console.log('router-------------', router)
// 导航守卫
router.beforeEach(async (to, from) => {
  console.log(to)
})
