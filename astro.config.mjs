// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
// GitHub Pages (https://eyunya11.github.io/Portfolio/) で公開するための設定。
// リポジトリ名を変えた場合は base も合わせて変更すること。
export default defineConfig({
  site: 'https://eyunya11.github.io',
  base: '/Portfolio',
  // 開発中に画面下へ出る Astro のツールバーを表示しない
  devToolbar: { enabled: false },
});
