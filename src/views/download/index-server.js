import { createApp } from './app'

export default context => {
	const { app } = createApp()
	context.meta = `
		<meta property="og:url" content="https://time.geekbang.org/download">
		<meta property="og:type" content="article">
		<meta property="og:title" content="官方免费下载-极客时间App">
		<meta property="og:description" content="">
		<meta property="og:image" content="">
		<meta name="applicable-device" content="pc,mobile">
		<meta http-equiv="Cache-Control" content="no-transform"/>
		<meta http-equiv="Cache-Control" content="no-siteapp" />
		<link rel="canonical" href="https://time.geekbang.org/download" />
	`
	return app;
}