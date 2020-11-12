import { createApp } from './app'

export default context => {
	const { app, store } = createApp()
	return new Promise((resolve, reject) => {
		let id = Number(context.columnid);
		store.dispatch('getDetailData', id).then(() => {
			context.state = store.state;
			context.meta = `
				<meta property="og:title" content="${store.state.detailData.detailInfo.column_title}">
			`
			resolve(app);
		})
	})
	return app;
}