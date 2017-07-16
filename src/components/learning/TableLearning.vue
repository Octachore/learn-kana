<template>
  <div class="table-learning">
    <h2>Basics</h2>
    <kana-table :values="basics" :display="display" :showTranscription="showTranscription"></kana-table>

    <h2>Diactitics</h2>
    <kana-table :values="diacritics" :display="display" :showTranscription="showTranscription"></kana-table>

    <h2>Digraphs</h2>
    <kana-table :values="digraphs" :display="display" :showTranscription="showTranscription"></kana-table>

  </div>
</template>

<script>
import kanaProvider from '../../services/kana-provider'
import KanaTable from './KanaTable'

export default {
  name: 'table-learning',
  data () {
    return {
      basics: kanaProvider.basics,
      diacritics: kanaProvider.diacritics,
      digraphs: kanaProvider.digraphs,
      showTranscription: false
    }
  },
  props: [
    'display'
  ],
  components: {
    KanaTable
  }
}
</script>

<style scoped>

</style>
