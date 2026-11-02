<script setup>
import { computed } from 'vue';
import { useLatestRelease } from '../composables/useLatestRelease.js';

const appIcon = `${import.meta.env.BASE_URL}app-icon.png`;
const {
  status,
  version,
  publishedAt,
  downloadUrl,
  downloadName,
  checksumUrl,
  checksumName,
  releasesUrl,
} = useLatestRelease();

const stateText = computed(() => {
  if (status.value === 'loading') {
    return '正在获取最新版本';
  }
  if (status.value === 'error') {
    return '发行信息见 GitHub';
  }
  return '已同步 GitHub Releases';
});

const checksumLabel = computed(() => (
  checksumName.value === '在发行页查看校验信息' ? '校验信息' : checksumName.value
));

function openDownload() {
  window.open(downloadUrl.value, '_blank', 'noopener');
}

function openReleases() {
  window.open(releasesUrl, '_blank', 'noopener');
}
</script>

<template>
  <section
    id="download"
    class="download"
    aria-labelledby="download-title"
  >
    <mat-container>
      <mat-card
        class="download-panel"
        variant="filled"
        color="primary"
        rounded="extra-large"
      >
        <mat-shape
          class="download-shape download-shape--one"
          name="burst"
          :size="330"
          color="primary"
          aria-hidden="true"
        />
        <mat-shape
          class="download-shape download-shape--two"
          name="soft-burst"
          :size="210"
          color="tertiary"
          aria-hidden="true"
        />

        <div class="download-layout">
          <div class="download-copy">
            <p class="download-kicker">
              <span aria-hidden="true" />Ready when you are
            </p>
            <mat-text
              id="download-title"
              as="h2"
              type="display"
              size="small"
              emphasized
              class="download-title"
            >
              把手机，放进桌面
            </mat-text>
            <mat-text
              as="p"
              type="body"
              size="large"
              class="download-lead"
            >
              选择 Windows 发行包。安装后连接 Android 设备，设备端应用会在首次配对时自动安装。
            </mat-text>

            <div class="download-actions">
              <mat-btn
                variant="filled"
                color="secondary-container"
                size="medium"
                suffix="download"
                @click="openDownload"
              >
                下载最新版
              </mat-btn>
              <mat-btn
                variant="text"
                color="on-primary-container"
                size="medium"
                suffix="arrow_outward"
                @click="openReleases"
              >
                全部发行版
              </mat-btn>
            </div>

            <ul class="download-assurances">
              <li><mat-icon
                icon="verified"
                size="16px"
                aria-hidden="true"
              />SHA-256 校验文件</li>
              <li><mat-icon
                icon="update"
                size="16px"
                aria-hidden="true"
              />应用内自动更新</li>
              <li><mat-icon
                icon="install_desktop"
                size="16px"
                aria-hidden="true"
              />NSIS 安装包</li>
            </ul>
          </div>

          <mat-card
            class="release-card"
            variant="elevated"
            rounded="large"
          >
            <div class="release-card__head">
              <mat-avatar
                :src="appIcon"
                :size="52"
                aria-hidden="true"
              />
              <div>
                <mat-text
                  as="p"
                  type="title"
                  size="medium"
                  emphasized
                  class="release-card__name"
                >
                  Droid Haruka
                </mat-text>
                <mat-text
                  as="p"
                  type="body"
                  size="small"
                  class="release-card__platform"
                >
                  Windows 10 / 11 · x64
                </mat-text>
              </div>
              <span
                class="release-card__state"
                :class="`release-card__state--${status}`"
                aria-live="polite"
              >
                <i aria-hidden="true" />{{ stateText }}
              </span>
            </div>

            <mat-divider class="release-card__divider" />

            <dl class="release-meta">
              <div>
                <dt>最新版本</dt>
                <dd>{{ version }}</dd>
              </div>
              <div>
                <dt>发布日期</dt>
                <dd>{{ publishedAt }}</dd>
              </div>
              <div>
                <dt>安装包</dt>
                <dd class="release-meta__file">{{ downloadName }}</dd>
              </div>
              <div>
                <dt>校验</dt>
                <dd>
                  <a
                    :href="checksumUrl"
                    target="_blank"
                    rel="noreferrer"
                    class="release-meta__link"
                  >
                    {{ checksumLabel }}
                    <mat-icon
                      icon="arrow_outward"
                      size="small"
                      aria-hidden="true"
                    />
                  </a>
                </dd>
              </div>
            </dl>

            <mat-divider class="release-card__divider" />

            <p class="release-card__note">
              发行包附带 SHA-256 校验值。下载后可在发行页核对文件完整性。
            </p>
          </mat-card>
        </div>
      </mat-card>
    </mat-container>
  </section>
</template>

<style scoped>
.download {
  padding-block: clamp(24px, 4vw, 48px) clamp(64px, 9vw, 112px);
}

.download-panel {
  position: relative;
  overflow: clip;
  background:
    radial-gradient(circle at 90% 12%, color-mix(in srgb, var(--mat-sys-color-primary) 36%, transparent), transparent 46%),
    linear-gradient(135deg, var(--mat-sys-color-primary-container), color-mix(in srgb, var(--mat-sys-color-primary-container) 76%, var(--mat-sys-color-primary)) 100%);
  color: var(--mat-sys-color-on-primary-container);
}

.download-shape {
  position: absolute;
  opacity: 0.16;
  pointer-events: none;
}

.download-shape--one {
  inset-block-start: -120px;
  inset-inline-end: -84px;
  rotate: 18deg;
}

.download-shape--two {
  inset-block-end: -96px;
  inset-inline-start: -64px;
  rotate: -12deg;
}

.download-layout {
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(0, 0.95fr);
  gap: clamp(28px, 5vw, 56px);
  align-items: center;
  padding: clamp(28px, 5vw, 58px);
}

.download-kicker {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin: 0 0 14px;
  color: var(--mat-sys-color-on-primary-container);
  font-size: 11.5px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  opacity: 0.72;
}

.download-kicker span {
  inline-size: 20px;
  block-size: 2px;
  background: currentColor;
  border-radius: 99px;
}

.download-title {
  display: block;
  margin: 0;
  color: var(--mat-sys-color-on-primary-container);
  font-family: var(--promo-font-display);
  font-size: clamp(2rem, 4.2vw, 3.2rem);
  font-weight: 760;
  line-height: 1.08;
  letter-spacing: -0.04em;
}

.download-lead {
  display: block;
  max-inline-size: 44ch;
  margin-block-start: 16px;
  color: color-mix(in srgb, var(--mat-sys-color-on-primary-container) 76%, transparent);
  line-height: 1.75;
}

.download-actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
  margin-block-start: 28px;
}

.download-assurances {
  display: flex;
  flex-wrap: wrap;
  gap: 10px 18px;
  margin: 24px 0 0;
  padding: 0;
  color: color-mix(in srgb, var(--mat-sys-color-on-primary-container) 72%, transparent);
  list-style: none;
  font-size: 11.5px;
}

.download-assurances li {
  display: inline-flex;
  align-items: center;
  gap: 5px;
}

.download-assurances .mat-icon {
  color: var(--mat-sys-color-on-primary-container);
}

.release-card {
  box-shadow: var(--mat-sys-elevation-level3);
}

.release-card__head {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 20px 20px 16px;
}

.release-card__name {
  margin: 0;
  line-height: 1.2;
}

.release-card__platform {
  display: block;
  margin-block-start: 2px;
  color: var(--mat-sys-color-on-surface-variant);
}

.release-card__state {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  margin-inline-start: auto;
  padding: 4px 9px;
  color: var(--mat-sys-color-on-surface-variant);
  background: var(--mat-sys-color-surface-container-high);
  border-radius: 999px;
  font-size: 9px;
  font-weight: 650;
  white-space: nowrap;
}

.release-card__state i {
  inline-size: 5px;
  block-size: 5px;
  background: currentColor;
  border-radius: 50%;
}

.release-card__state--ready {
  color: var(--mat-sys-color-primary);
}

.release-card__state--error {
  color: var(--mat-sys-color-on-surface-variant);
}

.release-card__divider {
  margin-inline: 20px;
}

.release-meta {
  display: grid;
  gap: 12px;
  margin: 0;
  padding: 16px 20px;
}

.release-meta > div {
  display: grid;
  grid-template-columns: 76px minmax(0, 1fr);
  gap: 12px;
  align-items: baseline;
}

.release-meta dt {
  color: var(--mat-sys-color-on-surface-variant);
  font-size: 10.5px;
}

.release-meta dd {
  min-inline-size: 0;
  margin: 0;
  color: var(--mat-sys-color-on-surface);
  font-family: ui-monospace, 'Cascadia Code', Consolas, monospace;
  font-size: 10.5px;
  font-weight: 600;
  line-height: 1.5;
  overflow-wrap: anywhere;
}

.release-meta__file {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.release-meta__link {
  display: inline-flex;
  align-items: center;
  gap: 2px;
  color: var(--mat-sys-color-primary);
  text-decoration: none;
}

.release-meta__link:hover {
  text-decoration: underline;
  text-underline-offset: 3px;
}

.release-card__note {
  margin: 0;
  padding: 14px 20px 18px;
  color: var(--mat-sys-color-on-surface-variant);
  font-size: 10.5px;
  line-height: 1.65;
}

@media (max-width: 980px) {
  .download-layout {
    grid-template-columns: minmax(0, 1fr);
  }

  .release-card {
    max-inline-size: 560px;
  }
}

@media (max-width: 620px) {
  .download-layout {
    padding: 24px 18px 26px;
  }

  .release-card__head {
    flex-wrap: wrap;
    padding: 16px 16px 12px;
  }

  .release-card__state {
    margin-inline-start: 0;
  }

  .release-card__divider {
    margin-inline: 16px;
  }

  .release-meta {
    padding: 14px 16px;
  }

  .release-meta > div {
    grid-template-columns: 64px minmax(0, 1fr);
  }

  .release-card__note {
    padding-inline: 16px;
  }
}
</style>
