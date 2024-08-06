<script setup>
import playIcon from '@/assets/img/player/play.svg';
import pauseIcon from '@/assets/img/player/pause.svg';

const audioSrc = 'https://www.radioking.com/play/radio-raptz/78175';
const isPlaying = ref(false)
const audioPlayer = ref(null)

const togglePlayPause = () => {
  if (audioPlayer.value.paused) {
    audioPlayer.value.play()
    isPlaying.value = true
  } else {
    audioPlayer.value.pause()
    isPlaying.value = false
  }
}
</script>



<template>
    <div class="player h-16 w-60 border-2 rounded-lg border-border-color shadow-bxsh">

        <div class="h-full px-3 rounded-lg flex justify-between items-center">
            <!-- :src="currentProg.cover" --> 
            <div>
                <audio ref="audioPlayer" :src="audioSrc" id="lecteur" preload="auto"></audio>
                    <div @click="togglePlayPause" class="cursor-pointer bg-bg-orange rounded-lg border-2 border-border-color shadow-bxsh ">
                        <Icon
                        :name="isPlaying ? 'mdi:pause' : 'mdi:play'"
                        class="w-12 h-12 text-white"
                        />
                    </div>
            </div>
            
            <div class="flex flex-col">
            <!-- <span class="player__track-artist" v-if="currentProg.artist"> -->
                <span>
                    <!-- {{ currentProg.artist }} -->
                    artist
                </span>
                <!-- <span v-if="currentProg.title"> -->
                <span>
                    <!-- {{ currentProg.title }} -->
                    title
                </span>
            </div>
        </div>
    </div>
</template>
  

<style  scoped>

</style>