<!--  -->
<template>
  <div class="login">
    <h1>Login</h1>
    <div class="form">
      <label for="username" >Username</label>
      <input v-model="username" type="text" name="username" class="input">
      <label for="password">Password</label>
      <input v-model="password" type="password" class="input">
      <button @click="login" class="btn">Login</button>
    </div>
  </div>
</template>

<script>
import store from '@/store';
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      username: null,
      password: null,
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    login(){
      //用户登录API
      store.user = this.username
      this.$router.push("/user")
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style scoped>
.form {
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto;
}
</style>