import Vue from 'vue'
import Vuex from 'vuex'
import {STATUSES} from './common/const'
import data from '../db'

Vue.use(Vuex);

const INITIAL_STATE = {
  currentRound: 0,
  questions: [],
  status: STATUSES.NOT_STARTED,
}

const getters = {
  questions: state => state.questions,
  currentQuestion: state => {
    const currentRound = getters.currentRound(state)
    const questions = getters.questions(state)
    return questions[currentRound];
  },
  currentRound: state => state.currentRound,
  status: state => state.status
}

const actions = {
  initGame: ({commit}) =>{
    commit('resetGame',data.questions)
  }
}

const mutations = {
  resetGame: (state, questions) =>{
    state.status = STATUSES.NOT_STARTED;
    state.currentRound = 0;
    state.questions = questions;
  },
  checkAnswer: function (state, answer) {
    const isAnswerCorrect = answer === getters.currentQuestion(state).correct_answer;
    if (isAnswerCorrect && state.currentRound < state.questions.length-1){
      state.currentRound++;
    } else if (isAnswerCorrect) {
      state.status = STATUSES.WON;
    } else{
      state.status = STATUSES.LOST;
    }
  },
  changeQuestion(state, index){
    state.currentRound = index;
  }
}

export default new Vuex.Store({
  actions,
  mutations,
  getters,
  state: INITIAL_STATE,
})
