<template>
  <div class="SideBar">
    <h3>Question List</h3>
    <ul>
      <li v-for="(question, index) in questions" @click="onClick(index)">Question {{index+1}}</li>
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
        default: ()=>{}
      },
    },
    computed: {
    }
  }
</script>

<style>

</style>
