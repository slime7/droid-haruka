<script setup>
import { useLatestRelease } from '../composables/useLatestRelease.js';

const appIcon = `${import.meta.env.BASE_URL}app-icon.png`;
const {
  downloadUrl,
  releasesUrl,
} = useLatestRelease();

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

          <div
            class="download-mark"
            aria-hidden="true"
          >
            <span class="download-mark__halo" />
            <img
              :src="appIcon"
              class="download-mark__icon"
              width="132"
              height="132"
              alt=""
            >
            <span class="download-mark__caption">Windows 10 / 11 · x64</span>
          </div>
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
  grid-template-columns: minmax(0, 1.08fr) minmax(0, 0.92fr);
  gap: clamp(28px, 5vw, 56px);
  align-items: center;
  padding: clamp(28px, 5vw, 58px);
}

.download-copy {
  max-inline-size: 58ch;
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

.download-mark {
  position: relative;
  display: grid;
  justify-items: center;
  gap: 18px;
}

.download-mark__halo {
  position: absolute;
  inset-block-start: 42%;
  inset-inline-start: 50%;
  inline-size: clamp(210px, 26vw, 290px);
  block-size: clamp(210px, 26vw, 290px);
  background: radial-gradient(circle, color-mix(in srgb, var(--mat-sys-color-primary) 34%, transparent), transparent 68%);
  border-radius: 50%;
  translate: -50% -50%;
}

.download-mark__icon {
  position: relative;
  z-index: 1;
  inline-size: clamp(104px, 12vw, 132px);
  block-size: auto;
  border-radius: 28px;
  filter: drop-shadow(0 24px 40px rgb(4 12 7 / 26%));
}

.download-mark__caption {
  position: relative;
  z-index: 1;
  color: color-mix(in srgb, var(--mat-sys-color-on-primary-container) 68%, transparent);
  font-family: ui-monospace, 'Cascadia Code', Consolas, monospace;
  font-size: 10px;
  font-weight: 650;
  letter-spacing: 0.08em;
}

@media (max-width: 980px) {
  .download-layout {
    grid-template-columns: minmax(0, 1fr);
  }

  .download-mark {
    justify-self: start;
    gap: 12px;
    margin-block-start: 8px;
  }
}

@media (max-width: 620px) {
  .download-layout {
    padding: 24px 18px 26px;
  }

  .download-mark__icon {
    inline-size: 92px;
  }
}
</style>
