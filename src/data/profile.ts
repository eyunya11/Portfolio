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
  // フッターの「最終更新」に出す。更新したら書き換える
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
  tagline: 'ゲームが好きな高専生です。',
  about: [
    'ゲームが好きで、遊ぶだけでなく自分で作ることにも取り組んでいます。2023年ごろから Unity と C# でゲーム制作を始めました。',
    '最近は Minecraft の MOD 作りばかりやっています。',
  ],
  interests: ['ゲーム制作', 'Minecraft の MOD 開発'],
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
  /** リンクの代わりに出す補足 (例: リポジトリが非公開であること) */
  linkNote?: string;
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
  'Git / GitHub': ['git', 'github'],
};

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
    links: [{ label: 'Google Colab', url: 'https://colab.research.google.com/drive/1vIcLuIRCimUl6l2JwmR1BPT42bFl2SbV' }],
    // 【要記入】課題の条件: 画像を4枚以上。public/images/kadai04/ に置いて、ここに足す。
    // 例: { src: 'images/kadai04/01.png', alt: 'ゲーム設定のフォーム', caption: 'Colab のフォームで設定を変えられる' },
    // 候補: ゲーム設定のフォーム / 自分の手番の入力 / 役の判定結果 / 最後のランキング
    images: [],
  },
  {
    id: 'festival',
    label: '高専祭 2026 プロジェクト',
    title: 'ゴミ分別ゲーム',
    short: '選んだ自治体の分別ルールで正解が変わる、スマートフォン向けのゴミ分別ゲーム',
    period: '2026年5月〜11月',
    summary:
      '高専祭に向けてチームで開発した、Unity 製のスマートフォン向けアクションゲームです。ベルトで流れてくるゴミを、キャップやラベルなどのパーツに分解し、正しいゴミ箱へドラッグして捨てます。選んだ自治体の実際の分別ルールによって正解が変わるのが、このゲームの中心です。',
    role: 'プログラム担当。ゲーム本体のプログラムの大部分を書きました。ほかに、ゴミのデータを編集する専用の Windows アプリと、ゴミのデータとイラストを作るメンバー向けの作業手順書も作りました。',
    points: [
      'ゴミのデータには、ゴミ箱の名前を持たせず、素材や状態のタグだけを持たせました。自治体ごとの「このタグの組み合わせはこのゴミ箱」というルールで正解を決め、各自治体は全国共通の標準ルールと違うところだけを書けば済むようにしました。ゴミのデータを変えずに地域を増やせ、今は大阪市・寝屋川市の2地域に対応しています。',
      'ゴミを運ぶ操作はドラッグ、分解は外したいパーツをタップする操作にしました。2つが混ざらないよう、ドラッグとみなす距離を画面の細かさから計算しています。',
      'ゴミ制作班が Excel を使わずにゴミのデータを編集できる、専用の Windows アプリを1人で作りました。入力しながら Unity の取り込みと同じチェックが走り、イラスト(PSD)のゲームでの見え方や、地域ごとの判定の結果もその場で確かめられます。Unity を使ったことのないメンバーでも、このアプリと Git だけで作業できます。',
      'ゴミのデータを Unity に取り込むツールと、分別の判定を確かめる自動テストも作り、入力ミスや判定の間違いがゲームに入らないようにしました。',
    ],
    tech: ['C#', 'Unity', 'WPF (.NET)', 'Git / GitHub'],
    // 開発リポジトリは非公開なので、リンクは載せずに説明だけを載せる
    links: [],
    linkNote: 'チームの開発リポジトリは非公開のため、リンクは載せていません。',
    // 【要記入】課題の条件: 画像を4枚以上。public/images/festival/ に置いて、ここに足す。
    images: [],
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
