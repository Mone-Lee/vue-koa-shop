import { createApp } from './app'

export default context => {
	const { app, store } = createApp()
	return app;
}