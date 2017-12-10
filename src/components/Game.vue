<template>
  <div>
    <h3>{{this.questions[0].question}}</h3>
    <ol>
      <li v-for="item in items"></li>
    </ol>
  </div>
</template>

<script>
  import data from "../../db"
  export default {
    name: 'Game',
    data () {
      return {
        questions: data.questions,
      }
    },
    computed:{
      isInvalid: function(){
        return this.message.length <= 3
      }
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
