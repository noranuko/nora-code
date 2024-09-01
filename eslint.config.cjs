// eslint-plugin-astroの設定を追加
// https://ota-meshi.github.io/eslint-plugin-astro/user-guide/
const eslintPluginAstro = require('eslint-plugin-astro');

module.exports = [
	...eslintPluginAstro.configs['flat/recommended'],
	{
		rules: {
			semi: 'error', // セミコロンを必須にする
			'astro/no-set-html-directive': 'error', // HTMLディレクティブを使用しない
			'astro/no-set-text-directive': 'error', // TEXTディレクティブを使用しない
			'astro/no-unused-css-selector': 'error', // 使用していないCSSセレクタを検出
		},
	},
];
