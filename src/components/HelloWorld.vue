<template>
  <div>
    <div :class="{invalid: isInvalid}">
      {{ message }}
    </div>
    <ol>
      <li v-for="(item, index) in items">
        {{item}} at position {{index}}
      </li>
    </ol>
    <input v-model="message" type="text"/>
    <br/>
    <button type="button" name="button" :disabled="isInvalid">Submit!</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      message: 'Hello sVue!',
      items: ['apple', 'pear'],
      //isInvalid: true,
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
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
