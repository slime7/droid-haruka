<script setup>
import { ref } from 'vue';

const platform = ref('windows');

const platforms = [
  {
    value: 'windows',
    label: 'Windows',
    icon: 'desktop_windows',
    shape: 'very-sunny',
    tone: 'primary',
    tag: '推荐',
    title: 'Windows 桌面端',
    version: 'Windows 10 / 11 · x64',
    items: [
      'NSIS 安装包与便携版',
      '托盘、开机启动与自动更新',
      'Windows 11 22H2 起支持虚拟摄像头',
      '文件拖放、剪贴板与通知转发',
    ],
    tags: ['x64', 'NSIS', '便携版', '自动更新', '虚拟摄像头'],
    note: '安装后即可连接设备，发行包内已包含 scrcpy、adb 与设备端应用所需组件。',
  },
  {
    value: 'android',
    label: 'Android',
    icon: 'smartphone',
    shape: 'puffy',
    tone: 'tertiary',
    tag: 'minSdk 30',
    title: 'Android 设备端',
    version: 'Android 11 及以上 · minSdk 30',
    items: [
      '首次连接自动安装设备端 App',
      '基础配对与设备管理可使用 ADB',
      '画面采集与输入法接管需要 Shizuku',
      '支持 USB 与无线调试配对',
    ],
    tags: ['Android 11+', 'minSdk 30', 'ADB', 'Shizuku', '无线调试'],
    note: '无需 root。Shizuku 仅用于画面采集、输入法接管等需要更高权限的能力。',
  },
];
</script>

<template>
  <section
    id="requirements"
    class="requirements"
    aria-labelledby="requirements-title"
  >
    <mat-container>
      <div class="section-heading">
        <div>
          <p class="section-kicker">
            <span aria-hidden="true" />Compatibility
          </p>
          <mat-text
            id="requirements-title"
            as="h2"
            type="display"
            size="medium"
            emphasized
            class="section-title"
          >
            先确认你的环境
          </mat-text>
        </div>
        <mat-text
          as="p"
          type="body"
          size="large"
          class="section-lead"
        >
          桌面端支持 64 位 Windows，设备端最低为 Android 11。
        </mat-text>
      </div>

      <mat-tabs
        v-model="platform"
        variant="secondary"
        scrollable
        align="start"
        class="requirements-tabs"
        aria-label="平台运行要求"
      >
        <mat-tab-item
          v-for="item in platforms"
          :key="item.value"
          :value="item.value"
          :label="item.label"
          :icon="item.icon"
        />

        <mat-tab-content
          v-for="item in platforms"
          :key="`content-${item.value}`"
          :value="item.value"
        >
          <div class="requirement-grid">
            <mat-card
              variant="outlined"
              rounded="large"
              class="requirement-card"
            >
              <mat-card-content>
                <div class="requirement-card__head">
                  <mat-shape
                    :name="item.shape"
                    :size="58"
                    :color="`${item.tone}-container`"
                    :class="`requirement-card__shape requirement-card__shape--${item.tone}`"
                  >
                    <mat-icon
                      :icon="item.icon"
                      size="26px"
                      aria-hidden="true"
                    />
                  </mat-shape>
                  <div class="requirement-card__title">
                    <span class="requirement-card__tag">{{ item.tag }}</span>
                    <mat-text
                      as="h3"
                      type="title"
                      size="large"
                    >
                      {{ item.title }}
                    </mat-text>
                    <mat-text
                      as="p"
                      type="body"
                      size="medium"
                      class="requirement-card__version"
                    >
                      {{ item.version }}
                    </mat-text>
                  </div>
                </div>

                <mat-divider class="requirement-card__divider" />

                <ul class="requirement-card__list">
                  <li
                    v-for="line in item.items"
                    :key="line"
                  >
                    <mat-icon
                      icon="check_circle"
                      size="small"
                      aria-hidden="true"
                    />
                    {{ line }}
                  </li>
                </ul>

                <div class="requirement-card__tags">
                  <span
                    v-for="tag in item.tags"
                    :key="tag"
                  >
                    {{ tag }}
                  </span>
                </div>
              </mat-card-content>
            </mat-card>

            <mat-card
              variant="filled"
              rounded="large"
              class="connection-card"
            >
              <mat-card-content>
                <p class="connection-card__eyebrow">
                  Connection
                </p>
                <mat-text
                  as="h3"
                  type="title"
                  size="large"
                  class="connection-card__title"
                >
                  三种连接方式
                </mat-text>

                <div class="connection-row">
                  <span class="connection-row__icon"><mat-icon
                    icon="usb"
                    size="18px"
                    aria-hidden="true"
                  /></span>
                  <span><strong>USB 调试</strong><small>首次连接最直接</small></span>
                </div>
                <div class="connection-row">
                  <span class="connection-row__icon"><mat-icon
                    icon="wifi"
                    size="18px"
                    aria-hidden="true"
                  /></span>
                  <span><strong>无线调试</strong><small>配对码或 mDNS 发现</small></span>
                </div>
                <div class="connection-row">
                  <span class="connection-row__icon"><mat-icon
                    icon="shield"
                    size="18px"
                    aria-hidden="true"
                  /></span>
                  <span><strong>Shizuku</strong><small>画面与输入法能力</small></span>
                </div>

                <mat-divider class="connection-card__divider" />
                <p class="connection-card__note">
                  {{ item.note }}
                </p>
              </mat-card-content>
            </mat-card>
          </div>
        </mat-tab-content>
      </mat-tabs>
    </mat-container>
  </section>
</template>

<style scoped>
.requirements {
  padding-block: clamp(48px, 7vw, 84px) clamp(64px, 9vw, 112px);
}

.section-heading {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 0.9fr);
  gap: 24px 48px;
  align-items: end;
  margin-block-end: 28px;
}

.section-kicker {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin: 0 0 14px;
  color: var(--mat-sys-color-primary);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.section-kicker span {
  inline-size: 22px;
  block-size: 2px;
  background: currentColor;
  border-radius: 99px;
}

.section-title {
  display: block;
  margin: 0;
  font-family: var(--promo-font-display);
  font-size: clamp(1.9rem, 4vw, 3rem);
  font-weight: 740;
  line-height: 1.12;
  letter-spacing: -0.035em;
}

.section-lead {
  display: block;
  max-inline-size: 42ch;
  justify-self: end;
  color: var(--mat-sys-color-on-surface-variant);
  line-height: 1.75;
}

.requirements-tabs {
  padding: 4px;
  background: var(--mat-sys-color-surface-container-low);
  border: 1px solid var(--mat-sys-color-outline-variant);
  border-radius: var(--mat-sys-shape-corner-large);
}

.requirement-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.45fr) minmax(0, 0.85fr);
  gap: 16px;
  padding: 20px;
}

.requirement-card__head {
  display: flex;
  align-items: center;
  gap: 16px;
}

.requirement-card__shape {
  flex: none;
}

.requirement-card__shape--primary {
  color: var(--mat-sys-color-on-primary-container);
}

.requirement-card__shape--tertiary {
  color: var(--mat-sys-color-on-tertiary-container);
}

.requirement-card__title {
  min-inline-size: 0;
}

.requirement-card__tag {
  display: inline-block;
  margin-block-end: 5px;
  padding: 3px 8px;
  color: var(--mat-sys-color-on-secondary-container);
  background: var(--mat-sys-color-secondary-container);
  border-radius: 999px;
  font-size: 9.5px;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.requirement-card__version {
  display: block;
  margin-block-start: 2px;
  color: var(--mat-sys-color-on-surface-variant);
}

.requirement-card__divider {
  margin-block: 20px 16px;
}

.requirement-card__list {
  display: grid;
  gap: 11px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.requirement-card__list li {
  display: flex;
  align-items: flex-start;
  gap: 9px;
  color: var(--mat-sys-color-on-surface-variant);
  font-size: 13.5px;
  line-height: 1.55;
}

.requirement-card__list .mat-icon {
  flex: none;
  margin-block-start: 1px;
  color: var(--mat-sys-color-primary);
}

.requirement-card__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-block-start: 20px;
}

.requirement-card__tags span {
  padding: 5px 10px;
  color: var(--mat-sys-color-on-surface-variant);
  background: var(--mat-sys-color-surface-container-high);
  border: 1px solid var(--mat-sys-color-outline-variant);
  border-radius: 999px;
  font-family: ui-monospace, 'Cascadia Code', Consolas, monospace;
  font-size: 10px;
  font-weight: 600;
}

.connection-card {
  align-self: start;
}

.connection-card__eyebrow {
  margin: 0 0 4px;
  color: var(--mat-sys-color-primary);
  font-size: 9.5px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.connection-card__title {
  display: block;
  margin-block-end: 18px;
  font-size: 1.25rem;
  font-weight: 680;
}

.connection-row {
  display: flex;
  align-items: center;
  gap: 10px;
  padding-block: 8px;
}

.connection-row__icon {
  display: grid;
  place-items: center;
  flex: none;
  inline-size: 34px;
  block-size: 34px;
  color: var(--mat-sys-color-on-secondary-container);
  background: var(--mat-sys-color-secondary-container);
  border-radius: 11px;
}

.connection-row span:last-child {
  display: flex;
  flex-direction: column;
  line-height: 1.3;
}

.connection-row strong {
  font-size: 12px;
}

.connection-row small {
  color: var(--mat-sys-color-on-surface-variant);
  font-size: 10px;
}

.connection-card__divider {
  margin-block: 14px;
}

.connection-card__note {
  margin: 0;
  color: var(--mat-sys-color-on-surface-variant);
  font-size: 11.5px;
  line-height: 1.65;
}

@media (max-width: 900px) {
  .section-heading {
    grid-template-columns: minmax(0, 1fr);
    align-items: start;
  }

  .section-lead {
    justify-self: start;
  }

  .requirement-grid {
    grid-template-columns: minmax(0, 1fr);
  }
}

@media (max-width: 620px) {
  .requirement-grid {
    padding: 12px;
  }

  .requirements-tabs {
    padding: 2px;
  }

  .requirement-card__head {
    align-items: flex-start;
  }
}
</style>
