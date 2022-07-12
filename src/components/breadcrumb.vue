
<template>
<div>
   <el-breadcrumb separator-class="el-icon-arrow-right">
  <el-breadcrumb-item  v-for="item in breadcrumbList" :key="item.path">{{item.meta.title}}</el-breadcrumb-item>
</el-breadcrumb>
</div>
</template>

<script>

export default {
  name: '',
  components: {},
  data () {
    return {
    }
  },
  created () { },
  mounted () { 
    // console.log(this.$route);
  },
  methods: {},
  computed:{
    breadcrumbList(){
      return this.$route.matched
    }
    
  }
}
</script>
<style scoped lang='scss'>

</style>
