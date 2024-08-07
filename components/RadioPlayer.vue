<script setup>
import { usePlayer } from '~/store/radioPlayer'

const audioSrc = 'https://www.radioking.com/play/radio-raptz/78175'
const player = usePlayer();
const audioPlayer = ref(null)

const togglePlayPause = () => {
  if (audioPlayer.value.paused) {
    audioPlayer.value.play()
    player.value.isPlaying = true
  } else {
    audioPlayer.value.pause()
    player.value.isPlaying = false
  }
}

// Watch for changes in player.value.isPlaying and update the audio player accordingly
watch(() => player.value.isPlaying, (isPlaying) => {
  if (isPlaying) {
    audioPlayer.value.play()
  } else {
    audioPlayer.value.pause()
  }
})

onMounted(() => {
  if (player.value.isPlaying) {
    audioPlayer.value.play()
  }
})
</script>

<template>
  <div class="player h-16 w-60 border-2 rounded-lg border-border-color shadow-bxsh">
    <div class="h-full px-3 rounded-lg flex justify-between items-center">
      <div>
        <audio ref="audioPlayer" :src="audioSrc" id="lecteur" preload="auto"></audio>
        <div @click="togglePlayPause" class="cursor-pointer bg-bg-orange rounded-lg border-2 p-1 border-border-color shadow-bxsh">
          <Icon
            :name="player.isPlaying ? 'solar:pause-outline' : 'solar:play-outline'"
            class="w-8 h-8 text-white"
          />
        </div>
      </div>

      <div class="flex flex-col">
        <span>artist</span>
        <span>title</span>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
