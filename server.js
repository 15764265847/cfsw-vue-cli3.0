const { renderToString } = require('@vue/server-renderer');
const { app } = require('./dist/main');

renderToString(app).then((html) => {
	console.log(html);
});
