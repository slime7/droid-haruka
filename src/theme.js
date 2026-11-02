const THEME_KEY = 'dh-promo-theme';

/**
 * 读取已保存的主题模式。
 * @returns {'light' | 'dark' | 'system'} 初始模式。
 */
export function readThemeMode() {
  try {
    const saved = localStorage.getItem(THEME_KEY);
    return saved === 'light' || saved === 'dark' ? saved : 'system';
  } catch {
    return 'system';
  }
}

/**
 * 保存主题模式。
 * @param {'light' | 'dark' | 'system'} mode 主题模式。
 * @returns {void}
 */
export function saveThemeMode(mode) {
  try {
    localStorage.setItem(THEME_KEY, mode);
  } catch {
    // 无法写入本地存储时保持当前会话主题。
  }
}

/**
 * 同步浏览器地址栏主题色。
 * @param {'light' | 'dark'} mode 当前解析后的主题模式。
 * @returns {void}
 */
export function applyThemeColor(mode) {
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) {
    meta.setAttribute('content', mode === 'dark' ? '#0b1711' : '#f4f5ee');
  }
  document.documentElement.dataset.theme = mode;
}
