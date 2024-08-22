// https://www.raptz.com/api/podcasts/latest/
// https://www.raptz.com/api/home/
// https://www.raptz.com/api/styles/home
// https://www.raptz.com/api/roadshows/upcoming/
// https://www.raptz.com/api/home/partenaires


export const useHomePageData = async () => {
  const [
    { data: podcasts },
    { data: home },
    { data: styles },
    { data: roadshows },
    { data: partners }
  ] = await Promise.all([
    useAsyncData('podcasts', () => $fetch('https://www.raptz.com/api/podcasts/latest/')),
    useAsyncData('home', () => $fetch('https://www.raptz.com/api/home/')),
    useAsyncData('styles', () => $fetch('https://www.raptz.com/api/styles/home')),
    useAsyncData('roadshows', () => $fetch('https://www.raptz.com/api/roadshows/upcoming/')),
    useAsyncData('partners', () => $fetch('https://www.raptz.com/api/home/partenaires'))
  ])

  return { podcasts, home, styles, roadshows, partners }
}