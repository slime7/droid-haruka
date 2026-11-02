<script setup>
const checklist = [
  '快捷返回、主页与最近任务',
  '置顶、截屏与窗口状态记忆',
  'Windows 托盘、开机启动、深链接与自动更新',
];

function scrollToDownload() {
  document.getElementById('download')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
</script>

<template>
  <section
    id="experience"
    class="workspace"
    aria-labelledby="experience-title"
  >
    <mat-container>
      <mat-card
        class="workspace-panel"
        variant="filled"
        rounded="extra-large"
      >
        <span
          class="workspace-panel__grid"
          aria-hidden="true"
        />
        <div class="workspace-panel__layout">
          <div class="workspace-copy">
            <p class="workspace-kicker">
              <span aria-hidden="true" />Multi-window workspace
            </p>
            <mat-text
              id="experience-title"
              as="h2"
              type="display"
              size="small"
              emphasized
              class="workspace-title"
            >
              每台设备，都有自己的工作区
            </mat-text>
            <mat-text
              as="p"
              type="body"
              size="large"
              class="workspace-lead"
            >
              主窗口负责连接与设备管理，镜像和应用窗口独立存在。一次连接，就能把手机留在手边，把应用放到桌面上。
            </mat-text>

            <ul class="workspace-checklist">
              <li
                v-for="item in checklist"
                :key="item"
              >
                <mat-icon
                  icon="check_circle"
                  size="small"
                  aria-hidden="true"
                />
                {{ item }}
              </li>
            </ul>

            <mat-btn
              variant="filled"
              color="secondary-container"
              size="medium"
              suffix="south_east"
              @click="scrollToDownload"
            >
              开始连接
            </mat-btn>
          </div>

          <div
            class="workspace-art"
            aria-hidden="true"
          >
            <mat-card
              class="ws-window ws-window--messages"
              variant="elevated"
              rounded="large"
            >
              <span class="ws-title"><mat-icon icon="chat_bubble" size="14px" /> Messages</span>
              <div class="ws-chat">
                <mat-avatar
                  icon="person"
                  :size="28"
                />
                <span class="ws-bubble ws-bubble--one" />
                <span class="ws-bubble ws-bubble--two" />
                <span class="ws-bubble ws-bubble--three" />
                <span class="ws-bubble ws-bubble--four" />
              </div>
            </mat-card>

            <mat-card
              class="ws-window ws-window--camera"
              variant="elevated"
              rounded="large"
            >
              <span class="ws-title"><mat-icon icon="videocam" size="14px" /> Camera</span>
              <span class="ws-camera">
                <span class="ws-camera__badge"><i />CAM → PC</span>
              </span>
            </mat-card>

            <mat-card
              class="ws-window ws-window--maps"
              variant="elevated"
              rounded="large"
            >
              <span class="ws-title"><mat-icon icon="map" size="14px" /> Maps</span>
              <span class="ws-map"><i /><i /><b /></span>
            </mat-card>
          </div>
        </div>
      </mat-card>
    </mat-container>
  </section>
</template>

<style scoped>
.workspace {
  padding-block: clamp(20px, 4vw, 40px) clamp(64px, 9vw, 112px);
}

.workspace-panel {
  position: relative;
  overflow: clip;
  background:
    radial-gradient(circle at 82% 4%, color-mix(in srgb, var(--mat-sys-color-primary) 32%, transparent), transparent 42%),
    linear-gradient(135deg, var(--mat-sys-color-inverse-surface), color-mix(in srgb, var(--mat-sys-color-inverse-surface) 84%, var(--mat-sys-color-primary)) 58%, var(--mat-sys-color-inverse-surface));
  color: var(--mat-sys-color-inverse-on-surface);
  border: 1px solid color-mix(in srgb, var(--mat-sys-color-outline-variant) 55%, transparent);
  box-shadow: var(--mat-sys-elevation-level2);
}

.workspace-panel__grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(to right, color-mix(in srgb, var(--mat-sys-color-inverse-on-surface) 7%, transparent) 1px, transparent 1px),
    linear-gradient(to bottom, color-mix(in srgb, var(--mat-sys-color-inverse-on-surface) 7%, transparent) 1px, transparent 1px);
  background-size: 72px 72px;
  mask-image: radial-gradient(ellipse at 80% 50%, black, transparent 72%);
  pointer-events: none;
}

.workspace-panel__layout {
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 0.94fr) minmax(0, 1.06fr);
  gap: clamp(28px, 5vw, 56px);
  align-items: center;
  padding: clamp(28px, 5vw, 58px);
}

.workspace-kicker {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin: 0 0 16px;
  color: var(--mat-sys-color-primary-container);
  font-size: 11.5px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.workspace-kicker span {
  inline-size: 20px;
  block-size: 2px;
  background: currentColor;
  border-radius: 99px;
}

.workspace-title {
  display: block;
  max-inline-size: 16ch;
  margin: 0;
  color: var(--mat-sys-color-inverse-on-surface);
  font-family: var(--promo-font-display);
  font-size: clamp(1.9rem, 3.6vw, 2.9rem);
  font-weight: 740;
  line-height: 1.12;
  letter-spacing: -0.035em;
}

.workspace-lead {
  display: block;
  max-inline-size: 46ch;
  margin-block-start: 16px;
  color: color-mix(in srgb, var(--mat-sys-color-inverse-on-surface) 72%, transparent);
  line-height: 1.75;
}

.workspace-checklist {
  display: grid;
  gap: 10px;
  margin: 24px 0 28px;
  padding: 0;
  list-style: none;
}

.workspace-checklist li {
  display: flex;
  align-items: center;
  gap: 9px;
  color: color-mix(in srgb, var(--mat-sys-color-inverse-on-surface) 88%, transparent);
  font-size: 13.5px;
}

.workspace-checklist .mat-icon {
  flex: none;
  color: var(--mat-sys-color-primary-container);
}

/* 工作区示意 */

.workspace-art {
  position: relative;
  min-block-size: 440px;
}

.ws-window {
  position: absolute;
  overflow: hidden;
}

.ws-title {
  display: flex;
  align-items: center;
  gap: 6px;
  block-size: 26px;
  padding-inline: 11px;
  color: var(--mat-sys-color-on-surface-variant);
  background: var(--mat-sys-color-surface-container-high);
  border-block-end: 1px solid var(--mat-sys-color-outline-variant);
  font-size: 10px;
  font-weight: 700;
}

.ws-window--messages {
  z-index: 2;
  inset-block-start: 0;
  inset-inline-start: 0;
  inline-size: 58%;
  block-size: 214px;
  rotate: -1.6deg;
  box-shadow: 0 24px 48px rgb(4 12 7 / 26%);
}

.ws-chat {
  display: grid;
  grid-template-columns: 30px 1fr;
  gap: 7px 9px;
  align-items: start;
  padding: 12px;
}

.ws-bubble {
  block-size: 28px;
  background: var(--mat-sys-color-secondary-container);
  border-radius: 6px 13px 13px 13px;
}

.ws-bubble--two {
  inline-size: 72%;
  background: var(--mat-sys-color-primary-container);
  border-radius: 13px 6px 13px 13px;
  justify-self: end;
}

.ws-bubble--three {
  grid-column: 2;
  inline-size: 58%;
  block-size: 20px;
}

.ws-bubble--four {
  grid-column: 2;
  inline-size: 44%;
  block-size: 22px;
  background: var(--mat-sys-color-surface-container-high);
  border-radius: 12px 4px 12px 12px;
  justify-self: start;
}

.ws-window--maps {
  z-index: 1;
  inset-block-end: 0;
  inset-inline-start: 16%;
  inline-size: 68%;
  block-size: 196px;
  rotate: -0.8deg;
  box-shadow: 0 20px 44px rgb(4 12 7 / 22%);
}

.ws-map {
  position: relative;
  display: block;
  block-size: 152px;
  margin: 9px 11px;
  overflow: hidden;
  background:
    linear-gradient(118deg, transparent 42%, var(--mat-sys-color-outline-variant) 43% 44%, transparent 45%),
    linear-gradient(26deg, transparent 56%, var(--mat-sys-color-outline-variant) 57% 58%, transparent 59%),
    linear-gradient(152deg, transparent 22%, var(--mat-sys-color-secondary-container) 23% 25%, transparent 26%),
    var(--mat-sys-color-surface-container-high);
  border-radius: 10px;
}

.ws-map i,
.ws-map b {
  position: absolute;
  inline-size: 9px;
  block-size: 9px;
  background: var(--mat-sys-color-primary);
  border: 2px solid var(--mat-sys-color-surface);
  border-radius: 50%;
}

.ws-map i {
  inset-block-start: 34%;
  inset-inline-start: 28%;
}

.ws-map b {
  inset-block-end: 20%;
  inset-inline-end: 22%;
  background: var(--mat-sys-color-tertiary);
}

.ws-window--camera {
  z-index: 3;
  inset-block-start: 14px;
  inset-inline-end: 0;
  inline-size: 38%;
  block-size: 214px;
  rotate: 1.8deg;
  box-shadow: 0 22px 44px rgb(4 12 7 / 24%);
}

.ws-camera {
  position: relative;
  display: block;
  block-size: 168px;
  margin: 8px 10px 10px;
  overflow: hidden;
  background:
    radial-gradient(circle at 64% 30%, color-mix(in srgb, var(--mat-sys-color-primary) 42%, transparent), transparent 34%),
    radial-gradient(circle at 24% 82%, color-mix(in srgb, var(--mat-sys-color-tertiary) 38%, transparent), transparent 42%),
    linear-gradient(150deg, color-mix(in srgb, var(--mat-sys-color-surface-container-high) 72%, var(--mat-sys-color-primary)), var(--mat-sys-color-surface-container-low));
  border-radius: 10px;
}

.ws-camera::before {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(to right, color-mix(in srgb, var(--mat-sys-color-primary) 18%, transparent) 1px, transparent 1px),
    linear-gradient(to bottom, color-mix(in srgb, var(--mat-sys-color-primary) 18%, transparent) 1px, transparent 1px);
  background-size: 18px 18px;
  content: '';
  opacity: 0.3;
}

.ws-camera::after {
  position: absolute;
  inset: 12px;
  border: 1px solid color-mix(in srgb, var(--mat-sys-color-primary) 46%, transparent);
  border-radius: 7px;
  content: '';
}

.ws-camera__badge {
  position: absolute;
  z-index: 1;
  inset-block-end: 9px;
  inset-inline-start: 9px;
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 4px 7px;
  color: var(--mat-sys-color-on-surface);
  background: color-mix(in srgb, var(--mat-sys-color-surface) 82%, transparent);
  border-radius: 999px;
  font-family: ui-monospace, 'Cascadia Code', Consolas, monospace;
  font-size: 7px;
  font-weight: 700;
  letter-spacing: 0.1em;
}

.ws-camera__badge i {
  inline-size: 5px;
  block-size: 5px;
  background: var(--mat-sys-color-primary);
  border-radius: 50%;
}

@media (max-width: 980px) {
  .workspace-panel__layout {
    grid-template-columns: minmax(0, 1fr);
  }

  .workspace-copy {
    max-inline-size: 640px;
  }

  .workspace-art {
    min-block-size: 440px;
    max-inline-size: 560px;
    inline-size: 100%;
    justify-self: center;
  }
}

@media (max-width: 620px) {
  .workspace-panel__layout {
    padding: 24px 20px 28px;
  }

  .workspace-art {
    min-block-size: 360px;
  }

  .ws-window--messages {
    inline-size: 72%;
    block-size: 190px;
  }

  .ws-window--maps {
    inset-inline-start: 20%;
    inline-size: 66%;
    block-size: 168px;
  }

  .ws-map {
    block-size: 124px;
  }

  .ws-window--camera {
    display: none;
  }
}
</style>
