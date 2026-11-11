// =====================================================================
//  ポートフォリオの中身は、すべてこのファイルで管理する。
//  「【要記入】」「【要確認】」と書かれた部分を、自分の内容に書き換えること。
// =====================================================================

export type Link = { label: string; url: string };
export type Shot = { src: string; alt: string; caption: string };

// ---------------------------------------------------------------------
// サイト情報
// ---------------------------------------------------------------------
export const site = {
  title: 'Portfolio',
  version: '1.0',
  updated: '2026-11-12',
};

// ---------------------------------------------------------------------
// プロフィール (要件1: 所属と学年 / 年齢)
// ---------------------------------------------------------------------
export const profile = {
  name: '【要記入】名前',
  nameEn: 'eyunya11',
  school: '【要記入】〇〇工業高等専門学校',
  course: '【要記入】〇〇コース',
  grade: '【要記入】2年',
  age: '【要記入】17歳',
  tagline: '【要記入】一言で自分を表すキャッチコピー',
  about: [
    '【要記入】自己紹介の1段落目。何に興味があって、どんなものを作っているか。',
    '【要記入】2段落目。インターンや研究室の実習で挑戦したいこと、身につけたいこと。',
  ],
  interests: ['【要記入】興味のある分野1', '【要記入】興味のある分野2', '【要記入】趣味・特技'],
};

// ---------------------------------------------------------------------
// リンク・連絡先
// ---------------------------------------------------------------------
export const links: Link[] = [
  { label: 'GitHub', url: 'https://github.com/eyunya11' },
  // { label: 'AtCoder', url: 'https://atcoder.jp/users/xxxx' },
  // { label: 'X', url: 'https://x.com/xxxx' },
];

// ---------------------------------------------------------------------
// 作品 (要件2: 課題04 / 要件3: 高専祭プロジェクト)
//   url を空文字 '' にしておくと、ページ上では「リンク未設定」と表示される。
//   画像は public/images/<作品id>/01.png のように置き、src を 'images/kadai04/01.png' にする。
//   ファイル名・フォルダ名に日本語やスペースは使わない。
// ---------------------------------------------------------------------
export type Work = {
  id: string;
  label: string;
  title: string;
  /** 一覧のカードに出す、大まかな機能の一言説明 */
  short: string;
  period: string;
  summary: string;
  role?: string;
  points: string[];
  tech: string[];
  links: Link[];
  images: Shot[];
};

const placeholder = 'images/placeholder.svg';

export const works: Work[] = [
  {
    id: 'kadai04',
    label: '課題04 / 自由課題',
    title: '【要記入】作品タイトル',
    short: '【要記入】大まかな機能を一言で',
    period: '【要記入】2026年〇月',
    summary: '【要記入】どんなプログラムか、2〜3文で説明する。何を入力すると何が起きるのか、なぜ作ろうと思ったのか。',
    points: [
      '【要記入】工夫した点・苦労した点 1',
      '【要記入】工夫した点・苦労した点 2',
      '【要記入】使ったライブラリや、学んだこと',
    ],
    tech: ['Python', 'Google Colab'],
    links: [
      { label: 'Google Colab', url: '' },
      { label: 'GitHub リポジトリ', url: '' },
    ],
    images: [
      { src: placeholder, alt: '【要記入】画像の説明', caption: '【要記入】スクリーンショット1の説明' },
      { src: placeholder, alt: '【要記入】画像の説明', caption: '【要記入】スクリーンショット2の説明' },
      { src: placeholder, alt: '【要記入】画像の説明', caption: '【要記入】スクリーンショット3の説明' },
      { src: placeholder, alt: '【要記入】画像の説明', caption: '【要記入】スクリーンショット4の説明' },
    ],
  },
  {
    id: 'festival',
    label: '高専祭 2026 プロジェクト',
    title: '【要記入】成果物のタイトル',
    short: '【要記入】大まかな機能を一言で',
    period: '【要記入】2026年〇月〜〇月',
    summary: '【要記入】チームで何を作って展示したか、2〜3文で説明する。',
    role: '【要記入】自分の役割・担当(例: 〇人チームで、〇〇の実装を担当)',
    points: [
      '【要記入】自分が担当した部分の具体的な内容 1',
      '【要記入】自分が担当した部分の具体的な内容 2',
      '【要記入】チームで取り組んで学んだこと',
    ],
    tech: ['【要記入】使った言語・ツール'],
    links: [{ label: 'GitHub リポジトリ', url: '' }],
    images: [
      { src: placeholder, alt: '【要記入】画像の説明', caption: '【要記入】スクリーンショット1の説明' },
      { src: placeholder, alt: '【要記入】画像の説明', caption: '【要記入】スクリーンショット2の説明' },
      { src: placeholder, alt: '【要記入】画像の説明', caption: '【要記入】スクリーンショット3の説明' },
      { src: placeholder, alt: '【要記入】画像の説明', caption: '【要記入】スクリーンショット4の説明' },
    ],
  },
  {
    id: 'create-train-next',
    label: '個人制作 / Minecraft MOD',
    title: 'Create Train Next',
    short: '自由な角度の曲線レールと、日本式の信号機を追加する Create アドオン',
    period: '2026年8月〜(開発中)',
    summary:
      'Minecraft の鉄道系 MOD「Create」のアドオンです。Create のレールは45度・90度の刻みでしか曲げられませんが、このアドオンでは好きな角度の曲線を敷けます。あわせて、日本式の信号機や速度制限標識など、線路脇の設備を追加します。',
    role: '個人開発。【要確認】生成AI(Claude Code)を使った部分と、自分で設計・実装・確認した部分を書く。',
    points: [
      '曲線レール設置杖: 始点と終点を右クリックするだけで、好きな角度の曲線を敷けます。敷く前に予告線(ゴースト)を緑か赤で表示し、15度の倍数に近い角度はその角度に吸着させます。',
      '高さの違う2点を一定の勾配でつなぐ機能、分岐線、方位・長さ・勾配を数値で決めて直線を引く「測量標」を作りました。',
      '国の鉄道の技術基準の図に合わせた、2灯式〜6灯式の信号機と中継信号機を実装しました。先で空いている閉そくの数から現示を決め、現示に応じて列車の速度を抑えます。',
      'Minecraft の GameTest で自動テストを書き、GitHub Actions でビルドを確認しています。',
    ],
    tech: ['Java', 'NeoForge', 'Create', 'Mixin', 'Gradle', 'GitHub Actions'],
    links: [{ label: 'GitHub リポジトリ', url: 'https://github.com/eyunya11/CreateTrainNext' }],
    // スクリーンショットを撮ったら、public/images/create-train-next/ に置いてここに足す。
    // 例: 緑のゴースト / 勾配のついた曲線 / 分岐 / 信号機と信号柱
    images: [],
  },
  {
    id: 'create-real-time-schedule',
    label: '個人制作 / Minecraft MOD',
    title: 'CreateRealTimeSchedule',
    short: '現実の時刻表どおりに列車を走らせる Create アドオン',
    period: '2026年10月〜(開発初期)',
    summary:
      'Create のアドオンで、現実の時刻表どおりに列車を走らせるための MOD です。現実と同じ速さで進む時計を追加し、その時計で列車の発車時刻を決めます。ダイヤはブラウザで動く編集ページで作れます。',
    role: '個人開発。【要確認】生成AI(Claude Code)を使った部分と、自分で設計・実装・確認した部分を書く。',
    points: [
      '1日が現実の24時間になる時計と、昼夜や月の満ち欠けを時計に合わせる仕組みを作りました。',
      '時刻表の待機条件「Real Time of Day」を追加しました。早く着いた列車は発車時刻まで待ち、遅れた列車は最短停車時間だけ止まって遅れを取り戻します。',
      '路線・列車・運用を書いた JSON のダイヤを読み込み、1日分のダイヤどおりに運行します。運行図(ダイヤグラム)も表示できます。',
      'ダイヤの編集ページを HTML / CSS / JavaScript で作り、GitHub Pages で公開しています。MOD 本体は GameTest、編集ページは JavaScript のテストで確認しています。',
    ],
    tech: ['Java', 'NeoForge', 'Create', 'JavaScript', 'HTML / CSS', 'Gradle', 'GitHub Actions'],
    links: [
      { label: 'GitHub リポジトリ', url: 'https://github.com/eyunya11/CreateRealTimeSchedule' },
      { label: 'ダイヤ編集ページ', url: 'https://eyunya11.github.io/CreateRealTimeSchedule/' },
    ],
    // スクリーンショットを撮ったら、public/images/create-real-time-schedule/ に置いてここに足す。
    // 例: 「発車時刻」表示 / 待機条件の設定画面 / 運行図 / ダイヤ編集ページ
    images: [],
  },
];

// ---------------------------------------------------------------------
// スキル (要件4)
//   過大評価・過小評価にならないよう、レベルは下の定義に沿って選ぶ。
//   desc には「いつ・何で・何をしたか」を具体的に書く。
// ---------------------------------------------------------------------
export const levels = {
  1: { name: '授業で使用', desc: '授業・実験の課題で、指示に沿って使ったことがある' },
  2: { name: '自分で使える', desc: '授業の外でも、調べながら小さなものを作ったことがある' },
  3: { name: '作品を作れる', desc: '自分で設計から完成まで作品を作ったことがある' },
} as const;

export type Level = keyof typeof levels;
// icons: public/icons/ にあるアイコンのファイル名(拡張子なし)。skill-icons (MIT) から取得。
//   アイコンがないスキルは省略してよい。
export type Skill = { name: string; level: Level; period: string; desc: string; icons?: string[] };
export type SkillGroup = { title: string; items: Skill[] };

export const skillGroups: SkillGroup[] = [
  {
    title: 'プログラミング言語',
    items: [
      {
        name: 'Python', icons: ['python'],
        level: 2,
        period: '【要記入】約〇年',
        desc: '【要確認】授業で基本文法(条件分岐・繰り返し・関数・リスト)を学び、課題04で自由制作のプログラムを作成。',
      },
      {
        name: 'Java', icons: ['java'],
        level: 3,
        period: '2026年8月〜',
        desc: '【要確認】Minecraft の MOD を2つ個人で開発(Create Train Next、CreateRealTimeSchedule)。NeoForge と Create の API、Mixin を使い、GameTest で自動テストを書いた。',
      },
      {
        name: 'JavaScript', icons: ['javascript'],
        level: 2,
        period: '2026年10月〜',
        desc: '【要確認】CreateRealTimeSchedule のダイヤ編集ページ(ブラウザで動く運行図エディタ)を作成し、テストも書いた。',
      },
      {
        name: 'Arduino言語', icons: ['arduino'],
        level: 1,
        period: '【要記入】約〇か月',
        desc: '【要確認】実験でArduinoを使い、センサの値の読み取りやLEDなどの制御を行った。',
      },
      {
        name: 'Scratch',
        level: 1,
        period: '【要記入】',
        desc: '【要確認】授業でブロックを組み合わせて、簡単なプログラムを作成した。',
      },
      {
        name: 'HTML / CSS', icons: ['html', 'css', 'astro'],
        level: 2,
        period: '2026年〜',
        desc: '【要確認】このポートフォリオサイトを、Astro(静的サイト生成フレームワーク)を使って作成した。',
      },
    ],
  },
  {
    title: 'ソフトウェア・開発環境',
    items: [
      { name: 'Git / GitHub', icons: ['git', 'github'], level: 1, period: '【要記入】', desc: '【要確認】授業の課題をリポジトリで管理し、コミット・プッシュを行った。GitHub Pages でこのサイトを公開。' },
      { name: 'Gradle', icons: ['gradle'], level: 2, period: '2026年8月〜', desc: '【要確認】MOD のビルドと、GameTest の実行に使用。' },
      { name: 'GitHub Actions', icons: ['githubactions'], level: 2, period: '2026年8月〜', desc: '【要確認】MOD のビルドとテスト、ダイヤ編集ページの GitHub Pages への公開を自動化した。' },
      { name: 'Claude Code (生成AI)', level: 2, period: '【要記入】', desc: '【要確認】MOD の開発で、コードの作成や修正に使用。どう使ったかを具体的に書く。' },
      { name: 'VSCode (venv)', icons: ['vscode'], level: 1, period: '【要記入】', desc: '【要確認】venv で仮想環境を作り、Python の開発を行った。' },
      { name: 'Google Colab', level: 1, period: '【要記入】', desc: '【要確認】課題04 のプログラムを Colab 上で作成・実行した。' },
      { name: 'WSL', icons: ['linux'], level: 1, period: '【要記入】', desc: '【要確認】Windows 上で Linux のコマンド操作を行った。' },
    ],
  },
  {
    title: 'ハードウェア・電子回路',
    items: [
      { name: 'Arduino IDE', icons: ['arduino'], level: 1, period: '【要記入】', desc: '【要確認】プログラムを書き込み、シリアルモニタで動作を確認した。' },
      { name: 'Deeds-DCS', level: 1, period: '【要記入】', desc: '【要確認】論理回路を設計し、シミュレーションで動作を確認した。' },
      { name: 'MakeCode for micro:bit', level: 1, period: '【要記入】', desc: '【要確認】micro:bit 用のプログラムを作成し、実機で動かした。' },
      { name: 'Tinkercad', level: 1, period: '【要記入】', desc: '【要確認】電子回路や3Dモデルをブラウザ上で作成した。' },
      // 実験班で使った場合だけ残す
      { name: 'Ambient', level: 1, period: '【要記入】', desc: '【要確認】(使った場合のみ残す) センサのデータを送信し、グラフで可視化した。' },
      { name: 'RealVNC', level: 1, period: '【要記入】', desc: '【要確認】(使った場合のみ残す) リモートで Raspberry Pi などを操作した。' },
    ],
  },
];

// ---------------------------------------------------------------------
// 経歴・活動・資格
// ---------------------------------------------------------------------
export type Event = { date: string; title: string; desc?: string };

export const timeline: Event[] = [
  { date: '【要記入】2025.04', title: '【要記入】〇〇高専 〇〇コース 入学' },
  { date: '2026.08', title: 'Minecraft MOD「Create Train Next」の個人開発を開始' },
  { date: '2026.10', title: 'Minecraft MOD「CreateRealTimeSchedule」の個人開発を開始' },
  { date: '【要記入】2026.〇〇', title: '【要記入】高専祭プロジェクトに参加', desc: '【要記入】一言説明' },
  { date: '2026.11', title: 'ポートフォリオ 第1版を公開' },
];

export const certifications: Event[] = [
  // 例: { date: '2026.04', title: '基本情報技術者試験 合格' },
  { date: '—', title: '【要記入】資格があれば書く。なければこの行を消すと「準備中」と表示される' },
];

// ---------------------------------------------------------------------
// 更新履歴
// ---------------------------------------------------------------------
export const changelog: Event[] = [{ date: '2026-11-12', title: 'v1.0 第1版を公開' }];
