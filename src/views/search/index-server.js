import { createApp } from './app'

export default context => {
	const { app, store } = createApp()
	return new Promise((resolve, reject) => {
		store.dispatch('getData', 232).then(() => {
			context.state = store.state;
			resolve(app);
		})
	})
}