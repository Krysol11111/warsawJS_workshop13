<template>
  <div>
    <QuestionCard
      :question="currentQuestion"
      :onAnswer="checkAnswer"
    />
  </div>
</template>

<script>
  import data from "../../db"
  import QuestionCard from "./QuestionCard"
  export default {
    name: 'Game',
    components:{
    	QuestionCard,
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
    	checkAnswer: function (answer)
      {
        const isAnswerCorrect = answer === this.currentQuestion.correct_answer;
        if (isAnswerCorrect){
        	this.current++;
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
