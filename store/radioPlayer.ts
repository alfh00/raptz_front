export const usePlayer = () => {
    const player = useState('player', () => {
      if (process.client) {
        const storedState = localStorage.getItem('player')
        return storedState ? JSON.parse(storedState) : { isPlaying: false }
      }
      return { isPlaying: false }
    });
  
    if (process.client) {
      watch(player, (newState) => {
        localStorage.setItem('player', JSON.stringify(newState))
      }, { deep: true });
    }
  
    return player;
}
  