<script setup>
import { computed } from 'vue';
import DesktopWindowMock from './mockups/DesktopWindowMock.vue';
import PhoneMock from './mockups/PhoneMock.vue';
import { useLatestRelease } from '../composables/useLatestRelease.js';

const {
  release,
  status,
  version,
  downloadUrl,
  releasesUrl,
} = useLatestRelease();

const displayVersion = computed(() => {
  if (status.value === 'loading') {
    return '正在获取';
  }
  return version.value;
});
const releaseUrl = computed(() => release.value?.html_url ?? releasesUrl);

const platformItems = [
  { icon: 'desktop_windows', label: 'Windows 10/11' },
  { icon: 'computer', label: 'Linux x64' },
  { icon: 'android', label: 'Android 11+' },
];

function openDownload() {
  window.open(downloadUrl.value, '_blank', 'noopener');
}

function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
</script>

<template>
  <section
    id="top"
    class="hero"
    aria-labelledby="hero-title"
  >
    <div
      class="hero__decor"
      aria-hidden="true"
    >
      <mat-shape
        class="hero__shape hero__shape--sun"
        name="very-sunny"
        :size="380"
        color="primary-container"
      />
      <mat-shape
        class="hero__shape hero__shape--flower"
        name="flower"
        :size="230"
        color="tertiary-container"
      />
      <span class="hero__grid" />
    </div>

    <mat-container class="hero__container">
      <div class="hero__grid-layout">
        <div class="hero__copy">
          <div class="eyebrow">
            <span
              class="eyebrow__dot"
              aria-hidden="true"
            />
            <span>Windows / Linux 桌面客户端</span>
          </div>

          <mat-text
            id="hero-title"
            as="h1"
            type="display"
            size="large"
            emphasized
            class="hero__title"
          >
            让 <span class="hero__accent">Android</span><br>
            成为桌面的<br>
            一部分
          </mat-text>

          <mat-text
            as="p"
            type="body"
            size="large"
            class="hero__lead"
          >
            镜像整块屏幕，把每个应用变成独立窗口。连接、管理、输入和文件传输，都在同一处完成。
          </mat-text>

          <div class="hero__actions">
            <mat-btn
              variant="filled"
              size="medium"
              suffix="download"
              @click="openDownload"
            >
              下载最新版
            </mat-btn>
            <mat-btn
              variant="outlined"
              color="primary"
              size="medium"
              suffix="arrow_downward"
              @click="scrollToSection('features')"
            >
              了解功能
            </mat-btn>
          </div>

          <div
            class="release-note"
            aria-live="polite"
          >
            <span
              class="release-note__dot"
              aria-hidden="true"
            />
            <span>最新发行版</span>
            <strong>{{ displayVersion }}</strong>
            <a
              :href="releaseUrl"
              target="_blank"
              rel="noreferrer"
            >
              发行说明
              <mat-icon
                icon="arrow_outward"
                size="small"
                aria-hidden="true"
              />
            </a>
          </div>

          <ul
            class="platform-rail"
            aria-label="支持平台"
          >
            <li
              v-for="item in platformItems"
              :key="item.label"
            >
              <mat-icon
                :icon="item.icon"
                size="16px"
                aria-hidden="true"
              />
              {{ item.label }}
            </li>
          </ul>
        </div>

        <div
          class="hero-stage"
          role="img"
          aria-label="Droid Haruka 将 Android 设备镜像为桌面多窗口的界面示意"
        >
          <div class="hero-window">
            <DesktopWindowMock />
          </div>

          <div class="hero-phone">
            <PhoneMock :tilt="3" />
          </div>

          <mat-card
            class="float-card float-card--wifi"
            variant="filled"
            rounded="large"
          >
            <span class="float-card__icon"><mat-icon
              icon="wifi"
              size="18px"
            /></span>
            <span class="float-card__copy">
              <small>连接</small>
              <strong>Wi-Fi 直连</strong>
            </span>
          </mat-card>
        </div>
      </div>
    </mat-container>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  isolation: isolate;
  overflow: clip;
  padding-block: clamp(40px, 6vw, 86px) clamp(72px, 8vw, 104px);
}

.hero__decor {
  position: absolute;
  z-index: -1;
  inset: 0;
  pointer-events: none;
}

.hero__grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(to right, color-mix(in srgb, var(--mat-sys-color-outline-variant) 45%, transparent) 1px, transparent 1px),
    linear-gradient(to bottom, color-mix(in srgb, var(--mat-sys-color-outline-variant) 45%, transparent) 1px, transparent 1px);
  background-size: 84px 84px;
  mask-image: radial-gradient(ellipse at 68% 38%, black 0%, transparent 68%);
  opacity: 0.45;
}

.hero__shape {
  position: absolute;
  opacity: 0.55;
}

.hero__shape--sun {
  inset-block-start: -120px;
  inset-inline-end: -80px;
  rotate: 12deg;
}

.hero__shape--flower {
  inset-block-end: 12px;
  inset-inline-start: 20px;
  opacity: 0.2;
}

.hero__grid-layout {
  display: grid;
  grid-template-columns: minmax(0, 1.02fr) minmax(0, 1fr);
  gap: clamp(28px, 5vw, 64px);
  align-items: center;
}

.hero__copy {
  position: relative;
  z-index: 1;
  max-inline-size: 540px;
}

.eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 7px 12px 7px 10px;
  color: var(--mat-sys-color-on-surface-variant);
  background: color-mix(in srgb, var(--mat-sys-color-surface-container-high) 82%, transparent);
  border: 1px solid var(--mat-sys-color-outline-variant);
  border-radius: var(--mat-sys-shape-corner-full);
  font-size: 12.5px;
  font-weight: 600;
  letter-spacing: 0.02em;
}

.eyebrow__dot {
  inline-size: 8px;
  block-size: 8px;
  background: var(--mat-sys-color-primary);
  border-radius: 50%;
  box-shadow: 0 0 0 4px color-mix(in srgb, var(--mat-sys-color-primary) 18%, transparent);
}

.hero__title {
  display: block;
  margin-block: 22px 20px;
  color: var(--mat-sys-color-on-surface);
  font-family: var(--promo-font-display);
  font-size: clamp(2.7rem, 5.4vw, 4.4rem);
  font-weight: 750;
  line-height: 1.03;
  letter-spacing: -0.045em;
}

.hero__accent {
  position: relative;
  display: inline-block;
  color: var(--mat-sys-color-primary);
}

.hero__accent::after {
  position: absolute;
  z-index: -1;
  inset-inline: -0.04em;
  inset-block-end: 0.02em;
  block-size: 0.32em;
  background: var(--mat-sys-color-primary-container);
  border-radius: 999px 999px 40% 40%;
  content: '';
  opacity: 0.85;
}

.hero__lead {
  display: block;
  max-inline-size: 46ch;
  color: var(--mat-sys-color-on-surface-variant);
  font-size: clamp(1rem, 1.4vw, 1.12rem);
  line-height: 1.75;
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-block-start: 30px;
}

@media (max-width: 620px) {
  .hero__actions {
    align-items: stretch;
    flex-direction: column;
  }

  .hero__actions > * {
    inline-size: 100%;
  }
}

.release-note {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
  margin-block-start: 22px;
  color: var(--mat-sys-color-on-surface-variant);
  font-size: 12.5px;
}

.release-note strong {
  color: var(--mat-sys-color-on-surface);
  font-variant-numeric: tabular-nums;
}

.release-note a {
  display: inline-flex;
  align-items: center;
  gap: 2px;
  margin-inline-start: 4px;
  color: var(--mat-sys-color-primary);
  font-weight: 600;
  text-decoration: none;
}

.release-note a:hover {
  text-decoration: underline;
  text-underline-offset: 3px;
}

.release-note__dot {
  inline-size: 7px;
  block-size: 7px;
  background: var(--mat-sys-color-primary);
  border-radius: 50%;
  animation: note-pulse 2.6s ease-in-out infinite;
}

@keyframes note-pulse {
  0%,
  100% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--mat-sys-color-primary) 38%, transparent);
  }

  50% {
    box-shadow: 0 0 0 5px transparent;
  }
}

.platform-rail {
  display: flex;
  flex-wrap: wrap;
  gap: 8px 10px;
  margin: 28px 0 0;
  padding: 14px 0 0;
  color: var(--mat-sys-color-on-surface-variant);
  border-block-start: 1px solid var(--mat-sys-color-outline-variant);
  list-style: none;
  font-size: 11.5px;
}

.platform-rail li {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  white-space: nowrap;
}

.platform-rail .mat-icon {
  color: var(--mat-sys-color-primary);
}

/* ---------- 产品示意 ---------- */

.hero-stage {
  position: relative;
  justify-self: end;
  inline-size: 100%;
  max-inline-size: 560px;
  min-block-size: 590px;
}

.hero-window {
  position: absolute;
  z-index: 2;
  inset-block-start: 8px;
  inset-inline-start: 90px;
  inline-size: calc(100% - 90px);
}

.hero-phone {
  position: absolute;
  z-index: 3;
  inset-block-end: 18px;
  inset-inline-start: -45px;
  inline-size: 150px;
}

/* 浮动信息卡 */

.float-card {
  position: absolute;
  z-index: 3;
  display: flex;
  align-items: center;
  gap: 9px;
  padding: 10px 13px;
  border: 1px solid color-mix(in srgb, var(--mat-sys-color-outline-variant) 70%, transparent);
  box-shadow: var(--mat-sys-elevation-level2);
}

.float-card--wifi {
  inset-block-end: 52px;
  inset-inline-end: 0;
  animation: float-card 6s ease-in-out infinite;
}

@keyframes float-card {
  0%,
  100% {
    translate: 0 0;
  }

  50% {
    translate: 0 -7px;
  }
}

.float-card__icon {
  display: grid;
  place-items: center;
  inline-size: 32px;
  block-size: 32px;
  color: var(--mat-sys-color-on-primary-container);
  background: var(--mat-sys-color-primary-container);
  border-radius: 10px;
}

.float-card__copy {
  display: flex;
  flex-direction: column;
  line-height: 1.2;
}

.float-card__copy small {
  color: var(--mat-sys-color-on-surface-variant);
  font-size: 8.5px;
}

.float-card__copy strong {
  font-size: 11px;
  white-space: nowrap;
}

@media (max-width: 1100px) {
  .hero__shape--sun {
    inset-inline-end: -160px;
  }

  .hero-stage {
    min-block-size: 550px;
  }

  .hero-window {
    inset-inline-start: 70px;
    inline-size: calc(100% - 70px);
  }
}

@media (max-width: 900px) {
  .hero {
    padding-block-start: 24px;
  }

  .hero__grid-layout {
    grid-template-columns: minmax(0, 1fr);
    gap: 18px;
  }

  .hero__copy {
    max-inline-size: 620px;
  }

  .hero-stage {
    justify-self: center;
    max-inline-size: 560px;
    min-block-size: 540px;
  }

  .hero__shape--flower {
    display: none;
  }
}

@media (max-width: 620px) {
  .hero__title {
    font-size: clamp(2.3rem, 11vw, 3.1rem);
  }

  .hero-stage {
    min-block-size: 470px;
  }

  .hero-window {
    inset-block-start: 0;
    inset-inline-start: 0;
    inline-size: 100%;
  }

  .hero-phone {
    display: none;
  }

  .float-card--wifi {
    inset-block-end: 4px;
    inset-inline-end: 8px;
  }

  .platform-rail {
    gap: 8px 10px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .float-card,
  .release-note__dot {
    animation: none;
  }
}
</style>
