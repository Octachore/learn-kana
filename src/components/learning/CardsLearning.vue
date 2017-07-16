<template>
  <div class="cards-learning" @keyup.right="next" @keyup.left="previous">
    <el-row class="display">
      <el-col class="previous" :span="4">
        <el-button type="primary" @click="previous" icon="arrow-left" :disabled="index <= 0">Previous</el-button>
      </el-col>
      <el-col :span="16">
        <card v-for="(c, i) in cards" :key="c.romaji" v-if="i === index" :value="c" :display="display" :defaultRomaji="false"></card>
        <el-progress :percentage="progress" :status="progress == 100 ? 'success' : ''"></el-progress>
      </el-col>
      <el-col class="next" :span="4">
        <el-button :disabled="index >= cards.length - 1 || categories.length == 0" type="primary" @click="next" autofocus>
          Next
          <i class="el-icon-arrow-right  el-icon-right"></i>
        </el-button>
      </el-col>
    </el-row>
    <el-button class="reset" :type="progress == 100 ? 'success' : 'danger'" @click="reset" :disabled="categories.length === 0">Reset</el-button>
    <el-checkbox-group class="category-choice" v-model="categories" @change="updateCards">
      <el-checkbox label="basics" :disabled="progress !== 0">Basics</el-checkbox>
      <el-checkbox label="diacritics" :disabled="progress !== 0">Diacritics</el-checkbox>
      <el-checkbox label="digraphs" :disabled="progress !== 0">Digraphs</el-checkbox>
    </el-checkbox-group>
  </div>
</template>

<script>
import kanaProvider from '../../services/kana-provider'
import utils from '../../services/utils'
import Card from '../common/Card'

export default {
  name: 'cards-learning',
  data() {
    return {
      categories: ['basics', 'diacritics', 'digraphs'],
      cards: utils.shuffle(kanaProvider.get_all_flattend()),
      index: 0,
      progress: 0,
      showTranscription: false
    }
  },
  props: [
    'display'
  ],
  components: {
    Card
  },
  methods: {
    updateProgress() {
      this.progress = Math.round(this.index / (this.cards.length - 1) * 100)
    },
    previous() {
      this.showTranscription = false
      if (this.index <= 0) return
      this.index--
      this.updateProgress()
    },
    next() {
      this.showTranscription = false
      if (this.index >= this.cards.length - 1) return
      this.index++
      this.updateProgress()
    },
    reset() {
      this.showTranscription = false
      this.updateCards()
      this.index = 0
      this.updateProgress()
    },
    updateCards() {
      let data = []
      if (this.categories.includes('basics')) data = data.concat(kanaProvider.get_basics_flattend())
      if (this.categories.includes('diacritics')) data = data.concat(kanaProvider.get_diacritics_flattend())
      if (this.categories.includes('digraphs')) data = data.concat(kanaProvider.get_digraphs_flattend())
      this.cards = utils.shuffle(data)
    }
  }
}
</script>

<style scoped>
.reset {
  margin: 20px 0;
}

.order-choice {
  margin-top: 10px;
}

.display {
  margin-top: 20px;
  display: block;
}
</style>
