<template>
  <div class="random-learning">
    <div>
      <el-button type="success" @click="randomize">Randomize</el-button>
    </div>
    <div class="categories">
      <el-checkbox-group class="category-choice" v-model="categories" @change="updateCards">
        <el-checkbox label="basics">Basics</el-checkbox>
        <el-checkbox label="diacritics">Diacritics</el-checkbox>
        <el-checkbox label="digraphs">Digraphs</el-checkbox>
      </el-checkbox-group>
    </div>
    <div class="learning-order-div">
      <el-radio-group v-model="fromRomaji">
        <el-radio-button :label="false">Kana to Rōmaji</el-radio-button>
        <el-radio-button :label="true">Rōmaji to Kana</el-radio-button>
      </el-radio-group>
    </div>
    <el-row class="cards-row" :gutter="20">
      <el-col :xs="24" :sm="12" :md="8" :lg="4" v-for="item in values" :key="item.romaji">
        <card :value="item" :default-romaji="fromRomaji" :display="display"></card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Card from '../common/Card'
import kanaProvider from '../../services/kana-provider'
import utils from '../../services/utils'

export default {
  name: 'random-learning',
  data() {
    return {
      categories: ['basics', 'diacritics', 'digraphs'],
      values: kanaProvider.get_all_flattend(),
      fromRomaji: false
    }
  },
  props: [
    'display'
  ],
  methods: {
    randomize() {
      utils.shuffle(this.values).forEach(function (element, index) {
        this.$set(this.values, index, element)
      }, this);
    },
    updateCards() {
      let data = []
      if (this.categories.includes('basics')) data = data.concat(kanaProvider.get_basics_flattend())
      if (this.categories.includes('diacritics')) data = data.concat(kanaProvider.get_diacritics_flattend())
      if (this.categories.includes('digraphs')) data = data.concat(kanaProvider.get_digraphs_flattend())
      this.values = utils.shuffle(data)
    }
  },
  components: {
    Card
  }
}
</script>

<style>
.learning-order-div {
  margin: 20px;
}
.categories {
  margin-top: 20px;
}
</style>
