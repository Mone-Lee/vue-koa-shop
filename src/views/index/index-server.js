import { createApp } from './app'

export default context => {
  const { app } = createApp()
  context.meta = `
    <meta property="og:title" content="首页">
  `
  return app
}