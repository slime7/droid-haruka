<script setup>
import { computed, ref } from 'vue';

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
    versions: [
      {
        label: 'Windows 10 x64',
        description: '主窗口、设备管理、整屏镜像、独立虚拟屏，以及开机启动、系统托盘和自动更新。',
      },
      {
        label: 'Windows 11 22H2+',
        description: '新增系统虚拟摄像头；设备相机来源需要 Android 12 及以上。',
      },
    ],
  },
  {
    value: 'linux',
    label: 'Linux',
    icon: 'computer',
    shape: 'gem',
    tone: 'secondary',
    tag: 'x64',
    title: 'Linux 桌面端',
    version: 'Linux x64',
    versions: [
      {
        label: 'Linux x64',
        description: '整屏镜像、独立虚拟屏、设备管理、应用列表与自动更新。',
      },
      {
        label: '功能差异',
        description: '不包含系统虚拟摄像头与开机启动。',
      },
    ],
  },
  {
    value: 'android',
    label: 'Android',
    icon: 'smartphone',
    shape: 'puffy',
    tone: 'tertiary',
    tag: 'minSdk 30',
    title: 'Android 设备端',
    version: 'Android 11 及以上',
    versions: [
      {
        label: 'Android 11 · API 30',
        description: '整屏镜像、独立虚拟屏、无线调试与配对、应用列表、剪贴板、投屏输入法、通知转发与文件传输。',
      },
      {
        label: 'Android 12 · API 31',
        description: '新增摄像头采集，可为虚拟摄像头提供画面。',
      },
      {
        label: 'Android 13 · API 33',
        description: '新增按应用音频隔离。',
      },
      {
        label: 'Android 16 · API 36',
        description: '新增桌面相机，虚拟屏应用可读取电脑桌面画面。',
      },
    ],
  },
];

const visiblePlatforms = computed(() => platforms.filter((item) => item.value === platform.value));
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
          桌面端支持 64 位 Windows 与 Linux；设备端最低为 Android 11，部分功能需要更高版本。
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
          v-for="item in visiblePlatforms"
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

                <dl class="requirement-versions">
                  <div
                    v-for="versionItem in item.versions"
                    :key="versionItem.label"
                  >
                    <dt>{{ versionItem.label }}</dt>
                    <dd>{{ versionItem.description }}</dd>
                  </div>
                </dl>
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

.requirement-card__shape--secondary {
  color: var(--mat-sys-color-on-secondary-container);
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

.requirement-versions {
  display: grid;
  gap: 0;
  margin: 0;
}

.requirement-versions > div {
  display: grid;
  grid-template-columns: minmax(128px, 0.32fr) minmax(0, 1fr);
  gap: 18px;
  padding-block: 12px;
  border-block-start: 1px solid var(--mat-sys-color-outline-variant);
}

.requirement-versions > div:first-child {
  padding-block-start: 0;
  border-block-start: 0;
}

.requirement-versions > div:last-child {
  padding-block-end: 0;
}

.requirement-versions dt {
  color: var(--mat-sys-color-on-surface);
  font-size: 12.5px;
  font-weight: 680;
  line-height: 1.6;
}

.requirement-versions dd {
  margin: 0;
  color: var(--mat-sys-color-on-surface-variant);
  font-size: 13px;
  line-height: 1.7;
}

@media (max-width: 900px) {
  .section-heading {
    grid-template-columns: minmax(0, 1fr);
    align-items: start;
  }

  .section-lead {
    justify-self: start;
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

  .requirement-versions > div {
    grid-template-columns: minmax(0, 1fr);
    gap: 4px;
  }
}
</style>
