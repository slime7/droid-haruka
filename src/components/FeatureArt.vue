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

    <template v-else-if="type === 'camera'">
      <span class="camera-halo" />
      <div class="camera-phone">
        <span class="camera-phone__screen" />
        <span class="camera-phone__module">
          <i class="camera-phone__lens camera-phone__lens--main" />
          <i class="camera-phone__lens camera-phone__lens--wide" />
          <i class="camera-phone__flash" />
        </span>
      </div>
      <div class="camera-preview">
        <span class="camera-preview__scene" />
        <span class="camera-preview__corners" />
        <span class="camera-preview__badge"><i />CAM → PC</span>
      </div>
    </template>

    <template v-else-if="type === 'scan'">
      <span class="scan-halo" />
      <div class="scan-phone">
        <span class="scan-phone__lens" />
        <mat-icon icon="qr_code_scanner" size="22px" />
      </div>
      <span class="scan-beam" />
      <div class="scan-card">
        <mat-icon icon="qr_code_2" size="58px" />
        <span class="scan-card__line" />
      </div>
      <span class="scan-label">SCAN → PC</span>
    </template>

    <template v-else-if="type === 'notifications'">
      <div class="notify-phone">
        <mat-icon icon="smartphone" size="30px" />
      </div>
      <span class="notify-bell"><mat-icon icon="notifications" size="15px" /></span>
      <div class="notify-stack">
        <span class="notify-card">
          <span class="notify-card__icon"><mat-icon icon="chat_bubble" size="12px" /></span>
          <span class="notify-card__lines"><i /><i /></span>
        </span>
        <span class="notify-card notify-card--alt">
          <span class="notify-card__icon"><mat-icon icon="mail" size="12px" /></span>
          <span class="notify-card__lines"><i /><i /></span>
        </span>
        <span class="notify-card notify-card--ghost">
          <span class="notify-card__icon"><mat-icon icon="event" size="12px" /></span>
          <span class="notify-card__lines"><i /><i /></span>
        </span>
      </div>
      <span class="notify-label">通知转发</span>
    </template>

    <template v-else-if="type === 'input'">
      <div class="input-keyboard">
        <span class="input-keyboard__row"><i /><i /><i /><i /></span>
        <span class="input-keyboard__row"><i /><i /><i /><i /><i /></span>
        <span class="input-keyboard__row"><i /><i /><i /><i /></span>
      </div>
      <span class="input-arrow"><mat-icon icon="arrow_forward" size="18px" /></span>
      <div class="input-phone">
        <span class="input-phone__screen">
          <mat-icon icon="keyboard" size="19px" />
          <span class="input-phone__line" />
        </span>
      </div>
      <span class="input-label">键盘 · 输入法</span>
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
  <span class="transfer-label">文件 · 剪贴板</span>
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

.feature-art--camera,
.feature-art--scan,
.feature-art--notifications,
.feature-art--input {
  display: flex;
  align-items: center;
  justify-content: center;
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

/* 虚拟摄像头 */
.camera-halo {
  position: absolute;
  inset-block-start: 50%;
  inset-inline-start: 14%;
  inline-size: 190px;
  block-size: 190px;
  background: radial-gradient(circle, color-mix(in srgb, var(--mat-sys-color-primary) 24%, transparent), transparent 66%);
  border-radius: 50%;
  translate: -50% -50%;
}

.camera-phone {
  position: absolute;
  z-index: 2;
  inset-block-start: 18px;
  inset-inline-start: 13%;
  inline-size: 66px;
  block-size: 118px;
  overflow: hidden;
  background: #0c1711;
  border: 1px solid rgb(255 255 255 / 16%);
  border-radius: 17px;
  box-shadow: 0 16px 30px rgb(8 20 12 / 28%);
  rotate: -8deg;
}

.camera-phone__screen {
  position: absolute;
  inset: 6px;
  background:
    radial-gradient(circle at 70% 20%, rgb(61 220 132 / 36%), transparent 42%),
    linear-gradient(160deg, #173222, #0a1810);
  border-radius: 12px;
}

.camera-phone__module {
  position: absolute;
  z-index: 1;
  inset-block-start: 13px;
  inset-inline-start: 11px;
  display: grid;
  grid-template-columns: 22px 12px;
  grid-template-rows: 22px 12px;
  gap: 4px;
  padding: 6px;
  background: #17241c;
  border: 1px solid rgb(255 255 255 / 10%);
  border-radius: 11px;
  box-shadow: 0 6px 14px rgb(0 0 0 / 30%);
}

.camera-phone__lens {
  display: block;
  background: radial-gradient(circle at 36% 30%, #d6ffe5 0 7%, #51d98c 18%, #0d3b22 55%, #06110b 78%);
  border: 1px solid rgb(255 255 255 / 24%);
  border-radius: 50%;
  box-shadow: inset 0 0 0 2px rgb(0 0 0 / 24%);
}

.camera-phone__lens--main {
  inline-size: 22px;
  block-size: 22px;
}

.camera-phone__lens--wide {
  grid-column: 1;
  grid-row: 2;
  inline-size: 12px;
  block-size: 12px;
}

.camera-phone__flash {
  grid-column: 2;
  grid-row: 2;
  align-self: center;
  justify-self: center;
  inline-size: 6px;
  block-size: 6px;
  background: #f5e8a4;
  border-radius: 50%;
  box-shadow: 0 0 8px rgb(245 232 164 / 80%);
}

.camera-preview {
  position: absolute;
  z-index: 3;
  inset-block-start: 34px;
  inset-inline-end: 8%;
  inline-size: 170px;
  block-size: 96px;
  overflow: hidden;
  background: var(--mat-sys-color-surface);
  border: 1px solid var(--mat-sys-color-outline-variant);
  border-radius: 13px;
  box-shadow: 0 16px 34px rgb(8 20 12 / 20%);
  rotate: 2deg;
}

.camera-preview__scene {
  position: absolute;
  inset: 8px;
  background:
    radial-gradient(circle at 62% 34%, color-mix(in srgb, var(--mat-sys-color-primary) 52%, transparent), transparent 28%),
    radial-gradient(circle at 28% 76%, color-mix(in srgb, var(--mat-sys-color-tertiary) 42%, transparent), transparent 38%),
    linear-gradient(150deg, color-mix(in srgb, var(--mat-sys-color-surface-container-high) 84%, var(--mat-sys-color-primary)), var(--mat-sys-color-surface-container-low));
  border-radius: 8px;
}

.camera-preview__corners {
  position: absolute;
  inset: 14px;
  background:
    linear-gradient(var(--mat-sys-color-primary), var(--mat-sys-color-primary)) left top / 12px 2px no-repeat,
    linear-gradient(var(--mat-sys-color-primary), var(--mat-sys-color-primary)) left top / 2px 12px no-repeat,
    linear-gradient(var(--mat-sys-color-primary), var(--mat-sys-color-primary)) right top / 12px 2px no-repeat,
    linear-gradient(var(--mat-sys-color-primary), var(--mat-sys-color-primary)) right top / 2px 12px no-repeat,
    linear-gradient(var(--mat-sys-color-primary), var(--mat-sys-color-primary)) left bottom / 12px 2px no-repeat,
    linear-gradient(var(--mat-sys-color-primary), var(--mat-sys-color-primary)) left bottom / 2px 12px no-repeat,
    linear-gradient(var(--mat-sys-color-primary), var(--mat-sys-color-primary)) right bottom / 12px 2px no-repeat,
    linear-gradient(var(--mat-sys-color-primary), var(--mat-sys-color-primary)) right bottom / 2px 12px no-repeat;
  opacity: 0.78;
}

.camera-preview__badge {
  position: absolute;
  inset-block-end: 13px;
  inset-inline-start: 13px;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 3px 6px;
  color: var(--mat-sys-color-on-surface);
  background: color-mix(in srgb, var(--mat-sys-color-surface) 84%, transparent);
  border-radius: 999px;
  font-family: ui-monospace, 'Cascadia Code', Consolas, monospace;
  font-size: 7.5px;
  font-weight: 700;
  letter-spacing: 0.08em;
}

.camera-preview__badge i {
  inline-size: 5px;
  block-size: 5px;
  background: var(--mat-sys-color-primary);
  border-radius: 50%;
}

/* 不拿起手机扫码 */
.scan-halo {
  position: absolute;
  inset-block-start: 50%;
  inset-inline-start: 50%;
  inline-size: 260px;
  block-size: 170px;
  background: radial-gradient(ellipse, color-mix(in srgb, var(--mat-sys-color-primary) 18%, transparent), transparent 68%);
  translate: -50% -50%;
}

.scan-phone {
  position: absolute;
  z-index: 2;
  inset-block-start: 24px;
  inset-inline-start: 17%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  inline-size: 58px;
  block-size: 100px;
  color: var(--mat-sys-color-on-primary-container);
  background: var(--mat-sys-color-primary-container);
  border: 3px solid var(--mat-sys-color-surface);
  border-radius: 16px;
  box-shadow: 0 14px 30px rgb(8 20 12 / 18%);
  rotate: -5deg;
}

.scan-phone__lens {
  position: absolute;
  inset-block-start: 8px;
  inline-size: 14px;
  block-size: 14px;
  background: radial-gradient(circle at 38% 32%, #d9ffe7, #2f9b61 45%, #0b2817);
  border: 1px solid rgb(255 255 255 / 20%);
  border-radius: 50%;
}

.scan-phone .mat-icon {
  margin-block-start: 12px;
}

.scan-beam {
  position: absolute;
  z-index: 1;
  inset-block-start: 53%;
  inset-inline-start: 38%;
  inline-size: 58px;
  border-block-start: 1.5px dashed color-mix(in srgb, var(--mat-sys-color-primary) 58%, transparent);
}

.scan-card {
  position: absolute;
  z-index: 3;
  inset-block-start: 24px;
  inset-inline-end: 12%;
  display: grid;
  place-items: center;
  inline-size: 94px;
  block-size: 94px;
  overflow: hidden;
  color: var(--mat-sys-color-on-surface);
  background: var(--mat-sys-color-surface);
  border: 1px solid var(--mat-sys-color-outline-variant);
  border-radius: 14px;
  box-shadow: 0 16px 34px rgb(8 20 12 / 20%);
  rotate: 4deg;
}

.scan-card__line {
  position: absolute;
  inset-block-start: 50%;
  inset-inline: 10px;
  block-size: 2px;
  background: var(--mat-sys-color-primary);
  box-shadow: 0 0 10px color-mix(in srgb, var(--mat-sys-color-primary) 80%, transparent);
  animation: scan-line 2.6s ease-in-out infinite;
}

@keyframes scan-line {
  0%,
  100% {
    translate: 0 -26px;
  }

  50% {
    translate: 0 26px;
  }
}

.scan-label {
  position: absolute;
  inset-block-end: 10px;
  color: var(--mat-sys-color-primary);
  font-family: ui-monospace, 'Cascadia Code', Consolas, monospace;
  font-size: 8px;
  font-weight: 700;
  letter-spacing: 0.12em;
}

/* 应用通知 */
.notify-phone {
  position: absolute;
  z-index: 2;
  inset-block-start: 28px;
  inset-inline-start: 14%;
  display: grid;
  place-items: center;
  inline-size: 58px;
  block-size: 98px;
  color: var(--mat-sys-color-on-tertiary-container);
  background: linear-gradient(160deg, var(--mat-sys-color-tertiary-container), color-mix(in srgb, var(--mat-sys-color-tertiary-container) 72%, var(--mat-sys-color-primary)));
  border: 3px solid var(--mat-sys-color-surface);
  border-radius: 16px;
  box-shadow: 0 14px 30px rgb(8 20 12 / 18%);
  rotate: -4deg;
}

.notify-bell {
  position: absolute;
  z-index: 4;
  inset-block-start: 20px;
  inset-inline-start: 33%;
  display: grid;
  place-items: center;
  inline-size: 30px;
  block-size: 30px;
  color: var(--mat-sys-color-on-primary);
  background: var(--mat-sys-color-primary);
  border: 3px solid var(--mat-sys-color-surface);
  border-radius: 50%;
  box-shadow: 0 8px 18px rgb(8 20 12 / 18%);
}

.notify-stack {
  position: absolute;
  z-index: 3;
  inset-block-start: 22px;
  inset-inline-end: 8%;
  display: grid;
  gap: 5px;
  inline-size: 164px;
}

.notify-card {
  display: flex;
  align-items: center;
  gap: 7px;
  padding: 6px 8px;
  color: var(--mat-sys-color-on-surface);
  background: var(--mat-sys-color-surface);
  border: 1px solid var(--mat-sys-color-outline-variant);
  border-radius: 11px;
  box-shadow: 0 8px 20px rgb(8 20 12 / 12%);
}

.notify-card--alt {
  margin-inline-start: -10px;
  rotate: 1.8deg;
}

.notify-card--ghost {
  margin-inline-start: 8px;
  opacity: 0.55;
}

.notify-card__icon {
  display: grid;
  place-items: center;
  flex: none;
  inline-size: 24px;
  block-size: 24px;
  color: var(--mat-sys-color-on-primary-container);
  background: var(--mat-sys-color-primary-container);
  border-radius: 7px;
}

.notify-card--alt .notify-card__icon {
  color: var(--mat-sys-color-on-tertiary-container);
  background: var(--mat-sys-color-tertiary-container);
}

.notify-card__lines {
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 4px;
}

.notify-card__lines i {
  block-size: 3px;
  background: var(--mat-sys-color-outline-variant);
  border-radius: 99px;
}

.notify-card__lines i:first-child {
  inline-size: 72%;
  background: var(--mat-sys-color-on-surface-variant);
  opacity: 0.65;
}

.notify-label {
  position: absolute;
  inset-block-end: 10px;
  inset-inline-start: 14%;
  color: var(--mat-sys-color-on-surface-variant);
  font-size: 8.5px;
  font-weight: 650;
  letter-spacing: 0.06em;
}

/* 输入转发 */
.feature-art--input {
  padding-block-end: 14px;
}

.input-keyboard {
  position: relative;
  z-index: 2;
  display: grid;
  gap: 4px;
  inline-size: 126px;
  padding: 8px;
  background: var(--mat-sys-color-surface);
  border: 1px solid var(--mat-sys-color-outline-variant);
  border-radius: 12px;
  box-shadow: 0 12px 28px rgb(8 20 12 / 14%);
  rotate: -3deg;
}

.input-keyboard__row {
  display: flex;
  justify-content: center;
  gap: 4px;
}

.input-keyboard__row i {
  inline-size: 17px;
  block-size: 13px;
  background: var(--mat-sys-color-surface-container-high);
  border: 1px solid var(--mat-sys-color-outline-variant);
  border-radius: 3px;
}

.input-keyboard__row:nth-child(2) i {
  inline-size: 14px;
}

.input-arrow {
  position: relative;
  z-index: 3;
  display: grid;
  place-items: center;
  inline-size: 28px;
  block-size: 28px;
  margin-inline: 10px;
  color: var(--mat-sys-color-on-primary-container);
  background: var(--mat-sys-color-primary-container);
  border-radius: 50%;
}

.input-phone {
  position: relative;
  z-index: 2;
  display: grid;
  place-items: center;
  inline-size: 48px;
  block-size: 88px;
  background: var(--mat-sys-color-primary-container);
  border: 3px solid var(--mat-sys-color-surface);
  border-radius: 14px;
  box-shadow: 0 12px 26px rgb(8 20 12 / 16%);
  rotate: 4deg;
}

.input-phone__screen {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  gap: 5px;
  inline-size: 100%;
  block-size: 100%;
  padding-block-end: 10px;
  color: var(--mat-sys-color-on-primary-container);
}

.input-phone__line {
  inline-size: 24px;
  block-size: 3px;
  background: currentColor;
  border-radius: 99px;
  opacity: 0.55;
}

.input-label {
  position: absolute;
  inset-block-end: 9px;
  color: var(--mat-sys-color-on-surface-variant);
  font-size: 8.5px;
  font-weight: 650;
  letter-spacing: 0.06em;
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
  .transfer-track i,
  .scan-card__line {
    animation: none;
  }
}
</style>
