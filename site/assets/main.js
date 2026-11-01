const RELEASE_API = 'https://api.github.com/repos/slime7/droid-haruka/releases/latest';
const RELEASES_PAGE = 'https://github.com/slime7/droid-haruka/releases/latest';

/**
 * 设置元素文本；元素不存在时忽略。
 * @param {Element | null} element 目标元素。
 * @param {string} value 文本内容。
 * @returns {void}
 */
const setText = (element, value) => {
  if (element) {
    element.textContent = value;
  }
};

/**
 * 更新链接地址与无障碍名称。
 * @param {Element | null} element 目标链接。
 * @param {string} href 新地址。
 * @param {string} label 无障碍名称。
 * @returns {void}
 */
const setLink = (element, href, label) => {
  if (!(element instanceof HTMLAnchorElement)) {
    return;
  }
  element.href = href;
  element.setAttribute('aria-label', label);
};

/**
 * 从 Release 附件中查找符合规则的下载地址。
 * @param {ReleaseInfo} release GitHub Release 信息。
 * @param {(name: string) => boolean} predicate 附件名称判断函数。
 * @returns {string | null} 下载地址。
 */
const findAsset = (release, predicate) => {
  const asset = release.assets?.find((item) => predicate(item.name));
  return asset?.browser_download_url ?? null;
};

/**
 * 使用最新 Release 信息刷新页面下载入口。
 * @param {ReleaseInfo} release GitHub Release 信息。
 * @returns {void}
 */
const updateReleaseLinks = (release) => {
  const version = release.tag_name ?? '最新版本';
  const releasePage = release.html_url ?? RELEASES_PAGE;
  const versionElements = document.querySelectorAll('#release-version, .js-release-version');
  for (const element of versionElements) {
    element.textContent = version;
  }

  const windowsSetup = findAsset(release, (name) => /setup.*\.exe$/i.test(name));
  const linuxAppImage = findAsset(release, (name) => /\.AppImage$/i.test(name));
  const windowsCard = document.querySelector('#download-windows');
  const linuxCard = document.querySelector('#download-linux');

  if (windowsSetup) {
    setLink(windowsCard, windowsSetup, `下载 Droid Haruka ${version} Windows 安装包`);
  } else {
    setLink(windowsCard, releasePage, `查看 Droid Haruka ${version} Windows 下载`);
  }

  if (linuxAppImage) {
    setLink(linuxCard, linuxAppImage, `下载 Droid Haruka ${version} Linux AppImage`);
  } else {
    setLink(linuxCard, releasePage, `查看 Droid Haruka ${version} Linux 下载`);
  }

  setLink(
    document.querySelector('#release-link'),
    releasePage,
    `查看 Droid Haruka ${version} 发行说明`
  );
};

/**
 * 获取并展示最新 Release 信息。
 * @returns {Promise<void>}
 */
const loadLatestRelease = async () => {
  try {
    const response = await fetch(RELEASE_API, {
      headers: {
        Accept: 'application/vnd.github+json',
      },
    });
    if (!response.ok) {
      return;
    }
    const release = await response.json();
    updateReleaseLinks(release);
  } catch {
    // 网络不可用时保留静态的 Releases 链接。
  }
};

/**
 * 初始化移动端导航。
 * @returns {void}
 */
const setupNavigation = () => {
  const toggle = document.querySelector('.nav-toggle');
  const navigation = document.querySelector('#site-navigation');
  if (!(toggle instanceof HTMLButtonElement) || !navigation) {
    return;
  }

  /**
   * 关闭导航并同步展开状态。
   * @returns {void}
   */
  const closeNavigation = () => {
    document.body.classList.remove('nav-open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', '打开导航');
  };

  toggle.addEventListener('click', () => {
    const isOpen = document.body.classList.toggle('nav-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
    toggle.setAttribute('aria-label', isOpen ? '关闭导航' : '打开导航');
  });

  navigation.addEventListener('click', (event) => {
    if (event.target instanceof Element && event.target.closest('a')) {
      closeNavigation();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeNavigation();
    }
  });

  window.matchMedia('(min-width: 861px)').addEventListener('change', (event) => {
    if (event.matches) {
      closeNavigation();
    }
  });
};

setText(document.querySelector('#current-year'), String(new Date().getFullYear()));
setupNavigation();
loadLatestRelease();

/**
 * @typedef {{ name: string, browser_download_url: string }} ReleaseAsset
 */

/**
 * @typedef {{ tag_name?: string, html_url?: string, assets?: ReleaseAsset[] }} ReleaseInfo
 */
