<script setup>
import FeatureArt from './FeatureArt.vue';

const features = [
  {
    id: 'mirror',
    art: 'mirror',
    shape: 'sunny',
    tone: 'primary',
    icon: 'screen_share',
    tag: '整屏镜像',
    title: '像本地窗口一样操作',
    description: '画面、鼠标、键盘与音频同步工作。无边框窗口、横竖屏切换、窗口缩放和画面圆角都可以按习惯调整。',
    layout: 'wide',
  },
  {
    id: 'split',
    art: 'split',
    shape: '4-leaf-clover',
    tone: 'tertiary',
    icon: 'picture_in_picture_alt',
    tag: '应用虚拟屏',
    title: '按应用拆成独立窗口',
    description: '在设备上创建虚拟显示器，每个应用拥有自己的桌面窗口与分辨率。',
    layout: 'default',
  },
  {
    id: 'camera',
    art: 'camera',
    shape: 'very-sunny',
    tone: 'primary',
    icon: 'videocam',
    tag: 'Windows 11 22H2',
    title: '手机摄像头，变成系统摄像头',
    description: '把设备相机提供给会议、直播与扫码应用，无需额外采集卡。',
    layout: 'default',
  },
  {
    id: 'scan',
    art: 'scan',
    shape: 'puffy',
    tone: 'secondary',
    icon: 'qr_code_scanner',
    tag: '不拿起手机扫码',
    title: '扫码时，手机留在支架上',
    description: '电脑应用直接调用手机相机，二维码与条码都能在桌面完成。',
    layout: 'default',
  },
  {
    id: 'notifications',
    art: 'notifications',
    shape: 'gem',
    tone: 'tertiary',
    icon: 'notifications_active',
    tag: '应用通知',
    title: '通知在桌面即时出现',
    description: 'Android 应用通知同步到 Windows，不必反复点亮手机查看。',
    layout: 'default',
  },
  {
    id: 'input',
    art: 'input',
    shape: '6-sided-cookie',
    tone: 'primary',
    icon: 'keyboard',
    tag: '输入转发',
    title: '电脑键盘直接输入',
    description: '键盘、快捷键与中文输入法转发到镜像窗口，输入保持连贯。',
    layout: 'default',
  },
  {
    id: 'manage',
    art: 'manage',
    shape: 'gem',
    tone: 'secondary',
    icon: 'devices',
    tag: '设备管理',
    title: '设备与应用集中管理',
    description: '保存设备、查看电量和连接方式，再按应用一键启动镜像或虚拟屏。',
    layout: 'default',
  },
  {
    id: 'transfer',
    art: 'transfer',
    shape: '6-sided-cookie',
    tone: 'tertiary',
    icon: 'sync_alt',
    tag: '文件与剪贴板',
    title: '文件与剪贴板一起流动',
    description: '拖放文件、双向剪贴板，让电脑和手机保持同一工作节奏。',
    layout: 'default',
  },
];

function reveal(isIntersecting, entries) {
  if (isIntersecting) {
    entries[0]?.target.classList.add('is-visible');
  }
}
</script>

<template>
  <section
    id="features"
    class="features"
    aria-labelledby="features-title"
  >
    <mat-container>
      <div class="section-heading">
        <p class="section-kicker">
          <span aria-hidden="true" />桌面级 Android 工作流
        </p>
        <mat-text
          id="features-title"
          as="h2"
          type="display"
          size="medium"
          emphasized
          class="section-title"
        >
          一块手机屏幕，<br>展开成多个工作窗口
        </mat-text>
        <mat-text
          as="p"
          type="body"
          size="large"
          class="section-lead"
        >
          从整屏镜像到应用独立成窗，通知、输入与文件也一并接入桌面。
        </mat-text>
      </div>

      <div
        v-intersection.once="reveal"
        class="feature-grid"
      >
        <mat-card
          v-for="(feature, index) in features"
          :key="feature.id"
          as="article"
          variant="outlined"
          rounded="large"
          class="feature-card"
          :class="[
            `feature-card--${feature.layout}`,
            `feature-card--${feature.id}`,
          ]"
        >
          <template #media>
            <FeatureArt
              :type="feature.art"
              aria-hidden="true"
            />
          </template>

          <mat-card-content class="feature-card__content">
            <div class="feature-card__meta">
              <mat-shape
                class="feature-card__shape"
                :class="`feature-card__shape--${feature.tone}`"
                :name="feature.shape"
                :size="46"
                :color="`${feature.tone}-container`"
              >
                <mat-icon
                  :icon="feature.icon"
                  size="small"
                  aria-hidden="true"
                />
              </mat-shape>
              <span class="feature-card__tag">{{ feature.tag }}</span>
              <span class="feature-card__number">0{{ index + 1 }}</span>
            </div>

            <mat-text
              as="h3"
              type="title"
              size="large"
              class="feature-card__title"
            >
              {{ feature.title }}
            </mat-text>
            <mat-text
              as="p"
              type="body"
              size="medium"
              class="feature-card__desc"
            >
              {{ feature.description }}
            </mat-text>
          </mat-card-content>
        </mat-card>
      </div>
    </mat-container>
  </section>
</template>

<style scoped>
.features {
  padding-block: clamp(64px, 9vw, 112px);
}

.section-heading {
  margin-block-end: clamp(28px, 4vw, 44px);
}

.section-kicker {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin: 0 0 16px;
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
  color: var(--mat-sys-color-on-surface);
  font-family: var(--promo-font-display);
  font-size: clamp(2rem, 4.2vw, 3.2rem);
  font-weight: 740;
  line-height: 1.12;
  letter-spacing: -0.035em;
}

.section-lead {
  display: block;
  max-inline-size: 58ch;
  margin-block-start: 16px;
  color: var(--mat-sys-color-on-surface-variant);
  line-height: 1.75;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
  opacity: 0;
  transform: translateY(22px);
  transition:
    opacity 620ms var(--mat-sys-motion-easing-emphasized-decelerate, ease),
    transform 620ms var(--mat-sys-motion-easing-emphasized-decelerate, ease);
}

.feature-grid.is-visible {
  opacity: 1;
  transform: none;
}

.feature-card {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-color: color-mix(in srgb, var(--mat-sys-color-outline-variant) 82%, transparent);
  transition: border-color 240ms ease;
}

.feature-grid.is-visible .feature-card {
  opacity: 0;
  transform: translateY(18px);
  animation: card-in 560ms var(--mat-sys-motion-easing-emphasized-decelerate, ease) forwards;
}

.feature-grid.is-visible .feature-card:nth-child(1) {
  animation-delay: 40ms;
}

.feature-grid.is-visible .feature-card:nth-child(2) {
  animation-delay: 110ms;
}

.feature-grid.is-visible .feature-card:nth-child(3) {
  animation-delay: 180ms;
}

.feature-grid.is-visible .feature-card:nth-child(4) {
  animation-delay: 250ms;
}

.feature-grid.is-visible .feature-card:nth-child(5) {
  animation-delay: 320ms;
}

.feature-grid.is-visible .feature-card:nth-child(6) {
  animation-delay: 390ms;
}

.feature-grid.is-visible .feature-card:nth-child(7) {
  animation-delay: 460ms;
}

.feature-grid.is-visible .feature-card:nth-child(8) {
  animation-delay: 530ms;
}

@keyframes card-in {
  to {
    opacity: 1;
    transform: none;
  }
}

.feature-card:hover {
  border-color: color-mix(in srgb, var(--mat-sys-color-primary) 36%, transparent);
}

.feature-card--wide {
  grid-column: span 2;
}

.feature-card__content {
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 20px 22px 22px;
}

.feature-card--wide .feature-card__content {
  padding: 22px 24px 24px;
}

.feature-card__meta {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-block-end: 16px;
}

.feature-card__shape {
  flex: none;
}

.feature-card__shape--primary {
  color: var(--mat-sys-color-on-primary-container);
}

.feature-card__shape--secondary {
  color: var(--mat-sys-color-on-secondary-container);
}

.feature-card__shape--tertiary {
  color: var(--mat-sys-color-on-tertiary-container);
}

.feature-card__tag {
  color: var(--mat-sys-color-on-surface-variant);
  font-size: 11px;
  font-weight: 650;
  letter-spacing: 0.04em;
  white-space: nowrap;
}

.feature-card__number {
  margin-inline-start: auto;
  color: color-mix(in srgb, var(--mat-sys-color-on-surface-variant) 46%, transparent);
  font-family: var(--promo-font-display);
  font-size: 13px;
  font-variant-numeric: tabular-nums;
  font-weight: 700;
}

.feature-card__title {
  display: block;
  color: var(--mat-sys-color-on-surface);
  font-size: clamp(1.08rem, 1.5vw, 1.3rem);
  font-weight: 670;
  line-height: 1.3;
  letter-spacing: -0.015em;
}

.feature-card__desc {
  display: block;
  margin-block-start: 10px;
  color: var(--mat-sys-color-on-surface-variant);
  line-height: 1.7;
}

@media (max-width: 980px) {
  .feature-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .feature-card--wide,
  .feature-card:last-child {
    grid-column: 1 / -1;
  }
}

@media (max-width: 640px) {
  .feature-grid {
    grid-template-columns: minmax(0, 1fr);
  }

  .feature-card--wide,
  .feature-card:last-child {
    grid-column: auto;
  }
}

@media (prefers-reduced-motion: reduce) {
  .feature-grid,
  .feature-grid.is-visible .feature-card {
    opacity: 1;
    transform: none;
    animation: none;
    transition: none;
  }

  .feature-card:hover {
    translate: 0;
  }
}
</style>
