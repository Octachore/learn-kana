<template>
  <div class="kana-table">
    <el-row v-for="line in values" class="kana-row">
      <el-col v-for="(kana, index) in line" :key="kana.romaji" :span="4" :offset="index%5 === 0 ? 2 : 0">
        <card :value="kana" :display="display" :defaultRomaji="false" :class="{ placeholder: kana.romaji === ' '}"></card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Card from '../common/Card'

export default {
  name: 'kana-table',
  props: [
    'values',
    'display',
    'showTranscription'
  ],
  data() {
    return {
    }
  },
  components: {
    Card
  }
}
</script>

<style scoped>
.placeholder {
  visibility: hidden;
}
</style>
