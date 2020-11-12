import { createApp } from './app'

export default context => {
	const { app } = createApp()
	console.log('play state =======')
	console.log(context.state);
	context.meta = `
		<meta property="og:title" content="播放页">
	`
	return app;
}