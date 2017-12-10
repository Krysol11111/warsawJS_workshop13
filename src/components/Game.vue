<template>
  <div class="Game">
    <div class="QuestionCardWrapper">
      <QuestionCard
        :question="currentQuestion"
        :onAnswer="checkAnswer"
      />
    </div>
    <aside class="List">
      <SideBar
        :questions="questions"
        :onClick="changeQuestion"
        :currentRound="currentRound"
      />
    </aside>
  </div>
</template>

<script>
  import data from "../../db"
  import QuestionCard from "./QuestionCard"
  import SideBar from "./SideBar"
  import {mapGetters,mapMutations} from 'vuex'

  const STATUSES = {
    'NOT_STARTED': 'not started',
    'PLAYING': 'playing',
    'WON': 'won',
    'LOST': 'lost',
  }

  export default {
    name: 'Game',
    created() {
    	this.$store.dispatch('initGame')
    },
    components:{
    	QuestionCard,
      SideBar,
    },
    /*data () {
      return {
      	currentRound: 0,
        questions: data.questions,
        status: STATUSES.NOT_STARTED,
      }
    },*/
    computed:{
      answers: function(){
      	const answers = [
          ...this.currentQuestion.incorrect_answers,
          this.currentQuestion.correct_answer,
        ];
        return answers;
      },
      /*currentQuestion: function(){
      	return this.questions[this.currentRound];
      },*/
      ...mapGetters({
        currentQuestion: 'currentQuestion',
        questions: 'questions',
        status: 'status',
        currentRound: 'currentRound',
      }),
    },
    methods:{
      ...mapMutations({
        checkAnswer: 'checkAnswer',
        changeQuestion: 'changeQuestion',
      })
    },
    watch:{
      status: function(value,oldValue){
    		if(value === STATUSES.WON){
          this.$router.push("Won");
        }
        if(value === STATUSES.LOST){
          this.$router.push("Lost");
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .Game{
    display:flex;
  }
  .QuestionCardWrapper{
    flex-grow: 1;
  }
</style>
