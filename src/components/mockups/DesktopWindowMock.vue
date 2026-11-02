<script setup>
const appIcon = `${import.meta.env.BASE_URL}app-icon.png`;

const railItems = [
  { icon: 'home' },
  { icon: 'smartphone', active: true },
  { icon: 'swap_horiz' },
  { icon: 'settings' },
];

const desktopApps = [
  { icon: 'chat_bubble', shape: '4-sided-cookie', color: 'tertiary-container' },
  { icon: 'map', shape: 'gem', color: 'secondary-container' },
  { icon: 'photo_camera', shape: 'flower', color: 'primary-container' },
];
</script>

<template>
  <mat-card
    class="app-window"
    variant="elevated"
    rounded="small"
    aria-hidden="true"
  >
    <div class="app-window__titlebar">
      <img
        :src="appIcon"
        class="app-window__icon"
        width="16"
        height="16"
        alt=""
      >
      <span class="skeleton app-window__name" />
    </div>

    <div class="app-window__body">
      <nav class="app-window__rail">
        <span
          v-for="(item, index) in railItems"
          :key="index"
          class="app-window__rail-item"
          :class="{ 'app-window__rail-item--active': item.active }"
        >
          <mat-icon
            :icon="item.icon"
            size="18px"
          />
          <span class="skeleton app-window__rail-label" />
        </span>
      </nav>

      <div class="app-window__main">
        <div class="app-window__appbar">
          <span class="skeleton app-window__page" />
          <span class="app-window__device-menu">
            <span class="skeleton app-window__device" />
            <mat-icon
              icon="arrow_drop_down"
              size="13px"
            />
          </span>
          <span class="app-window__action">
            <mat-icon
              icon="link"
              size="14px"
            />
          </span>
          <span class="app-window__action">
            <mat-icon
              icon="refresh"
              size="14px"
            />
          </span>
        </div>

        <div class="app-window__content">
          <div class="mock-devices">
            <div class="mock-device mock-device--active">
              <span class="mock-device__head">
                <span class="skeleton mock-device__name" />
                <span class="mock-device__status">
                  <i />
                  <span class="skeleton mock-device__status-label" />
                </span>
              </span>
              <span class="skeleton mock-device__sub" />
              <span class="mock-device__meta">
                <mat-icon
                  icon="wifi"
                  size="11px"
                />
                <span class="skeleton mock-device__meta-line" />
                <mat-icon
                  icon="bolt"
                  size="11px"
                />
                <span class="skeleton mock-device__meta-line mock-device__meta-line--short" />
              </span>
              <span class="mock-device__action">
                <span class="skeleton mock-device__action-label" />
              </span>
            </div>

            <div class="mock-device mock-device--add">
              <mat-icon
                icon="add"
                size="16px"
              />
              <span class="skeleton mock-device__add-title" />
              <span class="skeleton mock-device__add-sub" />
            </div>
          </div>

          <div class="mock-search">
            <mat-icon
              icon="search"
              size="13px"
            />
            <span class="skeleton mock-search__line" />
          </div>

          <div class="mock-apps">
            <div
              v-for="app in desktopApps"
              :key="app.icon"
              class="mock-app"
            >
              <mat-shape
                class="mock-app__icon"
                :name="app.shape"
                :size="24"
                :color="app.color"
              >
                <mat-icon
                  :icon="app.icon"
                  size="13px"
                />
              </mat-shape>
              <span class="mock-app__meta">
                <span class="skeleton mock-app__name" />
                <span class="skeleton mock-app__package" />
              </span>
              <span class="mock-app__actions">
                <mat-icon
                  icon="add_to_home_screen"
                  size="13px"
                />
                <mat-icon
                  icon="cast"
                  size="13px"
                />
                <mat-icon
                  icon="picture_in_picture"
                  size="13px"
                />
              </span>
            </div>
          </div>
        </div>

        <nav class="app-window__bottom-nav">
          <span
            v-for="(item, index) in railItems"
            :key="`bottom-${index}`"
            :class="{ 'app-window__bottom-nav-item--active': item.active }"
          >
            <mat-icon
              :icon="item.icon"
              size="15px"
            />
            <span class="skeleton app-window__bottom-label" />
          </span>
        </nav>
      </div>
    </div>
  </mat-card>
</template>

<style scoped>
.app-window {
  inline-size: 100%;
  overflow: hidden;
  background: var(--mat-sys-color-surface);
  border: 1px solid color-mix(in srgb, var(--mat-sys-color-outline-variant) 78%, transparent);
  border-radius: 10px;
  box-shadow: var(--mat-sys-elevation-level3);
  cursor: default;
  user-select: none;
  transition: translate 280ms ease, box-shadow 280ms ease;
}

.skeleton {
  display: block;
  flex: none;
  block-size: 4px;
  background: color-mix(in srgb, var(--mat-sys-color-on-surface-variant) 22%, transparent);
  border-radius: 999px;
}

.app-window__titlebar {
  display: flex;
  align-items: center;
  gap: 6px;
  block-size: 30px;
  padding-inline: 10px;
  background: var(--mat-sys-color-surface-container);
  border-block-end: 1px solid var(--mat-sys-color-outline-variant);
}

.app-window__icon {
  inline-size: 16px;
  block-size: 16px;
  border-radius: 4px;
}

.app-window__name {
  inline-size: 48px;
  block-size: 5px;
}

.app-window__body {
  display: flex;
  min-block-size: 368px;
  background: var(--mat-sys-color-surface);
}

.app-window__rail {
  display: flex;
  flex: none;
  flex-direction: column;
  gap: 7px;
  inline-size: 58px;
  padding: 8px 4px;
  background: var(--mat-sys-color-surface-container-low);
  border-inline-end: 1px solid var(--mat-sys-color-outline-variant);
}

.app-window__rail-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3px;
  padding: 5px 2px;
  color: var(--mat-sys-color-on-surface-variant);
  border-radius: 12px;
  transition: background-color 180ms ease;
}

.app-window__rail-item--active {
  color: var(--mat-sys-color-on-primary-container);
  background: var(--mat-sys-color-primary-container);
}

.app-window__rail-item--active .skeleton {
  background: color-mix(in srgb, var(--mat-sys-color-on-primary-container) 32%, transparent);
}

.app-window__rail-label {
  inline-size: 20px;
  block-size: 3px;
  opacity: 0.72;
}

.app-window__rail-item:nth-child(1) .app-window__rail-label {
  inline-size: 16px;
}

.app-window__rail-item:nth-child(3) .app-window__rail-label {
  inline-size: 22px;
}

.app-window__rail-item:nth-child(4) .app-window__rail-label {
  inline-size: 18px;
}

.app-window__main {
  display: flex;
  flex: 1;
  flex-direction: column;
  min-inline-size: 0;
  padding: 8px 10px 10px;
}

.app-window__appbar {
  display: flex;
  align-items: center;
  gap: 5px;
  min-block-size: 26px;
  margin-block-end: 8px;
}

.app-window__page {
  inline-size: 34px;
  block-size: 6px;
  margin-inline-end: auto;
  background: color-mix(in srgb, var(--mat-sys-color-on-surface) 30%, transparent);
}

.app-window__device-menu {
  display: inline-flex;
  align-items: center;
  gap: 3px;
  padding: 4px 6px;
  color: var(--mat-sys-color-on-surface-variant);
  background: var(--mat-sys-color-surface-container-high);
  border-radius: 999px;
}

.app-window__device {
  inline-size: 24px;
  block-size: 4px;
}

.app-window__action {
  display: grid;
  place-items: center;
  flex: none;
  inline-size: 22px;
  block-size: 22px;
  color: var(--mat-sys-color-on-surface-variant);
  background: var(--mat-sys-color-surface-container-high);
  border-radius: 50%;
  transition: background-color 180ms ease, color 180ms ease;
}

.app-window__content {
  display: flex;
  flex: 1;
  flex-direction: column;
  min-block-size: 0;
}

.mock-devices {
  display: grid;
  grid-template-columns: minmax(0, 1.3fr) minmax(0, 0.7fr);
  gap: 6px;
}

.mock-device {
  box-sizing: border-box;
  min-block-size: 116px;
  padding: 9px 10px;
  border-radius: 14px;
}

.mock-device--active {
  display: flex;
  flex-direction: column;
  gap: 6px;
  color: var(--mat-sys-color-on-tertiary-container);
  background:
    radial-gradient(circle at 82% 18%, color-mix(in srgb, var(--mat-sys-color-primary) 34%, transparent), transparent 50%),
    linear-gradient(145deg, var(--mat-sys-color-tertiary-container), color-mix(in srgb, var(--mat-sys-color-tertiary-container) 76%, var(--mat-sys-color-primary)));
}

.mock-device--active .skeleton {
  background: color-mix(in srgb, var(--mat-sys-color-on-tertiary-container) 30%, transparent);
}

.mock-device__head {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 6px;
}

.mock-device__name {
  inline-size: 44px;
  block-size: 6px;
}

.mock-device__status {
  display: inline-flex;
  align-items: center;
  gap: 3px;
  padding: 3px 5px;
  color: var(--mat-sys-color-on-surface);
  background: color-mix(in srgb, var(--mat-sys-color-surface) 72%, transparent);
  border-radius: 999px;
}

.mock-device__status i {
  inline-size: 3px;
  block-size: 3px;
  background: var(--mat-sys-color-primary);
  border-radius: 50%;
}

.mock-device__status .skeleton {
  inline-size: 20px;
  block-size: 3px;
  background: color-mix(in srgb, var(--mat-sys-color-on-surface) 28%, transparent);
}

.mock-device__sub {
  inline-size: 72px;
  block-size: 3px;
  opacity: 0.8;
}

.mock-device__meta {
  display: flex;
  align-items: center;
  gap: 2px;
  margin-block-start: 2px;
  opacity: 0.82;
}

.mock-device__meta .skeleton {
  inline-size: 14px;
  block-size: 3px;
}

.mock-device__meta .mock-device__meta-line--short {
  inline-size: 22px;
}

.mock-device__meta .mat-icon + .mat-icon {
  margin-inline-start: 5px;
}

.mock-device__action {
  align-self: flex-start;
  margin-block-start: auto;
  padding: 4px 6px;
  background: color-mix(in srgb, var(--mat-sys-color-surface) 82%, transparent);
  border-radius: 999px;
}

.mock-device__action .skeleton {
  inline-size: 28px;
  block-size: 3px;
  background: color-mix(in srgb, var(--mat-sys-color-on-surface) 30%, transparent);
}

.mock-device--add {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  color: var(--mat-sys-color-on-surface-variant);
  background: var(--mat-sys-color-surface-container-low);
  border: 1px solid var(--mat-sys-color-outline-variant);
  text-align: center;
  transition: border-color 180ms ease;
}

.mock-device--add .mat-icon {
  color: var(--mat-sys-color-primary);
}

.mock-device__add-title {
  inline-size: 36px;
  block-size: 5px;
  background: color-mix(in srgb, var(--mat-sys-color-on-surface-variant) 30%, transparent);
}

.mock-device__add-sub {
  inline-size: 54px;
  block-size: 3px;
}

.mock-search {
  display: flex;
  align-items: center;
  gap: 5px;
  block-size: 30px;
  margin-block-start: 9px;
  padding-inline: 9px;
  color: var(--mat-sys-color-on-surface-variant);
  background: var(--mat-sys-color-surface-container-high);
  border-radius: 999px;
}

.mock-search__line {
  inline-size: 66px;
  block-size: 4px;
}

.mock-apps {
  display: grid;
  gap: 4px;
  margin-block-start: 8px;
}

.mock-app {
  display: flex;
  align-items: center;
  gap: 7px;
  min-block-size: 40px;
  padding: 4px 7px;
  background: var(--mat-sys-color-surface-container-low);
  border-radius: 9px;
  transition: background-color 180ms ease;
}

.mock-app__icon {
  flex: none;
}

.mock-app__meta {
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 5px;
  min-inline-size: 0;
}

.mock-app__name {
  inline-size: 54px;
  block-size: 5px;
  background: color-mix(in srgb, var(--mat-sys-color-on-surface-variant) 30%, transparent);
}

.mock-app__package {
  inline-size: 92px;
  block-size: 3px;
  opacity: 0.78;
}

.mock-app__actions {
  display: flex;
  flex: none;
  gap: 6px;
  color: var(--mat-sys-color-on-surface-variant);
}

.app-window__bottom-nav {
  display: none;
}

@media (hover: hover) {
  .app-window:hover {
    translate: 0 -4px;
    box-shadow: var(--mat-sys-elevation-level4);
  }

  .app-window:hover .app-window__titlebar {
    background: var(--mat-sys-color-surface-container-high);
  }

  .app-window__rail-item:hover {
    background: var(--mat-sys-color-surface-container-high);
  }

  .app-window__rail-item--active:hover {
    background: var(--mat-sys-color-primary-container);
  }

  .mock-app:hover {
    background: var(--mat-sys-color-surface-container);
  }

  .mock-device--add:hover {
    border-color: color-mix(in srgb, var(--mat-sys-color-primary) 48%, transparent);
  }

  .app-window__action:hover {
    color: var(--mat-sys-color-primary);
    background: var(--mat-sys-color-primary-container);
  }
}

@media (max-width: 620px) {
  .app-window__body {
    min-block-size: 0;
    flex-direction: column;
  }

  .app-window__rail {
    display: none;
  }

  .app-window__main {
    padding: 7px 8px 8px;
  }

  .app-window__appbar {
    margin-block-end: 6px;
  }

  .mock-device {
    min-block-size: 96px;
    padding: 8px;
  }

  .mock-search {
    block-size: 26px;
    margin-block-start: 7px;
  }

  .mock-app {
    min-block-size: 36px;
  }

  .app-window__bottom-nav {
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 4px;
    margin-block-start: 7px;
    padding-block-start: 8px;
    color: var(--mat-sys-color-on-surface-variant);
    border-block-start: 1px solid var(--mat-sys-color-outline-variant);
  }

  .app-window__bottom-nav > span {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3px;
  }

  .app-window__bottom-label {
    inline-size: 16px;
    block-size: 2.5px;
  }

  .app-window__bottom-nav-item--active {
    color: var(--mat-sys-color-primary);
  }

  .app-window__bottom-nav-item--active .skeleton {
    background: color-mix(in srgb, var(--mat-sys-color-primary) 42%, transparent);
  }
}

@media (max-width: 420px) {
  .mock-devices {
    grid-template-columns: minmax(0, 1fr);
  }

  .mock-device--add {
    display: none;
  }
}

@media (prefers-reduced-motion: reduce) {
  .app-window,
  .app-window__rail-item,
  .mock-app,
  .mock-device--add,
  .app-window__action {
    transition: none;
  }

  .app-window:hover {
    translate: none;
  }
}
</style>
