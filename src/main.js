import { createApp, watch } from 'vue';
import { createMatUi } from 'mde-vue';
import 'mde-vue/styles.css';
import App from './App.vue';
import { applyThemeColor, readThemeMode } from './theme.js';
import './style.css';

const matUi = createMatUi({
  useRipple: {
    variant: 'glow',
  },
  theme: {
    mode: readThemeMode(),
    seedColor: '#3ddc84',
    schemeVariant: 'tonal-spot',
    contrastLevel: 0,
  },
  defaults: {
    card: {
      flat: true,
    },
    tooltip: {
      openDelay: 400,
      closeDelay: 500,
    },
  },
});

createApp(App).use(matUi).mount('#app');

watch(
  matUi.theme.resolvedMode,
  (mode) => applyThemeColor(mode),
  { immediate: true },
);
