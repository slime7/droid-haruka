<script setup>
defineProps({
  tilt: {
    type: Number,
    default: 0,
  },
});

const phoneApps = [
  '#ff9b64',
  '#8bd8ff',
  '#3ddc84',
  '#dfff6d',
  '#f2e8d5',
  '#b8a6ff',
];
</script>

<template>
  <div
    class="phone-mock"
    :style="{ '--phone-tilt': `${tilt}deg` }"
    aria-hidden="true"
  >
    <div class="phone-mock__frame">
      <div class="phone-mock__screen">
        <div class="phone-mock__status">
          <span class="skeleton phone-mock__time" />
          <span class="phone-mock__status-icons">
            <span class="phone-mock__signal" />
            <span class="skeleton phone-mock__battery" />
          </span>
        </div>

        <div class="phone-mock__clock">
          <span class="skeleton phone-mock__clock-time" />
          <span class="skeleton phone-mock__clock-date" />
        </div>

        <div class="phone-mock__apps">
          <span
            v-for="(color, index) in phoneApps"
            :key="index"
            class="phone-mock__app"
            :style="{ background: color }"
          />
        </div>

        <div class="phone-mock__dock">
          <span
            v-for="(color, index) in phoneApps.slice(0, 4)"
            :key="`dock-${index}`"
            class="phone-mock__dock-icon"
            :style="{ background: color }"
          />
        </div>

        <span class="phone-mock__home" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.phone-mock {
  container-type: inline-size;
  inline-size: 100%;
  filter: drop-shadow(0 26px 42px rgb(10 20 14 / 22%));
  cursor: default;
  user-select: none;
  rotate: var(--phone-tilt, 0deg);
  transition: rotate 320ms ease, translate 320ms ease, filter 320ms ease;
}

.skeleton {
  display: block;
  flex: none;
  border-radius: 999px;
}

.phone-mock__frame {
  position: relative;
  box-sizing: border-box;
  padding: 5.33cqw;
  background: #0c1711;
  border: 1px solid rgb(255 255 255 / 12%);
  border-radius: 22.67cqw;
}

.phone-mock__frame::before {
  position: absolute;
  inset: -2px;
  border: 1px solid rgb(255 255 255 / 14%);
  border-radius: 24cqw;
  content: '';
  pointer-events: none;
}

.phone-mock__screen {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  aspect-ratio: 134 / 300;
  padding: 8cqw 9.3cqw 6.7cqw;
  overflow: hidden;
  background:
    radial-gradient(circle at 76% 12%, rgb(61 220 132 / 34%), transparent 38%),
    radial-gradient(circle at 18% 74%, rgb(139 216 255 / 26%), transparent 44%),
    linear-gradient(160deg, #16261c, #0d1a13);
  border-radius: 18cqw;
}

.phone-mock__status {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.phone-mock__time {
  inline-size: 12cqw;
  block-size: 2.2cqw;
  background: rgb(255 255 255 / 42%);
}

.phone-mock__status-icons {
  display: inline-flex;
  align-items: center;
  gap: 1.6cqw;
}

.phone-mock__signal {
  inline-size: 2.7cqw;
  block-size: 2.7cqw;
  background: rgb(255 255 255 / 34%);
  border-radius: 50%;
}

.phone-mock__battery {
  inline-size: 7cqw;
  block-size: 2.2cqw;
  background: rgb(255 255 255 / 34%);
}

.phone-mock__clock {
  display: flex;
  flex-direction: column;
  gap: 3cqw;
  margin-block-start: 14cqw;
}

.phone-mock__clock-time {
  inline-size: 38cqw;
  block-size: 10cqw;
  background: linear-gradient(100deg, rgb(244 245 238 / 92%), rgb(244 245 238 / 52%));
  border-radius: 3cqw;
}

.phone-mock__clock-date {
  inline-size: 25cqw;
  block-size: 2.7cqw;
  background: rgb(244 245 238 / 34%);
}

.phone-mock__apps {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 7cqw 8cqw;
  justify-items: center;
  margin-block-start: 13cqw;
}

.phone-mock__app {
  inline-size: 18.7cqw;
  aspect-ratio: 1;
  border-radius: 34%;
  box-shadow: inset 0 1px 0 rgb(255 255 255 / 32%);
}

.phone-mock__app:nth-child(2) {
  border-radius: 50%;
}

.phone-mock__app:nth-child(3) {
  border-radius: 38% 62% 38% 62% / 62% 38% 62% 38%;
}

.phone-mock__app:nth-child(4) {
  border-radius: 45% 55% 50% 50% / 55% 45% 55% 45%;
}

.phone-mock__app:nth-child(5) {
  border-radius: 30% 70% 35% 65% / 65% 30% 70% 35%;
}

.phone-mock__app:nth-child(6) {
  border-radius: 50% 36% 50% 36%;
}

.phone-mock__dock {
  display: flex;
  justify-content: center;
  gap: 6.7cqw;
  margin-block-start: auto;
  padding: 5.3cqw 6.7cqw;
  background: rgb(255 255 255 / 10%);
  border: 1px solid rgb(255 255 255 / 8%);
  border-radius: 10.7cqw;
  backdrop-filter: blur(8px);
}

.phone-mock__dock-icon {
  inline-size: 14.7cqw;
  aspect-ratio: 1;
  border-radius: 5.3cqw;
  box-shadow: inset 0 1px 0 rgb(255 255 255 / 28%);
}

.phone-mock__home {
  align-self: center;
  inline-size: 28cqw;
  block-size: 1.2cqw;
  margin-block-start: 3cqw;
  background: rgb(244 245 238 / 46%);
  border-radius: 999px;
}

@media (hover: hover) {
  .phone-mock:hover {
    rotate: 0deg;
    translate: -3px -6px;
    filter: drop-shadow(0 34px 52px rgb(10 20 14 / 28%));
  }
}

@media (prefers-reduced-motion: reduce) {
  .phone-mock {
    transition: none;
  }

  .phone-mock:hover {
    rotate: var(--phone-tilt, 0deg);
    translate: none;
  }
}
</style>
