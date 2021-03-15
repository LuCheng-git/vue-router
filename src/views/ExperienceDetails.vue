<!--  -->
<template>
<section class=''>
  <h1>Experiences</h1>
  <h2>{{experience.name}}</h2>
  <div class="experience-details">
    <img :src="require(`@/assets/${experience.image}`)" alt="experience.image">
    <p>{{ experience.description }}</p>
  </div>
</section>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import store from '@/store.js'
export default {
props:{
  slug:{
    type:String,
    require:true, 
  },
  experienceSlug:{
    type:String,
    require:true,
  }
},
computed: {
  destination(){
    return store.destinations.find(
      destination => destination.slug === this.slug
    )
  },
  experience(){
    return this.destination.experiences.find(
      experience => experience.slug === this.experienceSlug
    )
  }
},
data() {
//这里存放数据
return {

};
},
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
  .experience-details img {
    height: auto;
    width: 100%;
    max-height: 400px;
  }
  .experience-details {
    display: flex;
    justify-content: space-between;
  }
  p {
    margin: 0 auto;
    font-size: 20px;
    text-align: left;
  }
</style>