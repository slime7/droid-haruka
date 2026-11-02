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
      'Windows 11 22H2 起支持虚拟摄像头',
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
    version: 'Android 11 及以上 · minSdk 30',
    items: [
      '基础配对与设备管理可使用 ADB',
      '画面采集与输入法接管需要 Shizuku',
    ],
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
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 11px 24px;
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

  .requirement-card__list {
    grid-template-columns: minmax(0, 1fr);
  }
}
</style>
