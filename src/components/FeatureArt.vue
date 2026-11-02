<script setup>
import PhoneMock from './mockups/PhoneMock.vue';

defineProps({
  type: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div :class="['feature-art', `feature-art--${type}`]">
    <template v-if="type === 'mirror'">
      <div class="mirror-phone">
        <PhoneMock :tilt="-7" />
      </div>
      <div class="mirror-window">
        <span class="mirror-window__title">
          <mat-icon icon="smartphone" size="11px" />
          Phone · live
        </span>
        <span class="mirror-window__screen" />
      </div>
      <span class="mirror-live">LIVE</span>
    </template>

    <template v-else-if="type === 'split'">
      <div class="split-phone">
        <PhoneMock :tilt="5" />
      </div>
      <span class="split-beam" />
      <div class="split-window split-window--one">
        <span class="split-window__bar"><span class="split-window__bar-line" /></span>
        <span class="split-window__body" />
      </div>
      <div class="split-window split-window--two">
        <span class="split-window__bar"><span class="split-window__bar-line" /></span>
        <span class="split-window__body split-window__body--list"><i /><i /><i /></span>
      </div>
      <div class="split-window split-window--three">
        <span class="split-window__bar"><span class="split-window__bar-line" /></span>
        <span class="split-window__body split-window__body--map" />
      </div>
    </template>

    <template v-else-if="type === 'wireless'">
      <span class="wireless-ring wireless-ring--one" />
      <span class="wireless-ring wireless-ring--two" />
      <span class="wireless-ring wireless-ring--three" />
      <span class="wireless-phone"><mat-icon icon="smartphone" size="26px" /></span>
      <span class="wireless-pair">PAIR · 486 213</span>
    </template>

    <template v-else-if="type === 'camera'">
      <span class="camera-wave camera-wave--one" />
      <span class="camera-wave camera-wave--two" />
      <span class="camera-wave camera-wave--three" />
      <span class="camera-lens"><i /></span>
      <span class="camera-label">CAM → PC</span>
    </template>

    <template v-else-if="type === 'manage'">
      <div class="manage-row manage-row--active">
        <span class="manage-row__icon"><mat-icon icon="smartphone" size="17px" /></span>
        <span class="manage-row__lines"><i /><i /></span>
        <span class="manage-row__dot" />
      </div>
      <div class="manage-row">
        <span class="manage-row__icon manage-row__icon--alt"><mat-icon icon="tablet_android" size="17px" /></span>
        <span class="manage-row__lines"><i /><i /></span>
      </div>
      <div class="manage-row manage-row--ghost">
        <span class="manage-row__icon"><mat-icon icon="laptop_windows" size="17px" /></span>
        <span class="manage-row__lines"><i /><i /></span>
      </div>
    </template>

    <template v-else-if="type === 'transfer'">
      <span class="transfer-file">APK</span>
      <span class="transfer-track"><i /></span>
      <span class="transfer-phone"><mat-icon icon="smartphone" size="22px" /></span>
      <span class="transfer-label">拖放传输</span>
    </template>
  </div>
</template>

<style scoped>
.feature-art {
  position: relative;
  block-size: 154px;
  overflow: hidden;
  background:
    radial-gradient(circle at 82% 18%, color-mix(in srgb, var(--mat-sys-color-primary) 20%, transparent), transparent 46%),
    radial-gradient(circle at 12% 84%, color-mix(in srgb, var(--mat-sys-color-tertiary) 16%, transparent), transparent 48%),
    var(--mat-sys-color-surface-container-low);
  border-block-end: 1px solid var(--mat-sys-color-outline-variant);
}

.feature-art::before {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(color-mix(in srgb, var(--mat-sys-color-outline) 28%, transparent) 0.8px, transparent 0.8px);
  background-size: 14px 14px;
  content: '';
  opacity: 0.5;
}

.feature-art--wireless,
.feature-art--camera {
  display: grid;
  place-items: center;
}

.feature-art--manage {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
}

.feature-art--transfer {
  display: flex;
  align-items: center;
  justify-content: center;
}

/* 整屏镜像 */
.mirror-phone {
  position: absolute;
  z-index: 1;
  inset-block-start: 12px;
  inset-inline-start: 18%;
  inline-size: 62px;
}

.mirror-window {
  position: absolute;
  inset-block-start: 30px;
  inset-inline-end: 12%;
  inline-size: 190px;
  block-size: 108px;
  overflow: hidden;
  background: var(--mat-sys-color-surface);
  border: 1px solid var(--mat-sys-color-outline-variant);
  border-radius: 14px;
  box-shadow: 0 18px 38px rgb(8 20 12 / 16%);
  rotate: 2deg;
}

.mirror-window__title {
  display: flex;
  align-items: center;
  gap: 4px;
  block-size: 22px;
  padding-inline: 9px;
  color: var(--mat-sys-color-on-surface-variant);
  background: var(--mat-sys-color-surface-container-high);
  border-block-end: 1px solid var(--mat-sys-color-outline-variant);
  font-size: 8.5px;
  font-weight: 650;
}

.mirror-window__screen {
  position: absolute;
  inset-block-end: 10px;
  inset-inline: 10px;
  block-size: 52px;
  background:
    radial-gradient(circle at 26% 45%, var(--mat-sys-color-primary-container) 0 18px, transparent 19px),
    linear-gradient(110deg, var(--mat-sys-color-surface-container-high), var(--mat-sys-color-surface-container));
  border-radius: 8px;
}

.mirror-live {
  position: absolute;
  z-index: 2;
  inset-block-end: 12px;
  inset-inline-start: 10px;
  padding: 3px 7px;
  color: var(--mat-sys-color-on-primary);
  background: var(--mat-sys-color-primary);
  border-radius: 999px;
  font-size: 8px;
  font-weight: 800;
  letter-spacing: 0.08em;
}

/* 按应用拆窗 */
.split-phone {
  position: absolute;
  z-index: 1;
  inset-block-start: 20px;
  inset-inline-start: 16%;
  inline-size: 54px;
}

.split-beam {
  position: absolute;
  inset-block-start: 58%;
  inset-inline-start: 31%;
  inline-size: 58px;
  border-block-start: 1.5px dashed color-mix(in srgb, var(--mat-sys-color-primary) 55%, transparent);
}

.split-window {
  position: absolute;
  inline-size: 116px;
  block-size: 64px;
  overflow: hidden;
  background: var(--mat-sys-color-surface);
  border: 1px solid var(--mat-sys-color-outline-variant);
  border-radius: 11px;
  box-shadow: 0 12px 26px rgb(8 20 12 / 14%);
}

.split-window--one {
  inset-block-start: 16px;
  inset-inline-end: 12%;
}

.split-window--two {
  inset-block-start: 66px;
  inset-inline-end: 5%;
}

.split-window--three {
  inset-block-start: 112px;
  inset-inline-end: 16%;
}

.split-window__bar {
  display: flex;
  align-items: center;
  padding: 5px 7px;
  background: var(--mat-sys-color-surface-container-high);
  border-block-end: 1px solid var(--mat-sys-color-outline-variant);
}

.split-window__bar-line {
  display: block;
  inline-size: 28px;
  block-size: 3px;
  background: color-mix(in srgb, var(--mat-sys-color-on-surface-variant) 22%, transparent);
  border-radius: 999px;
}

.split-window__body {
  display: block;
  block-size: 32px;
  margin: 6px 7px;
  background: var(--mat-sys-color-primary-container);
  border-radius: 6px;
  opacity: 0.8;
}

.split-window__body--list {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 6px;
  background: var(--mat-sys-color-surface-container-low);
}

.split-window__body--list i {
  block-size: 3px;
  background: var(--mat-sys-color-outline-variant);
  border-radius: 99px;
}

.split-window__body--list i:nth-child(2) {
  inline-size: 68%;
}

.split-window__body--list i:nth-child(3) {
  inline-size: 84%;
}

.split-window__body--map {
  background:
    linear-gradient(120deg, transparent 46%, var(--mat-sys-color-outline-variant) 47% 48%, transparent 49%),
    var(--mat-sys-color-secondary-container);
}

/* 无线配对 */
.wireless-ring {
  position: absolute;
  inset-block-start: 50%;
  inset-inline-start: 50%;
  border: 1.5px solid color-mix(in srgb, var(--mat-sys-color-primary) 34%, transparent);
  border-radius: 50%;
  translate: -50% -50%;
}

.wireless-ring--one {
  inline-size: 84px;
  block-size: 84px;
}

.wireless-ring--two {
  inline-size: 138px;
  block-size: 138px;
  opacity: 0.68;
}

.wireless-ring--three {
  inline-size: 194px;
  block-size: 194px;
  opacity: 0.38;
}

.wireless-phone {
  display: grid;
  place-items: center;
  inline-size: 54px;
  block-size: 54px;
  color: var(--mat-sys-color-on-primary);
  background: var(--mat-sys-color-primary);
  border-radius: 50%;
  box-shadow: 0 12px 30px rgb(8 40 22 / 26%);
}

.wireless-pair {
  position: absolute;
  inset-block-end: 14px;
  padding: 4px 9px;
  color: var(--mat-sys-color-on-secondary-container);
  background: var(--mat-sys-color-secondary-container);
  border-radius: 999px;
  font-family: ui-monospace, 'Cascadia Code', Consolas, monospace;
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 0.08em;
}

/* 虚拟摄像头 */
.camera-lens {
  position: relative;
  display: grid;
  place-items: center;
  inline-size: 78px;
  block-size: 78px;
  background: radial-gradient(circle at 36% 30%, #a9ffcb, #1f9d5b 46%, #0d2c1b 72%);
  border: 5px solid var(--mat-sys-color-surface-container-high);
  border-radius: 50%;
  box-shadow: 0 16px 34px rgb(8 20 12 / 22%);
}

.camera-lens i {
  inline-size: 26px;
  block-size: 26px;
  background: rgb(5 16 10 / 72%);
  border: 2px solid rgb(255 255 255 / 24%);
  border-radius: 50%;
}

.camera-wave {
  position: absolute;
  inset-block-start: 50%;
  inset-inline-start: 50%;
  border: 1.5px solid color-mix(in srgb, var(--mat-sys-color-primary) 28%, transparent);
  border-radius: 50%;
  translate: -50% -50%;
}

.camera-wave--one {
  inline-size: 112px;
  block-size: 112px;
}

.camera-wave--two {
  inline-size: 154px;
  block-size: 154px;
  opacity: 0.58;
}

.camera-wave--three {
  inline-size: 196px;
  block-size: 196px;
  opacity: 0.3;
}

.camera-label {
  position: absolute;
  inset-block-end: 14px;
  color: var(--mat-sys-color-primary);
  font-family: ui-monospace, 'Cascadia Code', Consolas, monospace;
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 0.12em;
}

/* 设备管理 */
.manage-row {
  display: flex;
  align-items: center;
  gap: 9px;
  inline-size: min(76%, 260px);
  padding: 6px 10px;
  background: var(--mat-sys-color-surface);
  border: 1px solid var(--mat-sys-color-outline-variant);
  border-radius: 13px;
  box-shadow: 0 10px 24px rgb(8 20 12 / 8%);
}

.manage-row--active {
  border-color: color-mix(in srgb, var(--mat-sys-color-primary) 48%, transparent);
}

.manage-row--ghost {
  opacity: 0.55;
}

.manage-row__icon {
  display: grid;
  place-items: center;
  flex: none;
  inline-size: 28px;
  block-size: 28px;
  color: var(--mat-sys-color-on-primary-container);
  background: var(--mat-sys-color-primary-container);
  border-radius: 9px;
}

.manage-row__icon--alt {
  color: var(--mat-sys-color-on-tertiary-container);
  background: var(--mat-sys-color-tertiary-container);
}

.manage-row__lines {
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 4px;
}

.manage-row__lines i {
  block-size: 4px;
  background: var(--mat-sys-color-outline-variant);
  border-radius: 99px;
}

.manage-row__lines i:first-child {
  inline-size: 54%;
  background: var(--mat-sys-color-on-surface-variant);
  opacity: 0.55;
}

.manage-row__lines i:last-child {
  inline-size: 74%;
}

.manage-row__dot {
  inline-size: 7px;
  block-size: 7px;
  background: var(--mat-sys-color-primary);
  border-radius: 50%;
  box-shadow: 0 0 0 4px color-mix(in srgb, var(--mat-sys-color-primary) 16%, transparent);
}

/* 文件传输 */
.transfer-file {
  display: grid;
  place-items: center;
  inline-size: 58px;
  block-size: 70px;
  color: var(--mat-sys-color-on-tertiary-container);
  background: var(--mat-sys-color-tertiary-container);
  border-radius: 8px 16px 8px 8px;
  font-family: ui-monospace, 'Cascadia Code', Consolas, monospace;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.05em;
  rotate: -5deg;
}

.transfer-track {
  position: relative;
  inline-size: 78px;
  margin-inline: 10px;
  border-block-start: 1.5px dashed color-mix(in srgb, var(--mat-sys-color-primary) 52%, transparent);
}

.transfer-track i {
  position: absolute;
  inset-block-start: -4px;
  inset-inline-start: 42%;
  inline-size: 7px;
  block-size: 7px;
  background: var(--mat-sys-color-primary);
  border-radius: 50%;
  animation: transfer-dot 2.4s ease-in-out infinite;
}

@keyframes transfer-dot {
  0%,
  100% {
    inset-inline-start: 12%;
  }

  50% {
    inset-inline-start: 78%;
  }
}

.transfer-phone {
  display: grid;
  place-items: center;
  inline-size: 48px;
  block-size: 82px;
  color: var(--mat-sys-color-on-primary-container);
  background: var(--mat-sys-color-primary-container);
  border: 3px solid var(--mat-sys-color-surface);
  border-radius: 14px;
  box-shadow: 0 12px 28px rgb(8 20 12 / 16%);
  rotate: 4deg;
}

.transfer-label {
  position: absolute;
  inset-block-end: 14px;
  color: var(--mat-sys-color-on-surface-variant);
  font-size: 9px;
  font-weight: 600;
}

@media (prefers-reduced-motion: reduce) {
  .transfer-track i {
    animation: none;
  }
}
</style>
