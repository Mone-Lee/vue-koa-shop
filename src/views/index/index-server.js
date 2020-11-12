import { createApp } from './app'

export default context => {
  const { app, store } = createApp()
  return new Promise((resolve, reject) => {
		let id = Number(context.columnid);
		store.dispatch('getListData').then(() => {
			context.state = store.state;
			context.meta = `
				<meta property="og:title" content="首页">
			`
			resolve(app);
		})
	})
  return app
}