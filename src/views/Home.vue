<!--  -->
<template>
<div class='home'>
  <h1>All Destinations</h1>
  <div class="destinations">
  <div v-for="destination in destinations"
    :key="destination.name"
    >
    <router-link :to="{name: 'DestinationDetails', params:{slug:destination.slug}}">
      <h2>{{destination.name}}</h2>
    </router-link>
    <figure>
      <router-link :to="{name: 'DestinationDetails', params:{slug:destination.slug}}">
        <img :src="require(`@/assets/${destination.image}`)" 
        :alt="destination.name">
      </router-link>
    </figure>
    </div>
  </div>
  
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import store from '@/store.js'
export default {
//import引入的组件需要注入到对象中才能使用
components: {},
data() {
//这里存放数据
return {
  destinations: store.destinations
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {

},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

},
beforeCreate() {}, //生命周期 - 创建之前
beforeMount() {}, //生命周期 - 挂载之前
beforeUpdate() {}, //生命周期 - 更新之前
updated() {}, //生命周期 - 更新之后
beforeDestroy() {}, //生命周期 - 销毁之前
destroyed() {}, //生命周期 - 销毁完成
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style scoped>
.home {
  max-height: 1400px;
  margin: 0 auto;
}
img {
  max-width: 200px;
}
a {
	font-weight: bold;
	color: #2c3e50;
	padding: 0 10px;
  text-decoration: none;
}
.destinations {
  display: flex;
  justify-content: space-around;
}
</style>