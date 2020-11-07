import { createApp } from './app'

export default context => {
	const { app, store } = createApp()
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log('before', store.state)
			store.dispatch('getData', 232).then(() => {
				console.log('after', store.state);
				context.state = store.state;
				resolve(app);
			})
		}, 100)
	})
}