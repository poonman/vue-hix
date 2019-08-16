<template>
  <div class="hello">
    <p v-if="seen">现在你看到我了</p>
    <a href="http://www.baidu.com" title="xxx">baidu</a>
    <br>
    <button type="button">button</button>
  </div>

</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      seen: true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!--<style scoped>-->
<!--h1, h2 {-->
<!--  font-weight: normal;-->
<!--}-->
<!--ul {-->
<!--  list-style-type: none;-->
<!--  padding: 0;-->
<!--}-->
<!--li {-->
<!--  display: inline-block;-->
<!--  margin: 0 10px;-->
<!--}-->
<!--a {-->
<!--  color: #42b983;-->
<!--}-->
<!--</style>-->
