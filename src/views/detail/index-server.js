import { createApp } from './app'

export default context => {
	const { app, store } = createApp()
	return new Promise((resolve, reject) => {
		let id = Number(context.column_id);
		store.dispatch('getData', id).then(() => {
			context.state = store.state;
			context.meta = `
				<meta property="og:title" content="${store.state.msg}">
			`
			resolve(app);
		})
	})
}