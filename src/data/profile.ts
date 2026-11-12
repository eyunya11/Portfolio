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
// プロフィール (要件1: 所属と学年 / 年齢。年齢は載せず、学年で満たす)
// ---------------------------------------------------------------------
export const profile = {
  // 本名は載せず、GitHub のユーザー名をそのまま名前として使う
  name: 'eyunya11',
  nameEn: 'eyunya11',
  // 学科は書かない
  school: '公大高専',
  grade: '2年',
  tagline: '【要記入】一言で自分を表すキャッチコピー',
  about: [
    '【要記入】自己紹介の1段落目。何に興味があって、どんなものを作っているか。',
    '【要記入】2段落目。インターンや研究室の実習で挑戦したいこと、身につけたいこと。',
  ],
  interests: ['【要記入】興味のある分野1', '【要記入】興味のある分野2', '【要記入】趣味・特技'],
};

// ---------------------------------------------------------------------
// リンク (フッターにアイコンで表示する)
//   icon: public/icons/ にあるアイコンのファイル名(拡張子なし)
// ---------------------------------------------------------------------
export const links: (Link & { icon: string })[] = [
  { label: 'GitHub', url: 'https://github.com/eyunya11', icon: 'github' },
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

// 使用技術の名前と、public/icons/ のアイコンの対応。
//   ここにない技術 (アイコンがないもの) は、名前の文字だけで表示される。
export const techIcons: Record<string, string[]> = {
  Python: ['python'],
  Java: ['java'],
  JavaScript: ['javascript'],
  'HTML / CSS': ['html', 'css'],
  'C#': ['cs'],
  'C++': ['cpp'],
  Unity: ['unity'],
  Gradle: ['gradle'],
  'GitHub Actions': ['githubactions'],
};

const placeholder = 'images/placeholder.svg';

export const works: Work[] = [
  {
    id: 'kadai04',
    label: '課題04 / 自由課題',
    title: 'ポーカー',
    short: 'Google Colab 上で、性格の違う CPU とチップを賭けて対戦するポーカーゲーム',
    period: '作成時間 約11時間',
    summary:
      'Google Colab 上で動く、AI プレイヤーと対戦するポーカーゲームです。複数の CPU とチップを賭けて勝負し、駆け引きを楽しめます。勝ち負けを決めるだけでなく、役の判定やオールイン時のポットの分け方など、実際のルールをできるだけ再現しました。',
    points: [
      '役の判定では、Python の itertools.combinations を使い、手札とコミュニティカードから5枚の組み合わせを総当たりで評価して最も強い役を選びます。ハイカードからストレートフラッシュまで判定できます。',
      '複数人が違う額でオールインしても、投入額を段階的に積み上げてメインポットとサイドポットに分け、正しく分配します。',
      'AI の対戦相手には4種類の性格があります。確率の計算だけでなく性格ごとのパラメータでベットやフォールドを決めるので、プレイするたびに違う展開になります。',
      'Colab のフォーム機能で、プレイヤー名・初期チップ数・AI の難易度・ブラインドの額・最大ハンド数を画面右側から設定できます。',
      '自分の手番では input() で f(フォールド)・c(チェック/コール)・r(レイズ)を選びます。DEMO_MODE を True にすると自分の手番も自動で進み、入力なしで最後まで実行できます。終了時にはチップ数のランキングを表示します。',
      'シード値を固定してシミュレーションを行い、チップの総量が常に一定になることを確かめました。',
      'ポジション(ボタンやブラインド)の扱いは簡略化している部分があり、より本格的なルールに近づけるのが今後の課題です。',
    ],
    tech: ['Python', 'Google Colab'],
    // Colab の共有設定は「リンクを知っている全員」にしておく
    links: [{ label: 'Google Colab', url: '' }],
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
    points: [
      '曲線レール設置杖: 始点と終点を右クリックするだけで、好きな角度の曲線を敷けます。敷く前に予告線(ゴースト)を緑か赤で表示し、15度の倍数に近い角度はその角度に吸着させます。',
      '高さの違う2点を一定の勾配でつなぐ機能、分岐線、方位・長さ・勾配を数値で決めて直線を引く「測量標」を作りました。',
      '国の鉄道の技術基準の図に合わせた、2灯式〜6灯式の信号機と中継信号機を実装しました。先で空いている閉そくの数から現示を決め、現示に応じて列車の速度を抑えます。',
      'Minecraft の GameTest で自動テストを書き、GitHub Actions でビルドを確認しています。',
    ],
    tech: ['Java', 'Gradle', 'GitHub Actions'],
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
    points: [
      '1日が現実の24時間になる時計と、昼夜や月の満ち欠けを時計に合わせる仕組みを作りました。',
      '時刻表の待機条件「Real Time of Day」を追加しました。早く着いた列車は発車時刻まで待ち、遅れた列車は最短停車時間だけ止まって遅れを取り戻します。',
      '路線・列車・運用を書いた JSON のダイヤを読み込み、1日分のダイヤどおりに運行します。運行図(ダイヤグラム)も表示できます。',
      'ダイヤの編集ページを HTML / CSS / JavaScript で作り、GitHub Pages で公開しています。MOD 本体は GameTest、編集ページは JavaScript のテストで確認しています。',
    ],
    tech: ['Java', 'JavaScript', 'HTML / CSS', 'Gradle', 'GitHub Actions'],
    links: [
      { label: 'GitHub リポジトリ', url: 'https://github.com/eyunya11/CreateRealTimeSchedule' },
    ],
    // スクリーンショットを撮ったら、public/images/create-real-time-schedule/ に置いてここに足す。
    // 例: 「発車時刻」表示 / 待機条件の設定画面 / 運行図 / ダイヤ編集ページ
    images: [],
  },
];

// ---------------------------------------------------------------------
// スキル (要件4)
//   過大評価・過小評価にならないよう、レベルは下の定義に沿って選ぶ。
// ---------------------------------------------------------------------
export const levels = {
  1: { name: '触ったことがある', desc: '授業や実験で少し触った程度。基本的な操作は分かる' },
  2: { name: '調べながら使える', desc: '調べながらであれば、自分で小さなものを作れる' },
  3: { name: '作品を作った', desc: '調べたりしながら、作品を完成させたことがある' },
} as const;

export type Level = keyof typeof levels;
// icons: public/icons/ にあるアイコンのファイル名(拡張子なし)。skill-icons (MIT) から取得。
//   アイコンがないスキルは省略してよい。
export type Skill = { name: string; level: Level; icons?: string[] };
export type SkillGroup = { title: string; items: Skill[] };

export const skillGroups: SkillGroup[] = [
  {
    title: 'プログラミング言語',
    items: [
      {
        name: 'Python', icons: ['python'],
        level: 2,
      },
      {
        name: 'Java', icons: ['java'],
        level: 3,
      },
      {
        name: 'C#', icons: ['cs'],
        level: 3,
      },
      {
        name: 'C++', icons: ['cpp'],
        level: 1,
      },
      {
        name: 'JavaScript', icons: ['javascript'],
        level: 1,
      },
      {
        name: 'Arduino言語', icons: ['arduino'],
        level: 1,
      },
      {
        name: 'HTML / CSS', icons: ['html', 'css', 'astro'],
        level: 2,
      },
    ],
  },
  {
    title: 'ソフトウェア・開発環境',
    items: [
      { name: 'Unity', icons: ['unity'], level: 3 },
      { name: 'Git / GitHub', icons: ['git', 'github'], level: 2 },
      { name: 'GitHub Actions', icons: ['githubactions'], level: 1 },
      { name: 'VSCode', icons: ['vscode'], level: 2 },
      { name: 'WSL', icons: ['linux'], level: 1 },
    ],
  },
];

// ---------------------------------------------------------------------
// 経歴・活動
// ---------------------------------------------------------------------
export type Event = { date: string; title: string; desc?: string };

export const timeline: Event[] = [
  { date: '2023頃', title: 'Unity と C# の学習を始める' },
  { date: '2025.04', title: '公大高専 入学' },
  { date: '2026.08', title: 'Minecraft MOD「Create Train Next」の個人開発を開始' },
  { date: '2026.10', title: 'Minecraft MOD「CreateRealTimeSchedule」の個人開発を開始' },
];

// ---------------------------------------------------------------------
// 更新履歴
// ---------------------------------------------------------------------
export const changelog: Event[] = [{ date: '2026-11-12', title: 'v1.0 第1版を公開' }];
