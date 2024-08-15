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

const {data: currentProgram, refresh} = await useFetch('https://www.raptz.com/api/planning/now',
    { pick: ['artist', 'title'] } 
)

</script>

<template>
  <div class="fixed bottom-2 right-2 player h-16 min-w-60 border-2 rounded-lg border-border-color shadow-bxsh z-50">
    <div class="h-full px-3 rounded-lg flex gap-2 items-center">
      <div>
        <audio ref="audioPlayer" :src="audioSrc" id="lecteur" preload="auto"></audio>
        <div @click="togglePlayPause" class="cursor-pointer bg-bg-orange rounded-lg border-2 p-1 border-border-color shadow-bxsh">
          <Icon
            :name="player.isPlaying ? 'solar:pause-outline' : 'solar:play-outline'"
            class="w-8 h-8 text-white"
          />
        </div>
      </div>

      <div class="flex flex-col overflow-hidden">

        <span class="text-xl text-nowrap">{{currentProgram.artist}}</span>
        <div class="flex flex-row items-center gap-2">
            <span class="bg-bg-orange h-4 rounded-md px-1 text-xs text-nowrap text-white" >
                ON AIR
            </span>
            <span class="font-thin text-nowrap"> {{currentProgram.title}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
