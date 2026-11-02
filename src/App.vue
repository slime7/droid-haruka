<script setup>
import SiteHeader from './components/SiteHeader.vue';
import HeroSection from './components/HeroSection.vue';
import FeatureSection from './components/FeatureSection.vue';
import WorkspaceSection from './components/WorkspaceSection.vue';
import RequirementsSection from './components/RequirementsSection.vue';
import DownloadSection from './components/DownloadSection.vue';
import FaqSection from './components/FaqSection.vue';
import SiteFooter from './components/SiteFooter.vue';
import { useLatestRelease } from './composables/useLatestRelease.js';

const { downloadUrl } = useLatestRelease();

function openDownload() {
  window.open(downloadUrl.value, '_blank', 'noopener');
}
</script>

<template>
  <mat-app-root class="promo-app">
    <a
      class="skip-link"
      href="#main-content"
    >跳到主要内容</a>

    <SiteHeader />

    <main id="main-content">
      <HeroSection />
      <FeatureSection />
      <WorkspaceSection />
      <RequirementsSection />
      <DownloadSection />
      <FaqSection />
    </main>

    <SiteFooter />

    <mat-fab
      app
      size="small"
      icon="download"
      label="下载最新版"
      class="promo-fab"
      @click="openDownload"
    />
  </mat-app-root>
</template>
