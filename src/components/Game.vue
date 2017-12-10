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
      />
    </aside>
  </div>
</template>

<script>
  import data from "../../db"
  import QuestionCard from "./QuestionCard"
  import SideBar from "./SideBar"

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
        }
      },
      changeQuestion(index){
    		this.current = index;
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
