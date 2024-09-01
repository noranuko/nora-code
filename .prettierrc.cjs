module.exports = {
	// astroのプラグインを使用（これがないと自動フォーマットしてくれない）
	plugins: ['prettier-plugin-astro'],
	// astroのパーサーを手動で指定（プラグイン公式推奨）
	overrides: [
		{
			files: ['*.astro', '**/*.astro'],
			options: {
				parser: 'astro',
			},
		},
	],
	// 1行の最大文字数
	printWidth: 120,
	// タブの幅
	tabWidth: 2,
	// タブではなくスペースを使用する
	useTabs: true,
	// ステートメントの末尾にセミコロンを出力する
	semi: true,
	// 文字列はシングルクォーテーションを利用する
	singleQuote: true,
	// 末尾にカンマを入れる
	trailingComma: 'all',
	// 閉じカッコを同一行に含めるか
	bracketSameLine: true,
	// アロー関数の引数の括弧を省略
	arrowParens: 'avoid',
	// タグ/周りの空白 (またはその欠如) は重要ではないと見なす
	htmlWhitespaceSensitivity: 'ignore',
};
