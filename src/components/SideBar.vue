<template>
  <div class="SideBar">
    <h3>Question List</h3>
    <ul>
      <li v-for="(question, index) in questions" :class="[{done: index<current},{list_item: true}]" @click="onClick(index)">Question {{index+1}}</li>
    </ul>
  </div>
</template>

<script>
  export default{
    name: "SideBar",
    props: {
      questions: {
        default: () => ({}),
      },
      onClick: {
        default: ()=>{},
      },
      current:{
      	default: 0,
      }
    },
    computed: {
    }
  }
</script>

<style>
  .done{
    font-weight: bold;
  }
  .list_item{
  }
</style>
