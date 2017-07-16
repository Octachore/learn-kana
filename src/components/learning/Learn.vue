<template>
  <div class="/learn">
    <h1>{{ msg }}</h1>
    <el-radio-group class="display-choice" v-model="display">
      <el-radio label="hiragana">Hiragana</el-radio>
      <el-radio label="katakana">Katakana</el-radio>
      <el-radio label="both">Both</el-radio>
    </el-radio-group>
    <div class="learning-choices">
      <el-radio-group v-model="learningChoice">
        <el-radio-button label="table">Table</el-radio-button>
        <el-radio-button label="random">In bulk</el-radio-button>
        <el-radio-button label="cards">Cards</el-radio-button>
      </el-radio-group>
    </div>
    <table-learning v-if="learningChoice == 'table'" :display="display"></table-learning>
    <random-learning v-if="learningChoice == 'random'" :display="display"></random-learning>
    <cards-learning v-if="learningChoice == 'cards'" :display="display"></cards-learning>
  </div>
</template>

<script>
import TableLearning from './TableLearning'
import RandomLearning from './RandomLearning'
import CardsLearning from './CardsLearning'

export default {
  name: 'learn',
  data() {
    return {
      msg: 'Learn Hiragana and Katakana',
      learningChoice: 'table',
      display: 'both'
    }
  },
  components: {
    TableLearning,
    RandomLearning,
    CardsLearning
  }
}
</script>

<style scoped>
.learning-choices, .display-choice {
  margin-bottom: 20px;
}
</style>
