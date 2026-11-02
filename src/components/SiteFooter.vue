<script setup>
const appIcon = `${import.meta.env.BASE_URL}app-icon.png`;
const year = new Date().getFullYear();

const footerLinks = [
  { label: '功能', href: '#features' },
  { label: '使用体验', href: '#experience' },
  { label: '运行要求', href: '#requirements' },
  { label: '下载', href: '#download' },
  { label: '常见问题', href: '#questions' },
];
</script>

<template>
  <footer class="site-footer">
    <mat-divider class="site-footer__divider" />
    <mat-container>
      <div class="site-footer__top">
        <div class="site-footer__brand">
          <a
            href="#top"
            class="brand"
            aria-label="Droid Haruka 首页"
          >
            <mat-avatar
              :src="appIcon"
              :size="36"
              aria-hidden="true"
            />
            <span>
              <strong>Droid Haruka</strong>
              <small>Android on your desktop</small>
            </span>
          </a>
          <p>把 Android 带进桌面工作流。</p>
        </div>

        <nav
          class="site-footer__nav"
          aria-label="页脚导航"
        >
          <a
            v-for="link in footerLinks"
            :key="link.href"
            :href="link.href"
          >
            {{ link.label }}
          </a>
        </nav>

        <div class="site-footer__links">
          <a
            href="https://github.com/slime7/droid-haruka"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
            <mat-icon
              icon="arrow_outward"
              size="small"
              aria-hidden="true"
            />
          </a>
          <a
            href="https://github.com/slime7/droid-haruka/releases"
            target="_blank"
            rel="noreferrer"
          >
            Releases
            <mat-icon
              icon="arrow_outward"
              size="small"
              aria-hidden="true"
            />
          </a>
          <a
            href="https://slime7.github.io/mde-vue/"
            target="_blank"
            rel="noreferrer"
          >
            由 mde-vue 构建
            <mat-icon
              icon="arrow_outward"
              size="small"
              aria-hidden="true"
            />
          </a>
        </div>
      </div>

      <div class="site-footer__bottom">
        <span>© {{ year }} Slime7</span>
        <span>Windows 10 / 11 · Linux · Android 11+</span>
      </div>
    </mat-container>
  </footer>
</template>

<style scoped>
.site-footer {
  margin-block-start: auto;
  padding-block: 28px;
  color: var(--mat-sys-color-on-surface-variant);
}

.site-footer__divider {
  margin-block-end: 36px;
}

.site-footer__top {
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(0, 1fr) minmax(0, 1fr);
  gap: 28px;
  align-items: start;
}

.site-footer__brand .brand {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: var(--mat-sys-color-on-surface);
  text-decoration: none;
}

.site-footer__brand .brand span {
  display: flex;
  flex-direction: column;
  line-height: 1.25;
}

.site-footer__brand .brand strong {
  font-size: 14px;
  font-weight: 720;
}

.site-footer__brand .brand small {
  color: var(--mat-sys-color-on-surface-variant);
  font-size: 10.5px;
}

.site-footer__brand p {
  margin: 12px 0 0;
  font-size: 12px;
}

.site-footer__nav {
  display: flex;
  flex-wrap: wrap;
  gap: 8px 18px;
  padding-block-start: 6px;
}

.site-footer__nav a,
.site-footer__links a {
  color: var(--mat-sys-color-on-surface-variant);
  font-size: 11.5px;
  text-decoration: none;
}

.site-footer__nav a:hover,
.site-footer__links a:hover {
  color: var(--mat-sys-color-primary);
  text-decoration: underline;
  text-underline-offset: 3px;
}

.site-footer__links {
  display: flex;
  flex-wrap: wrap;
  gap: 8px 16px;
  padding-block-start: 6px;
}

.site-footer__links a {
  display: inline-flex;
  align-items: center;
  gap: 2px;
}

.site-footer__bottom {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 6px 20px;
  align-items: center;
  margin-block-start: 30px;
  padding-block-start: 18px;
  border-block-start: 1px solid var(--mat-sys-color-outline-variant);
  font-size: 10.5px;
}

@media (max-width: 760px) {
  .site-footer__top {
    grid-template-columns: minmax(0, 1fr);
    gap: 20px;
  }

  .site-footer__bottom {
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
  }
}
</style>
