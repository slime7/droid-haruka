import { computed, ref } from 'vue';

const RELEASES_PAGE = 'https://github.com/slime7/droid-haruka/releases';
const LATEST_RELEASE_API = 'https://api.github.com/repos/slime7/droid-haruka/releases/latest';

const release = ref(null);
const status = ref('idle');
let requestStarted = false;

function pickAsset(assets, predicate) {
  return assets.find((asset) => predicate(asset.name)) ?? null;
}

/**
 * 获取 Droid Haruka 最新发行版信息，并在同一页面内复用结果。
 * @returns {{
 *   release: import('vue').Ref<object | null>,
 *   status: import('vue').Ref<'idle' | 'loading' | 'ready' | 'error'>,
 *   version: import('vue').ComputedRef<string>,
 *   publishedAt: import('vue').ComputedRef<string>,
 *   downloadUrl: import('vue').ComputedRef<string>,
 *   downloadName: import('vue').ComputedRef<string>,
 *   checksumUrl: import('vue').ComputedRef<string>,
 *   checksumName: import('vue').ComputedRef<string>,
 *   releasesUrl: string,
 * }}
 */
export function useLatestRelease() {
  if (!requestStarted) {
    requestStarted = true;
    status.value = 'loading';

    fetch(LATEST_RELEASE_API, {
      headers: { Accept: 'application/vnd.github+json' },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`GitHub Release 请求失败：${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        release.value = data;
        status.value = 'ready';
      })
      .catch(() => {
        status.value = 'error';
      });
  }

  const version = computed(() => release.value?.tag_name ?? 'GitHub Releases');
  const publishedAt = computed(() => {
    const date = release.value?.published_at;
    if (!date) {
      return '前往 GitHub 查看';
    }
    return new Intl.DateTimeFormat('zh-CN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(new Date(date));
  });
  const setupAsset = computed(() => (
    release.value ? pickAsset(release.value.assets ?? [], (name) => /setup.*\.exe$/i.test(name)) : null
  ));
  const downloadUrl = computed(() => (
    setupAsset.value?.browser_download_url ?? release.value?.html_url ?? RELEASES_PAGE
  ));
  const downloadName = computed(() => setupAsset.value?.name ?? '从 Releases 选择安装包');
  const checksumAsset = computed(() => (
    release.value
      ? pickAsset(release.value.assets ?? [], (name) => /sha-?256|checksum/i.test(name))
      : null
  ));
  const checksumUrl = computed(() => (
    checksumAsset.value?.browser_download_url ?? release.value?.html_url ?? RELEASES_PAGE
  ));
  const checksumName = computed(() => checksumAsset.value?.name ?? '在发行页查看校验信息');

  return {
    release,
    status,
    version,
    publishedAt,
    downloadUrl,
    downloadName,
    checksumUrl,
    checksumName,
    releasesUrl: RELEASES_PAGE,
  };
}

/**
 * 在新标签页打开官方发行页。
 * @returns {void}
 */
export function openReleases() {
  window.open(RELEASES_PAGE, '_blank', 'noopener');
}
