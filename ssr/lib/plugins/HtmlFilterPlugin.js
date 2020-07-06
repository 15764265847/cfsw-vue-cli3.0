const ID = 'vue-cli-plugin-ssr:html-filter';

module.exports = class HtmlPwaPlugin {
	apply(compiler) {
		compiler.hooks.compilation.tap(ID, (compilation) => {
			compilation.hooks.htmlWebpackPluginAlterAssetTags.tapAsync(
				ID,
				(data, cb) => {
					const autoGeneratedAssets = JSON.parse(
						data.plugin.assetJson
					);
					data.head = data.head.filter(
						(tag) => !this.isStylesheet(autoGeneratedAssets, tag)
					);
					data.body = data.body.filter(
						(tag) => !this.isScript(autoGeneratedAssets, tag)
					);
					cb(null, data);
				}
			);
		});
	}

	isStylesheet(assets, tag) {
		return (
			tag.tagName === 'link' &&
			tag.attributes.rel === 'stylesheet' &&
			assets.includes(tag.attributes.href)
		);
	}

	isScript(assets, tag) {
		return tag.tagName === 'script' && assets.includes(tag.attributes.src);
	}
};