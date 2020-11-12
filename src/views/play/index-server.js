import { createApp } from './app'

export default context => {
	const { app, store } = createApp()
	store.commit('setPlayCourse', context.state.column);
	store.commit('setPlayCommentList', context.state.commentList);
	context.meta = `
		<meta property="og:title" content="${context.state.column.column_title} | 播放页">
	`
	return app;
}