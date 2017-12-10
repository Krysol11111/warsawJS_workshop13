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
        :current="current"
      />
    </aside>
  </div>
</template>

<script>
  import data from "../../db"
  import QuestionCard from "./QuestionCard"
  import SideBar from "./SideBar"

  const STATUSES = {
    'NOT_STARTED': 'not started',
    'PLAYING': 'playing',
    'WON': 'won',
    'LOST': 'lost',
  }

  export default {
    name: 'Game',
    components:{
    	QuestionCard,
      SideBar,
    },
    data () {
      return {
      	current: 0,
        questions: data.questions,
        status: STATUSES.NOT_STARTED,
      }
    },
    computed:{
      answers: function(){
      	const answers = [
          ...this.currentQuestion.incorrect_answers,
          this.currentQuestion.correct_answer,
        ];
        return answers;
      },
      currentQuestion: function(){
      	return this.questions[this.current];
      },
    },
    methods:{
    	checkAnswer: function (answer) {
        const isAnswerCorrect = answer === this.currentQuestion.correct_answer;
        if (isAnswerCorrect && this.current < this.questions.length-1){
        	this.current++;
        } else if (isAnswerCorrect) {
          this.status = STATUSES.WON;
        } else{
          this.status = STATUSES.LOST;
        }
      },
      changeQuestion(index){
    		this.current = index;
      }
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
