// public/ 以下のファイルを、base ('/Portfolio') 付きのパスに変換する。
export function asset(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${path.replace(/^\//, '')}`;
}
