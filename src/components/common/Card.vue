<template>
  <div class="card" :class="{ 'double-card': display === 'both', transcription: showTranscription }" @click="flipped = !flipped">
    <div v-if="showTranscription">{{value.romaji}}</div>
    <div v-else>
      <div v-if="display != 'katakana'">{{value.hiragana}}</div>
      <div v-if="display != 'hiragana'">{{value.katakana}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'card',
  props: [
    'value',
    'display',
    'defaultRomaji'
  ],
  data() {
    return {
      flipped: false
    }
  },
  computed: {
    showTranscription: function () {
      return this.defaultRomaji != undefined && ((this.defaultRomaji && !this.flipped) || (!this.defaultRomaji && this.flipped))
    }
  }
}
</script>

<style>
.card {
  display: inline-block;
  margin: 10px;
  background-color: coral;
  width: 200px;
  height: 100px;
  font-size: 60px;
  font-weight: 600;
  user-select: none;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
}

.double-card {
  height: 200px;
}

.transcription {
  background-color: lightcoral;
}
</style>
