<script setup>
import { computed, ref } from 'vue';
import { useMatTheme } from 'mde-vue';
import { openReleases } from '../composables/useLatestRelease.js';
import { saveThemeMode } from '../theme.js';

const appIcon = `${import.meta.env.BASE_URL}app-icon.png`;
const theme = useMatTheme();
const menuOpen = ref(false);
const isDark = computed(() => theme.resolvedMode.value === 'dark');
const themeLabel = computed(() => (isDark.value ? '切换到亮色主题' : '切换到暗色主题'));

const navItems = [
  { id: 'features', label: '功能', icon: 'apps' },
  { id: 'experience', label: '使用体验', icon: 'space_dashboard' },
  { id: 'requirements', label: '运行要求', icon: 'rule' },
  { id: 'download', label: '下载', icon: 'download' },
  { id: 'questions', label: '常见问题', icon: 'help' },
];

function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function toggleTheme() {
  const next = isDark.value ? 'light' : 'dark';
  theme.setMode(next);
  saveThemeMode(next);
}
</script>

<template>
  <mat-app-bar
    app
    mode="sticky"
    bordered
    class="site-header"
  >
    <template #leading>
      <a
        class="brand"
        href="#top"
        aria-label="Droid Haruka 首页"
      >
        <mat-avatar
          :src="appIcon"
          :size="38"
          aria-hidden="true"
        />
        <span class="brand__text">
          <strong>Droid Haruka</strong>
          <small>Android on your desktop</small>
        </span>
      </a>
    </template>

    <nav
      class="site-nav"
      aria-label="页面导航"
    >
      <a
        v-for="item in navItems"
        :key="item.id"
        :href="`#${item.id}`"
      >
        {{ item.label }}
      </a>
    </nav>

    <template #trailing>
      <div class="header-actions">
        <mat-btn
          variant="standard"
          :icon="isDark ? 'light_mode' : 'dark_mode'"
          :label="themeLabel"
          @click="toggleTheme"
        />
        <mat-btn
          id="promo-menu-button"
          class="header-menu-button"
          variant="standard"
          icon="menu"
          label="打开导航菜单"
          :aria-expanded="menuOpen"
          aria-haspopup="menu"
          @click="menuOpen = !menuOpen"
        />
        <mat-btn
          class="header-github"
          variant="text"
          suffix="arrow_outward"
          @click="openReleases"
        >
          GitHub
        </mat-btn>
        <mat-btn
          class="header-download"
          variant="filled"
          suffix="download"
          @click="openReleases"
        >
          下载
        </mat-btn>
        <mat-btn
          class="header-download-compact"
          variant="filled"
          icon="download"
          label="下载最新版"
          @click="openReleases"
        />
      </div>
    </template>
  </mat-app-bar>

  <mat-menu
    v-model="menuOpen"
    anchor="promo-menu-button"
  >
    <mat-menu-item
      v-for="item in navItems"
      :key="item.id"
      @click="scrollToSection(item.id)"
    >
      <template #leading>
        <mat-icon :icon="item.icon" />
      </template>
      {{ item.label }}
    </mat-menu-item>
    <mat-divider />
    <mat-menu-item @click="openReleases">
      <template #leading>
        <mat-icon icon="open_in_new" />
      </template>
      GitHub 仓库
    </mat-menu-item>
  </mat-menu>
</template>

<style scoped>
.site-header {
  z-index: 60;
  padding-inline: var(--promo-gutter);
  background: var(--mat-sys-color-surface);
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  min-inline-size: 0;
  padding: 4px 8px 4px 4px;
  color: inherit;
  text-decoration: none;
  border-radius: var(--mat-sys-shape-corner-full);
}

.brand:focus-visible {
  outline: 3px solid var(--mat-sys-color-primary);
  outline-offset: 2px;
}

.brand__text {
  display: flex;
  flex-direction: column;
  min-inline-size: 0;
  line-height: 1.15;
}

.brand__text strong {
  font-size: 15px;
  font-variation-settings: 'wght' 720;
  letter-spacing: 0.01em;
  white-space: nowrap;
}

.brand__text small {
  color: var(--mat-sys-color-on-surface-variant);
  font-size: 11px;
  letter-spacing: 0.02em;
  white-space: nowrap;
}

.site-nav {
  display: flex;
  align-items: center;
  gap: clamp(12px, 2vw, 26px);
  margin-inline-start: clamp(16px, 3vw, 36px);
}

.site-nav a {
  position: relative;
  padding-block: 8px;
  color: var(--mat-sys-color-on-surface-variant);
  font-size: 13.5px;
  font-weight: 500;
  text-decoration: none;
  white-space: nowrap;
}

.site-nav a::after {
  position: absolute;
  inset-inline: 0;
  inset-block-end: 2px;
  block-size: 2px;
  background: var(--mat-sys-color-primary);
  border-radius: 999px;
  content: '';
  opacity: 0;
  transform: scaleX(0.4);
  transition: opacity 180ms ease, transform 180ms ease;
}

.site-nav a:hover::after,
.site-nav a:focus-visible::after {
  opacity: 1;
  transform: scaleX(1);
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 4px;
}

.header-menu-button,
.header-download-compact {
  display: none;
}

@media (max-width: 1040px) {
  .header-github {
    display: none;
  }
}

@media (max-width: 900px) {
  .site-nav,
  .header-download {
    display: none;
  }

  .header-menu-button,
  .header-download-compact {
    display: inline-flex;
  }
}

@media (max-width: 560px) {
  .brand__text small {
    display: none;
  }

  .brand__text strong {
    font-size: 14px;
  }
}
</style>
