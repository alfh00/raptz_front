
export const useHomePageData = () => {
  return useAsyncData('homePageData', async () => {
    const response = await fetch('https://www.raptz.com/api/home/')
    const data = await response.json()
    const show = data.results[0].show
    const articles = [data.results[0].article_secondaire, data.results[0].article_tertiaire]
    return { show, articles }
  })
}
